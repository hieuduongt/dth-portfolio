import { AppContext, actionBarColors, blurLevels } from "../../App";
import { useContext } from 'react';
import { Window } from '../../Layouts/Window';
import { Switch } from "../../components/Switch";

const Content = (props) => {
    const { theme, setNewTheme, blur, setNewBlurLevel, className, actionBarColor, setNewActionBarColor } = props;
    return (
        <div className={className}>
            <div className={`info ${theme} ${blur} br-1`}>
                <div className="summary-info bd-b">
                    <Switch checked={theme.includes("dark")} onChange={(value) => {
                        setNewTheme(value ? "dark-background" : "light-background")
                    }} />
                    <div className="summary-text">
                        <div className="summary-text-title">
                            Theme
                        </div>
                        <div className="summary-text-content">
                            Current Theme: {theme.includes("dark") ? "Dark" : "Light"}
                        </div>
                    </div>
                </div>
                <div className="summary-info">
                    <Switch onChange={(value) => { value ? setNewBlurLevel(blurLevels.level3) : setNewBlurLevel(blurLevels.none) }} />
                    <div className="summary-text">
                        <div className="summary-text-title">
                            Blurred option
                        </div>
                    </div>
                </div>
                <div className="color-section">
                    <div className="color-select-section br-1">
                        <div className={`color-panel ${actionBarColor === actionBarColors.color_1 ? "current-color-panel" : ""} color-1`} onClick={() => setNewActionBarColor(actionBarColors.color_1)}>

                        </div>
                        <div className={`color-panel ${actionBarColor === actionBarColors.color_2 ? "current-color-panel" : ""} color-2`} onClick={() => setNewActionBarColor(actionBarColors.color_2)}>

                        </div>
                        <div className={`color-panel ${actionBarColor === actionBarColors.color_3 ? "current-color-panel" : ""} color-3`} onClick={() => setNewActionBarColor(actionBarColors.color_3)}>

                        </div>
                        <div className={`color-panel ${actionBarColor === actionBarColors.color_4 ? "current-color-panel" : ""} color-4`} onClick={() => setNewActionBarColor(actionBarColors.color_4)}>

                        </div>
                        <div className={`color-panel ${actionBarColor === actionBarColors.color_5 ? "current-color-panel" : ""} color-5`} onClick={() => setNewActionBarColor(actionBarColors.color_5)}>

                        </div>
                    </div>
                    <div className="text">Select Color Panel</div>
                </div>
            </div>
        </div>
    )
}

const Settings = (props) => {
    const { children } = props;
    const { theme,setNewTheme, blur, setNewBlurLevel, actionBarColor, setNewActionBarColor, settingsStyle, setNewSettingsStyle, zIndex, setNewZIndex } = useContext(AppContext);

    return (
        <>
            <Content theme={theme} className={`mobile content ${theme} ${blur} br-1`} setNewTheme={setNewTheme} blur={blur} setNewBlurLevel={setNewBlurLevel} setNewActionBarColor={setNewActionBarColor} actionBarColor={actionBarColor}/>
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
            >
                <Content theme={theme} setNewTheme={setNewTheme} blur={blur} setNewBlurLevel={setNewBlurLevel} setNewActionBarColor={setNewActionBarColor} actionBarColor={actionBarColor}/>
            </Window>
        </>

    )
}

export default Settings;