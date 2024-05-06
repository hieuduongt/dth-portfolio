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
                <input className="color-picker br-1" type="color" name="hieu" id="hieu" value={actionBarColor} onChange={(e) => setNewActionBarColor(e.target.value)} />
                {actionBarColors.map(color => (
                    <div style={{ backgroundColor: color }} className={`color-panel br-1 ${actionBarColor === color ? "current-color-panel" : ""}`} onClick={() => setNewActionBarColor(color)}>
                    </div>
                ))}
            </div>
        </div>
    )
}

const WallpaperContent = (props) => {
    const { currentBackground, setBackGround, wallpapers } = props;

    return (
        <div className="wallpaper-select-container br-1">
            <div className="setting-title-text">
                Wallpaper Settings
            </div>
            <div className="list-wallpapers">
                {
                    wallpapers ? wallpapers.map(w => (
                        <div className="wallpaper-card" onClick={() => setBackGround(w.name, w.light, w.dark)}>
                            <img src={w.light} alt="appearance_dynamic" className={`${currentBackground === w.name ? "current-wallpaper" : ""}`} />
                        </div>
                    )) : <></>
                }
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
        setBackGround,
        wallpapers
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
                                <img src="setting-wallpaper-icon.png" alt="" />
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
                        {currentSetting === settings.wallpaperSetting ? <WallpaperContent currentBackground={currentBackground} setBackGround={setBackGround} wallpapers={wallpapers} /> : <></>}
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
        setBackGround,
        wallpapers
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
                    wallpapers={wallpapers}
                    setBackGround={setBackGround} />
            </Window>
        </>
    )
}

export default Settings;