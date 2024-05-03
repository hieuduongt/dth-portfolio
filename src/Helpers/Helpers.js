export const sleep = ms => new Promise(r => setTimeout(r, ms));

export const createHiddenStyle = (rect, width, height, noEffect = undefined) => {
    return {
        style: {
            fontSize: "0",
            opacity: 0,
            visibility: "hidden",
            transition: noEffect ? "" : "transform 0.3s ease-in-out 0s, visibility 0s linear 0.3s, opacity 0.3s linear 0s, width 0.25s ease-in-out, height 0.25s ease-in-out",
            width: "40px !important",
            height: "40px !important",
            transformOrigin: `${rect.left}px ${rect.top}px`
        },
        position: {
            x: rect.left + 10,
            y: rect.top + 10
        },
        size: {
            width: width,
            height: height
        },
        rect: rect
    };
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

export const handleOpenAnApplication = async (index, name, style, setStyle, setIsRunningApp, setAreOpenedApps, openedApps, setNewZIndex, rect) => {
    setIsRunningApp(index);
    setAreOpenedApps({ ...openedApps, [name]: openedApps[name] === 1 ? 0 : 1 });
    let newStyle;
    if(!style.style || style.style.visibility === 'hidden') {
        newStyle = createVisibleStyle(rect || style.rect);
        setNewZIndex(name);
    } else {
        newStyle = createHiddenStyle(rect || style.rect, 40, 40);
    }
    setStyle(newStyle);
    if (newStyle.style.visibility === "visible") {
        const styleWithNoAnimation = createVisibleStyle(rect, false);
        await sleep(300);
        setStyle(styleWithNoAnimation);
    }
}