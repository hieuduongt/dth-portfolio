import { AppContext, actionBarColors, backGrounds, blurLevels } from "../../App";
import { useContext, useState } from 'react';
import { Window } from '../../Layouts/Window';
import { Switch } from "../../components/Switch";

const settings = {
    colorSetting: "colorSetting",
    wallpaperSetting: "wallpaperSetting"
}

const ColorPanelContent = (props) => {
    const { actionBarColor, setNewActionBarColor } = props;
    return (
        <div className="color-select-container br-1">
            <div className="setting-title-text">
                Color Panel Settings
            </div>
            <div className="color-selection">
                <Switch checked={actionBarColor === actionBarColors.color_1} disabled={actionBarColor === actionBarColors.color_1} onChange={(value) => setNewActionBarColor(actionBarColors.color_1)} />
                <div className={`color-panel br-1 ${actionBarColor === actionBarColors.color_1 ? "current-color-panel" : ""} color-1`} onClick={() => setNewActionBarColor(actionBarColors.color_1)}>
                </div>
            </div>
            <div className="color-selection">
                <Switch checked={actionBarColor === actionBarColors.color_2} disabled={actionBarColor === actionBarColors.color_2} onChange={(value) => setNewActionBarColor(actionBarColors.color_2)} />
                <div className={`color-panel br-1 ${actionBarColor === actionBarColors.color_2 ? "current-color-panel" : ""} color-2`} onClick={() => setNewActionBarColor(actionBarColors.color_2)}>
                </div>
            </div>
            <div className="color-selection">
                <Switch checked={actionBarColor === actionBarColors.color_3} disabled={actionBarColor === actionBarColors.color_3} onChange={(value) => setNewActionBarColor(actionBarColors.color_3)} />
                <div className={`color-panel br-1 ${actionBarColor === actionBarColors.color_3 ? "current-color-panel" : ""} color-3`} onClick={() => setNewActionBarColor(actionBarColors.color_3)}>
                </div>
            </div>
            <div className="color-selection">
                <Switch checked={actionBarColor === actionBarColors.color_4} disabled={actionBarColor === actionBarColors.color_4} onChange={(value) => setNewActionBarColor(actionBarColors.color_4)} />
                <div className={`color-panel br-1 ${actionBarColor === actionBarColors.color_4 ? "current-color-panel" : ""} color-4`} onClick={() => setNewActionBarColor(actionBarColors.color_4)}>
                </div>
            </div>
            <div className="color-selection">
                <Switch checked={actionBarColor === actionBarColors.color_5} disabled={actionBarColor === actionBarColors.color_5} onChange={(value) => setNewActionBarColor(actionBarColors.color_5)} />
                <div className={`color-panel br-1 ${actionBarColor === actionBarColors.color_5 ? "current-color-panel" : ""} color-5`} onClick={() => setNewActionBarColor(actionBarColors.color_5)}>
                </div>
            </div>
        </div>
    )
}

const WallpaperContent = (props) => {
    const { currentBackground, setBackGround } = props;
    return (
        <div className="wallpaper-select-container br-1">
            <div className="setting-title-text">
                Wallpaper Settings
            </div>
            <div className="list-wallpapers">
                <div className={`wallpaper-card`} onClick={() => setBackGround(backGrounds.appearance_dynamic.name, backGrounds.appearance_dynamic.light, backGrounds.appearance_dynamic.dark)}>
                    <img src={backGrounds.appearance_dynamic.light} alt="appearance_dynamic" className={`${currentBackground === backGrounds.appearance_dynamic.name ? "current-wallpaper" : ""}`} />
                </div>
                <div className={`wallpaper-card`} onClick={() => setBackGround(backGrounds.colorful.name, backGrounds.colorful.light, backGrounds.colorful.dark)}>
                    <img src={backGrounds.colorful.light} alt="colorful" className={`${currentBackground === backGrounds.colorful.name ? "current-wallpaper" : ""}`} />
                </div>
                <div className={`wallpaper-card`} onClick={() => setBackGround(backGrounds.ventura.name, backGrounds.ventura.light, backGrounds.ventura.dark)}>
                    <img src={backGrounds.ventura.light} alt="ventura" className={`${currentBackground === backGrounds.ventura.name ? "current-wallpaper" : ""}`} />
                </div>
                <div className={`wallpaper-card`} onClick={() => setBackGround(backGrounds.window_default.name, backGrounds.window_default.light, backGrounds.window_default.dark)}>
                    <img src={backGrounds.window_default.light} alt="ventura" className={`${currentBackground === backGrounds.window_default.name ? "current-wallpaper" : ""}`} />
                </div>
                <div className={`wallpaper-card`} onClick={() => setBackGround(backGrounds.window7.name, backGrounds.window7.light, backGrounds.window7.dark)}>
                    <img src={backGrounds.window7.light} alt="ventura" className={`${currentBackground === backGrounds.window7.name ? "current-wallpaper" : ""}`} />
                </div>
                <div className={`wallpaper-card`} onClick={() => setBackGround(backGrounds.window_bliss.name, backGrounds.window_bliss.light, backGrounds.window_bliss.dark)}>
                    <img src={backGrounds.window_bliss.light} alt="ventura" className={`${currentBackground === backGrounds.window_bliss.name ? "current-wallpaper" : ""}`} />
                </div>
                <div className={`wallpaper-card`} onClick={() => setBackGround(backGrounds.window_flower.name, backGrounds.window_flower.light, backGrounds.window_flower.dark)}>
                    <img src={backGrounds.window_flower.light} alt="ventura" className={`${currentBackground === backGrounds.window_flower.name ? "current-wallpaper" : ""}`} />
                </div>
            </div>
        </div>
    )
}

const Content = (props) => {
    const { theme,
        setNewTheme,
        blur,
        setNewBlurLevel,
        className,
        actionBarColor,
        setNewActionBarColor,
        currentBackground,
        setBackGround
    } = props;
    const [currentSetting, setCurrentSetting] = useState(settings.wallpaperSetting);

    return (
        <div className={className}>
            <div className="setting-content">
                <div className="main-settings">
                    <div className={`info ${theme} br-1`}>
                        <div className="setting-section bd-b">
                            <div className="setting-icon">
                                <img src="theme-setting-icon.png" alt="" />
                            </div>
                            <div className="setting-title-text">
                                Dark Mode
                            </div>
                            <div className="setting-switch">
                                <Switch checked={theme.includes("dark")} onChange={(value) => {
                                    setNewTheme(value ? "dark-background" : "light-background")
                                }} />
                            </div>
                        </div>
                        <div className="setting-section bd-b">
                            <div className="setting-icon">
                                <img src="blurred-setting-icon.png" alt="" />
                            </div>
                            <div className="setting-title-text">
                                Blurred
                            </div>
                            <div className="setting-switch">
                                <Switch checked={blur ? true : false} onChange={(value) => { value ? setNewBlurLevel(blurLevels.blur) : setNewBlurLevel(blurLevels.none) }} />
                            </div>
                        </div>
                        <div className={`desktop setting-section selectable bd-b ${currentSetting === settings.colorSetting ? "current-setting" : ""}`} onClick={() => setCurrentSetting(settings.colorSetting)}>
                            <div className="setting-icon">
                                <img src="color-selection-icon.png" alt="" />
                            </div>
                            <div className="setting-title-text">
                                Color Panel Settings
                            </div>
                        </div>
                        <div className={`setting-section selectable ${currentSetting === settings.wallpaperSetting ? "current-setting" : ""}`} onClick={() => setCurrentSetting(settings.wallpaperSetting)}>
                            <div className="setting-icon">
                                <img src="wallpaper-icon.png" alt="" />
                            </div>
                            <div className="setting-title-text">
                                Wallpaper Settings
                            </div>
                        </div>
                    </div>
                </div>
                <div className="setting-detail-content">
                    <div className={`info ${theme} br-1`}>
                        {currentSetting === settings.colorSetting ? <ColorPanelContent actionBarColor={actionBarColor} setNewActionBarColor={setNewActionBarColor} /> : <></>}
                        {currentSetting === settings.wallpaperSetting ? <WallpaperContent currentBackground={currentBackground} setBackGround={setBackGround} /> : <></>}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Settings = (props) => {
    const { children } = props;
    const {
        theme,
        setNewTheme,
        blur,
        setNewBlurLevel,
        actionBarColor,
        setNewActionBarColor,
        settingsStyle,
        setNewSettingsStyle,
        zIndex,
        setNewZIndex,
        currentBackground,
        setBackGround
    } = useContext(AppContext);

    return (
        <>
            <Content
                theme={theme}
                className={`mobile window-content mobile-content ${theme} ${blur} br-1`}
                setNewTheme={setNewTheme}
                blur={blur}
                setNewBlurLevel={setNewBlurLevel}
                setNewActionBarColor={setNewActionBarColor}
                actionBarColor={actionBarColor}
                currentBackground={currentBackground}
                setBackGround={setBackGround} />
            <Window
                handleOnMouseDown={() => setNewZIndex("settings")}
                zIndex={zIndex.find(item => item.name === "settings").zIndex}
                className="window desktop"
                defaultPosition={settingsStyle.defaultPosition}
                position={{
                    x: settingsStyle?.position?.x || "",
                    y: settingsStyle?.position?.y || ""
                }}
                size={{
                    height: settingsStyle?.size?.height || "",
                    width: settingsStyle?.size?.width || ""
                }}
                style={{ ...settingsStyle.style }}
                windowName="settings"
                index={3}
                styleContext={settingsStyle}
                setStyleContext={setNewSettingsStyle}
                name="Settings"
            >
                <Content
                    theme={theme}
                    setNewTheme={setNewTheme}
                    blur={blur}
                    setNewBlurLevel={setNewBlurLevel}
                    setNewActionBarColor={setNewActionBarColor}
                    actionBarColor={actionBarColor}
                    currentBackground={currentBackground}
                    setBackGround={setBackGround} />
            </Window>
        </>
    )
}

export default Settings;