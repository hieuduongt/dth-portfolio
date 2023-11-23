import { useContext, useEffect, useState, createRef } from "react";
import { AppContext } from "../../App";
import { Input } from "../../components/Input";
import { BsSearch } from 'react-icons/bs';
import { handleOpenAnApplication } from '../../Helpers/Helpers';

const CTime = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime, setTime] = useState(time);
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString()
        setTime(time)
    }
    useEffect(() => {
        setInterval(UpdateTime);
    }, []);
    return (
        <span>
            {ctime}
        </span>
    )
}

const CDate = () => {
    let date = new Date().toLocaleDateString();
    const [cdate, setDate] = useState(date);
    const UpdateDate = () => {
        date = new Date().toLocaleDateString()
        setDate(date)
    }
    useEffect(() => {
        setInterval(UpdateDate);
    }, []);
    return (
        <span>
            {cdate}
        </span>
    )
}

const TaskBar = (props) => {
    const {
        theme,
        blur,
        runningApp,
        setIsRunningApp,
        openedApps,
        setAreOpenedApps,
        homeStyle,
        setNewHomeStyle,
        personalInfoStyle,
        setNewPersonalInfoStyle,
        resumeStyle,
        setNewResumeStyle,
        gameStyle,
        setNewGameStyle,
        settingsStyle,
        setNewSettingsStyle,
        worksStyle,
        setNewWorksStyle
    } = useContext(AppContext);

    const refs = Array.from({ length: 5 }, () => createRef());

    const styleMapping = [
        {
            name: "home",
            style: homeStyle,
            setStyle: setNewHomeStyle
        },
        {
            name: "resume",
            style: resumeStyle,
            setStyle: setNewResumeStyle
        },
        {
            name: "works",
            style: worksStyle,
            setStyle: setNewWorksStyle
        },
        {
            name: "game",
            style: gameStyle,
            setStyle: setNewGameStyle
        },
        {
            name: "personal",
            style: personalInfoStyle,
            setStyle: setNewPersonalInfoStyle
        },
        {
            name: "settings",
            style: settingsStyle,
            setStyle: setNewSettingsStyle
        }
    ];

    useEffect(() => {
        if (refs[0].current !== null) {
            refs.forEach(ref => {
                const name = ref.current.querySelector("img").getAttribute("alt");
                const style = styleMapping.find(it => it.name === name);
                style.setStyle(prev => ({
                    ...prev,
                    rect: ref.current.getBoundingClientRect()
                }));
            });
        }
    }, []);

    return (
        <div className="taskbar">
            <div className={`taskbar-content ${theme} ${blur}`}>
                <div className="search-area">
                    <Input className="br-3" scalesize="large" icon={<BsSearch />} iconposition="before" />
                </div>
                <div className="applications-area">
                    <div ref={refs[0]} className="application" onClick={(e) => handleOpenAnApplication(0, "home", homeStyle, setNewHomeStyle, setIsRunningApp, setAreOpenedApps, openedApps)}>
                        <span className="application-name">
                            Home
                        </span>
                        <img src="home-logo-app.png" alt="home" />
                        <span className="activating-app" style={{ display: runningApp === 0 ? "block" : "none" }}></span>
                        <span className="opened-app" style={{ display: runningApp === 0 ? "none" : (openedApps.home === 1 ? "block" : "none") }}></span>
                    </div>
                    <div ref={refs[1]} className="application" onClick={(e) => handleOpenAnApplication(1, "resume", resumeStyle, setNewResumeStyle, setIsRunningApp, setAreOpenedApps, openedApps)}>
                        <span className="application-name">
                            Resume
                        </span>
                        <img src="resume-logo-app.png" alt="resume" />
                        <span className="activating-app" style={{ display: runningApp === 1 ? "block" : "none" }}></span>
                        <span className="opened-app" style={{ display: runningApp === 1 ? "none" : (openedApps.resume === 1 ? "block" : "none") }}></span>
                    </div>
                    <div ref={refs[2]} className="application" onClick={(e) => handleOpenAnApplication(2, "works", worksStyle, setNewWorksStyle, setIsRunningApp, setAreOpenedApps, openedApps)}>
                        <span className="application-name">
                            Works
                        </span>
                        <img src="works-logo-app.png" alt="works" />
                        <span className="activating-app" style={{ display: runningApp === 2 ? "block" : "none" }}></span>
                        <span className="opened-app" style={{ display: runningApp === 2 ? "none" : (openedApps.works === 1 ? "block" : "none") }}></span>
                    </div>
                    <div ref={refs[3]} className="application" onClick={(e) => handleOpenAnApplication(4, "contact", gameStyle, setNewGameStyle, setIsRunningApp, setAreOpenedApps, openedApps)}>
                        <span className="application-name">
                            Game
                        </span>
                        <img src="game-logo-app.png" alt="game" />
                        <span className="activating-app" style={{ display: runningApp === 4 ? "block" : "none" }}></span>
                        <span className="opened-app" style={{ display: runningApp === 4 ? "none" : (openedApps.game === 1 ? "block" : "none") }}></span>
                    </div>
                    <div className="application-devider"></div>
                    <div ref={refs[4]} className="application" onClick={(e) => handleOpenAnApplication(3, "settings", settingsStyle, setNewSettingsStyle, setIsRunningApp, setAreOpenedApps, openedApps)}>
                        <span className="application-name">
                            Settings
                        </span>
                        <img src="settings-logo-app.png" alt="settings" />
                        <span className="activating-app" style={{ display: runningApp === 3 ? "block" : "none" }}></span>
                        <span className="opened-app" style={{ display: runningApp === 3 ? "none" : (openedApps.settings === 1 ? "block" : "none") }}></span>
                    </div>
                </div>

                <div className="tool-area">
                    <div className="date-and-time">
                        <div className="time"><CTime /></div>
                        <div className="date"><CDate /></div>
                    </div>
                    <div className="notifications">
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TaskBar;