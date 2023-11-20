export const sleep = ms => new Promise(r => setTimeout(r, ms));

export const createHiddenStyle = (rect, width, height) => {
    return {
        style: {
            fontSize: "0",
            opacity: 0,
            visibility: "hidden",
            transition: "left 0.2s, right 0.2s linear, bottom 0.3s linear, transform 0.3s ease-in-out, translate 0.3s ease-in-out, visibility 0.4s ease-in-out, opacity 0.4s ease-in-out, width 0.2s ease-in-out, height 0.2s ease-in-out",
            width: "50px !important",
            height: "50px !important",
            left: `${rect.left + 50}px !important`,
            top: `${rect.top}px !important`
        },
        position: {
            x: rect.left + 50,
            y: rect.top
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
            transition: animation ? "right 0.3s linear, left 0.3s linear, bottom 0.3s linear, transform 0.3s ease-in-out, translate 0.3s ease-in-out, visibility 0.4s ease-in-out, opacity 0.4s ease-in-out, width 0.2s ease-in-out, height 0.2s ease-in-out" : "",
        },
        rect: rect
    };
}

export const handleOpenAnApplication = async (index, name, style, setStyle, setIsRunningApp, setAreOpenedApps, openedApps) => {
    setIsRunningApp(index);
    setAreOpenedApps({ ...openedApps, [name]: 1 });
    const newStyle = !style.style || style.style.visibility === 'hidden' ? createVisibleStyle(style.rect) : createHiddenStyle(style.rect, 50, 50);
    setStyle(newStyle);
    if (newStyle.style.visibility === "visible") {
        const styleWithNoAnimation = createVisibleStyle(style.rect, false);
        await sleep(300);
        setStyle(styleWithNoAnimation);
    }
}