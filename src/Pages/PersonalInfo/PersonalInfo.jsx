import { useContext } from "react";
import { AppContext, actionBarColors, blurLevels } from "../../App";
import { Button } from "../../components/Button";
import { BsPhone } from 'react-icons/bs';
import { FaMapLocationDot } from 'react-icons/fa6';
import { FaBirthdayCake } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { TypeAnimation } from 'react-type-animation';
import { Window } from "../../Layouts/Window";
import { Switch } from "../../components/Switch";

const Content = (props) => {
    const { theme, setNewTheme, blur, setNewBlurLevel, className, actionBarColor, setNewActionBarColor } = props;
    return (
        <div className={className}>
            <div className="avatar-content">
                <div>
                    <div className="avatar">
                        <img src="avatar.jpg" alt="Hieu dep trai" />
                    </div>

                    <div className="introduce-animated">
                        <IoIosArrowForward />
                        <div className="introduce-text">
                            <TypeAnimation
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                sequence={[
                                    'I am Hieu Duong',
                                    1000,
                                    'I am a web developer',
                                    1000,
                                    'If you are interested in',
                                    1000,
                                    'Feel free to contact me',
                                    1000
                                ]}
                            />
                        </div>
                    </div>
                </div>

            </div>
            <div className={`info ${theme} ${blur} br-1`}>
                <div className="summary-info bd-b">
                    <Button icon={<BsPhone size={25} />} icononly="true" color="error-color" />
                    <div className="summary-text">
                        <div className="summary-text-title">
                            Phone
                        </div>
                        <div className="summary-text-content">
                            +84396346126
                        </div>
                    </div>
                </div>
                <div className="summary-info bd-b">
                    <Button icon={<FaMapLocationDot size={25} />} icononly="true" color="warning-color" />
                    <div className="summary-text">
                        <div className="summary-text-title">
                            Location
                        </div>
                        <div className="summary-text-content">
                            Ha Noi, Viet Nam
                        </div>
                    </div>
                </div>
                <div className="summary-info bd-b">
                    <Button icon={<AiTwotoneMail size={25} />} icononly="true" color="default-color" />
                    <div className="summary-text">
                        <div className="summary-text-title">
                            Email
                        </div>
                        <div className="summary-text-content">
                            hieu.developer.19@gmail.com
                        </div>
                    </div>
                </div>
                <div className="summary-info">
                    <Button icon={<FaBirthdayCake size={25} />} icononly="true" color="success-color" />
                    <div className="summary-text">
                        <div className="summary-text-title">
                            Birthday
                        </div>
                        <div className="summary-text-content">
                            19 Jan 1997
                        </div>
                    </div>
                </div>
            </div>

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
                <div className="summary-info bd-b">
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

const PersonalInfo = (props) => {
    const { theme, setNewTheme, blur, setNewBlurLevel, actionBarColor, setNewActionBarColor, personalInfoStyle, zIndex, setNewZIndex } = useContext(AppContext);

    return (
        <>
            <Content theme={theme} className={`mobile content ${theme} ${blur} br-1`} />
            <Window
                minHeight={800}
                minWidth={350}
                handleOnMouseDown={() => setNewZIndex("personal")}
                zIndex={zIndex.find(item => item.name === "personal").zIndex}
                className="personal-info desktop"
                defaultPosition={personalInfoStyle.defaultPosition}
                position={{
                    x: personalInfoStyle?.position?.x || "",
                    y: personalInfoStyle?.position?.y || ""
                }}
                size={{
                    height: personalInfoStyle?.size?.height || "",
                    width: personalInfoStyle?.size?.width || ""
                }}
                style={{ ...personalInfoStyle.style }}
            >
                <Content theme={theme} setNewTheme={setNewTheme} blur={blur} setNewBlurLevel={setNewBlurLevel} setNewActionBarColor={setNewActionBarColor} actionBarColor={actionBarColor} />
            </Window>
        </>
    )
}

export default PersonalInfo;