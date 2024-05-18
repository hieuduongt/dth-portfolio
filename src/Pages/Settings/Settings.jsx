import { AppContext, actionBarColors, blurOption, languages } from "../../App";
import { useContext, useState } from 'react';
import { Window } from '../../Layouts/Window';
import { Switch } from "../../components/Switch";
import { contents } from "../../Helpers/Content";
import { DropDownList } from "../../components/DropDownList";


const settings = {
    colorSetting: "colorSetting",
    wallpaperSetting: "wallpaperSetting",
    languageSetting: "languageSetting"
}

const ColorPanelContent = (props) => {
    const { actionBarColor, setNewActionBarColor, xpStyle, content, language } = props;
    return (
        <div className="color-select-container br-1" aria-disabled>
            <div className="disabled-overlay" style={{ display: xpStyle ? "block" : "none" }}></div>
            <div className="setting-title-text">
                {content.inside.settings.find(s => s.name === "color_panel_setting").content[language]}
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
    const { currentBackground, setBackGround, wallpapers, content, language } = props;

    return (
        <div className="wallpaper-select-container br-1">
            <div className="setting-title-text">
                {content.inside.settings.find(s => s.name === "wallpaper_setting").content[language]}
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

const LanguageContent = (props) => {
    const { language, setLanguage, content, theme, blur } = props;

    return (
        <div className="language-selection-container br-1">
            <div className="selection-title-text">
                {content.inside.settings.find(s => s.name === "language").content[language]}

            </div>
            <div className="languages">
                <DropDownList label="Select Your Language" scalesize={"default"} className={`${theme} ${blur}`} style={{marginTop: 10}} data={languages} defaultselected={languages.find(l => l.value === language)} onchange={(value) => {
                    if(value) setLanguage(value.value);
                }}/>
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
        wallpapers,
        setXpStyle,
        xpStyle,
        language,
        setLanguage,
        content
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
                                {content.inside.settings.find(s => s.name === "darkmode").label[language]}
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
                                {content.inside.settings.find(s => s.name === "blur").label[language]}
                            </div>
                            <div className="setting-switch">
                                <Switch checked={blur ? true : false} onChange={(value) => { value ? setNewBlurLevel(blurOption.blur) : setNewBlurLevel(blurOption.none) }} />
                            </div>
                        </div>
                        <div className="desktop setting-section bd-b">
                            <div className="setting-icon">
                                <img src="setting-xp-style-icon.png" alt="" />
                            </div>
                            <div className="setting-title-text">
                                {content.inside.settings.find(s => s.name === "windows_xp_style").label[language]}
                            </div>
                            <div className="setting-switch">
                                <Switch checked={xpStyle ? true : false} onChange={(value) => setXpStyle(value)} />
                            </div>
                        </div>
                        <div className={`desktop setting-section selectable bd-b ${currentSetting === settings.colorSetting ? "current-setting" : ""}`} onClick={() => xpStyle ? () => { } : setCurrentSetting(settings.colorSetting)}>
                            <div className="disabled-overlay" style={{ display: xpStyle ? "block" : "none" }}></div>
                            <div className="setting-icon">
                                <img src="color-selection-icon.png" alt="" />
                            </div>
                            <div className="setting-title-text">
                                {content.inside.settings.find(s => s.name === "color_panel_setting").label[language]}
                            </div>
                        </div>
                        <div className={`setting-section selectable bd-b ${currentSetting === settings.wallpaperSetting ? "current-setting" : ""}`} onClick={() => setCurrentSetting(settings.wallpaperSetting)}>
                            <div className="setting-icon">
                                <img src="setting-wallpaper-icon.png" alt="" />
                            </div>
                            <div className="setting-title-text">
                                {content.inside.settings.find(s => s.name === "wallpaper_setting").label[language]}
                            </div>
                        </div>
                        <div className={`setting-section selectable ${currentSetting === settings.languageSetting ? "current-setting" : ""}`} onClick={() => setCurrentSetting(settings.languageSetting)}>
                            <div className="setting-icon">
                                <img src="setting-wallpaper-icon.png" alt="" />
                            </div>
                            <div className="setting-title-text">
                                {content.inside.settings.find(s => s.name === "language").label[language]}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="setting-detail-content">
                    <div className={`info ${theme} br-1`}>
                        {currentSetting === settings.colorSetting ? <ColorPanelContent actionBarColor={actionBarColor} setNewActionBarColor={setNewActionBarColor} xpStyle={xpStyle} content={content} language={language} /> : <></>}
                        {currentSetting === settings.wallpaperSetting ? <WallpaperContent currentBackground={currentBackground} setBackGround={setBackGround} wallpapers={wallpapers} content={content} language={language} /> : <></>}
                        {currentSetting === settings.languageSetting ? <LanguageContent language={language} setLanguage={setLanguage} content={content} theme={theme} blur={blur}/> : <></>}
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
        wallpapers,
        xpStyle,
        setXpStyle,
        language,
        setLanguage
    } = useContext(AppContext);

    const content = contents.layouts.find(c => c.name === "setting_application");
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
                wallpapers={wallpapers}
                currentBackground={currentBackground}
                setBackGround={setBackGround}
                language={language}
                setLanguage={setLanguage}
                content={content}
            />
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
                name={content.content[language]}
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
                    setBackGround={setBackGround}
                    xpStyle={xpStyle}
                    setXpStyle={setXpStyle}
                    language={language}
                    setLanguage={setLanguage}
                    content={content}
                />
            </Window>
        </>
    )
}

export default Settings;