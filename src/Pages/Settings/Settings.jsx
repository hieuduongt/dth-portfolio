import { AppContext, actionBarColors, blurLevels } from "../../App";
import { useContext, useState } from 'react';
import { Window } from '../../Layouts/Window';
import { Switch } from "../../components/Switch";

const ColorPanelContent = (props) => {
    const {actionBarColor, setNewActionBarColor} = props;
    return (
        <div className="color-select-container br-1">
            <div className="setting-title-text">
                Color Panel Settings
            </div>
            <div className="color-selection">
                <Switch checked={actionBarColor === actionBarColors.color_1} onChange={(value) => setNewActionBarColor(actionBarColors.color_1)} />
                <div className={`color-panel br-1 ${actionBarColor === actionBarColors.color_1 ? "current-color-panel" : ""} color-1`} onClick={() => setNewActionBarColor(actionBarColors.color_1)}>
                </div>
            </div>
            <div className="color-selection">
                <Switch checked={actionBarColor === actionBarColors.color_2} onChange={(value) => setNewActionBarColor(actionBarColors.color_2)} />
                <div className={`color-panel br-1 ${actionBarColor === actionBarColors.color_2 ? "current-color-panel" : ""} color-2`} onClick={() => setNewActionBarColor(actionBarColors.color_2)}>
                </div>
            </div>
            <div className="color-selection">
                <Switch checked={actionBarColor === actionBarColors.color_3} onChange={(value) => setNewActionBarColor(actionBarColors.color_3)} />
                <div className={`color-panel br-1 ${actionBarColor === actionBarColors.color_3 ? "current-color-panel" : ""} color-3`} onClick={() => setNewActionBarColor(actionBarColors.color_3)}>
                </div>
            </div>
            <div className="color-selection">
                <Switch checked={actionBarColor === actionBarColors.color_4} onChange={(value) => setNewActionBarColor(actionBarColors.color_4)} />
                <div className={`color-panel br-1 ${actionBarColor === actionBarColors.color_4 ? "current-color-panel" : ""} color-4`} onClick={() => setNewActionBarColor(actionBarColors.color_4)}>
                </div>
            </div>
            <div className="color-selection">
                <Switch checked={actionBarColor === actionBarColors.color_5} onChange={(value) => setNewActionBarColor(actionBarColors.color_5)} />
                <div className={`color-panel br-1 ${actionBarColor === actionBarColors.color_5 ? "current-color-panel" : ""} color-5`} onClick={() => setNewActionBarColor(actionBarColors.color_5)}>
                </div>
            </div>
        </div>
    )
}

const Content = (props) => {
    const { theme, setNewTheme, blur, setNewBlurLevel, className, actionBarColor, setNewActionBarColor } = props;
    const [currentSetting, setCurrentSetting] = useState();
    
    const WallpaperContent = () => {
        return (
            <div className="color-select-container br-1">
                <div className="setting-title-text">
                    Wallpaper Settings
                </div>
                <div className="color-selection">
                    <Switch checked={actionBarColor === actionBarColors.color_1} onChange={(value) => setNewActionBarColor(actionBarColors.color_1)} />
                    <div className={`color-panel br-1 ${actionBarColor === actionBarColors.color_1 ? "current-color-panel" : ""} color-1`} onClick={() => setNewActionBarColor(actionBarColors.color_1)}>
                    </div>
                </div>
                <div className="color-selection">
                    <Switch checked={actionBarColor === actionBarColors.color_2} onChange={(value) => setNewActionBarColor(actionBarColors.color_2)} />
                    <div className={`color-panel br-1 ${actionBarColor === actionBarColors.color_2 ? "current-color-panel" : ""} color-2`} onClick={() => setNewActionBarColor(actionBarColors.color_2)}>
                    </div>
                </div>
                <div className="color-selection">
                    <Switch checked={actionBarColor === actionBarColors.color_3} onChange={(value) => setNewActionBarColor(actionBarColors.color_3)} />
                    <div className={`color-panel br-1 ${actionBarColor === actionBarColors.color_3 ? "current-color-panel" : ""} color-3`} onClick={() => setNewActionBarColor(actionBarColors.color_3)}>
                    </div>
                </div>
                <div className="color-selection">
                    <Switch checked={actionBarColor === actionBarColors.color_4} onChange={(value) => setNewActionBarColor(actionBarColors.color_4)} />
                    <div className={`color-panel br-1 ${actionBarColor === actionBarColors.color_4 ? "current-color-panel" : ""} color-4`} onClick={() => setNewActionBarColor(actionBarColors.color_4)}>
                    </div>
                </div>
                <div className="color-selection">
                    <Switch checked={actionBarColor === actionBarColors.color_5} onChange={(value) => setNewActionBarColor(actionBarColors.color_5)} />
                    <div className={`color-panel br-1 ${actionBarColor === actionBarColors.color_5 ? "current-color-panel" : ""} color-5`} onClick={() => setNewActionBarColor(actionBarColors.color_5)}>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={className}>
            <div className="setting-content">
                <div className="main-settings">
                    <div className={`info ${theme} ${blur} br-1`}>
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
                                <Switch checked={blur ? true : false} onChange={(value) => { value ? setNewBlurLevel(blurLevels.level3) : setNewBlurLevel(blurLevels.none) }} />
                            </div>
                        </div>
                        <div className="setting-section selectable bd-b">
                            <div className="setting-icon">
                                <img src="color-selection-icon.png" alt="" />
                            </div>
                            <div className="setting-title-text">
                                Color Panel Settings
                            </div>
                        </div>
                        <div className="setting-section selectable">
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
                    <div className={`info ${theme} ${blur} br-1`}>
                        <ColorPanelContent actionBarColor={actionBarColor} setNewActionBarColor={setNewActionBarColor} />
                        {/* <WallpaperContent /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Settings = (props) => {
    const { children } = props;
    const { theme, setNewTheme, blur, setNewBlurLevel, actionBarColor, setNewActionBarColor, settingsStyle, setNewSettingsStyle, zIndex, setNewZIndex } = useContext(AppContext);

    return (
        <>
            <Content theme={theme} className={`mobile content ${theme} ${blur} br-1`} setNewTheme={setNewTheme} blur={blur} setNewBlurLevel={setNewBlurLevel} setNewActionBarColor={setNewActionBarColor} actionBarColor={actionBarColor} />
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
                windowName="blogs"
                index={3}
                styleContext={settingsStyle}
                setStyleContext={setNewSettingsStyle}
                name="Settings"
            >
                <Content theme={theme} setNewTheme={setNewTheme} blur={blur} setNewBlurLevel={setNewBlurLevel} setNewActionBarColor={setNewActionBarColor} actionBarColor={actionBarColor} />
            </Window>
        </>

    )
}

export default Settings;