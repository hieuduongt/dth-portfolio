export const sleep = ms => new Promise(r => setTimeout(r, ms));

export const createHiddenStyle = (rect, noEffect = undefined) => {
    return {
        style: {
            fontSize: "0",
            opacity: 0,
            visibility: "hidden",
            transition: noEffect ? "" : "transform 0.3s ease-in-out 0s, visibility 0s linear 0.3s, opacity 0.3s linear 0s, width 0.25s ease-in-out, height 0.25s ease-in-out",
            width: `${rect.width}px !important`,
            height: `${rect.height}px !important`,
            transformOrigin: `${rect.left}px ${rect.top}px`
        },
        position: {
            x: rect.left + 10,
            y: rect.top + 10
        },
        size: {
            width: rect.width,
            height: rect.height
        },
        rect: rect
    };
}

export const getSettingsFromStorage = () => {
    return JSON.parse(localStorage.getItem("settings")||"{}");
}

export const getSettingByName = (name = "") => {
    const currentSettings = getSettingsFromStorage();
    return currentSettings[name];
}

export const saveSettingsIntoStorage = (settings) => {
    return localStorage.setItem("settings", JSON.stringify(settings));
}

export const saveSetting = (name = "", value = "") => {
    const currentSettings = getSettingsFromStorage();
    currentSettings[name] = value;
    saveSettingsIntoStorage(currentSettings);
}

export const createVisibleStyle = (rect, animation = true) => {
    return {
        style: {
            opacity: 1,
            visibility: "visible",
            transition: animation ? "transform 0.3s ease-in-out 0s, translate 0.3s ease-in-out, visibility 0s linear 0s, opacity 0.15s linear 0.15s, width 0.3s ease-in-out, height 0.3s ease-in-out" : "",
        },
        rect: rect
    };
}

export const handleOpenAnApplication = async (name, style, setStyle, setAreOpenedApps, openedApps, setNewZIndex, rect) => {
    setAreOpenedApps({ ...openedApps, [name]: openedApps[name] === 1 ? 0 : 1 });
    let newStyle;
    if(!style.style || style.style.visibility === 'hidden') {
        newStyle = createVisibleStyle(rect || style.rect);
        setNewZIndex(name);
    } else {
        newStyle = createHiddenStyle(rect || style.rect);
    }
    setStyle(newStyle);
    if (newStyle.style.visibility === "visible") {
        const styleWithNoAnimation = createVisibleStyle(rect, false);
        await sleep(300);
        setStyle(styleWithNoAnimation);
    }
}

export const formatDate = () => {
    const date = new Date();
    return (date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear());
}