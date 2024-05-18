import { useContext, useEffect, useState, createRef } from "react";
import { AppContext } from "../../App";
import { Input } from "../../components/Input";
import { BsSearch } from 'react-icons/bs';
import { FaBatteryFull } from "react-icons/fa6";
import { CiVolumeHigh } from "react-icons/ci";
import { BiMessageSquareDots } from "react-icons/bi";
import { FaWifi } from "react-icons/fa6";
import { handleOpenAnApplication, createHiddenStyle } from '../../Helpers/Helpers';
import { TbDeviceDesktopSearch } from "react-icons/tb";

export const CTime = () => {
    let time = /\d{0,2}:\d{0,2}/.exec(new Date().toTimeString())[0];
    const [ctime, setTime] = useState(time);
    const UpdateTime = () => {
        time = /\d{0,2}:\d{0,2}/.exec(new Date().toTimeString())[0];
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

const TaskBar = (props) => {
    const {
        theme,
        blur,
        openedApps,
        setAreOpenedApps,
        homeStyle,
        setNewHomeStyle,
        personalInfoStyle,
        setNewPersonalInfoStyle,
        gameStyle,
        setNewGameStyle,
        settingsStyle,
        setNewSettingsStyle,
        setNewZIndex,
        openQuickSetting,
        setOpenQuickSetting,
        openNotification,
        setOpenNotification,
        notificationCount,
        setOpenWindowNewFeeds,
        xpStyle
    } = useContext(AppContext);
    const [loadedApps, setLoadedApps] = useState(0);
    
    const refs = Array.from({ length: 4 }, () => createRef());
    const [appWidth, setAppWidth] = useState(0);

    const styleMapping = [
        {
            name: "home",
            style: homeStyle,
            setStyle: setNewHomeStyle
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

    const openApp = (index, name, style, setNewStyle) => {
        if (refs[index].current !== null) {
            handleOpenAnApplication(name, style, setNewStyle, setAreOpenedApps, openedApps, setNewZIndex, refs[index].current.getBoundingClientRect());
        }
    }

    useEffect(() => {
        const reInitSyle = () => {
            setAppWidth(prev => prev + 1);
        }

        window.addEventListener("resize", reInitSyle);
    return () => window.removeEventListener('resize', reInitSyle);
    }, []);

    useEffect(() => {
        if (refs[0].current && loadedApps === 4) {
            refs.forEach(ref => {
                const img = ref.current.querySelector("img").getAttribute("src");
                if (img) {
                    const name = ref.current.querySelector("img").getAttribute("alt");
                    const style = styleMapping.find(it => it.name === name);
                    if (name === "game") {
                        const newStyle = createHiddenStyle(ref.current.getBoundingClientRect(), true)
                        style.setStyle(prev => ({
                            ...prev,
                            ...newStyle,
                            rect: ref.current.getBoundingClientRect()
                        }));
                    }
                    style.setStyle(prev => ({
                        ...prev,
                        rect: ref.current.getBoundingClientRect()
                    }));
                }
            });
        }
    }, [loadedApps, xpStyle]);

    useEffect(() => {
        if (refs[0].current && loadedApps === 4) {
            refs.forEach(ref => {
                const img = ref.current.querySelector("img").getAttribute("src");
                if (img) {
                    const name = ref.current.querySelector("img").getAttribute("alt");
                    const style = styleMapping.find(it => it.name === name);  
                    style.setStyle(prev => ({
                        ...prev,
                        rect: ref.current.getBoundingClientRect()
                    }));
                }
            });
        }
    }, [appWidth]);

    useEffect(() => {
        if (!refs[0].current) return;
        const resizeObserver = new ResizeObserver(() => setAppWidth(prev => prev + 1));
        resizeObserver.observe(refs[0].current);
        return () => resizeObserver.disconnect();
      }, []);

    return (
        <div className="taskbar" style={xpStyle ? {backgroundColor: "#225ad9", borderRadius: "15px", boxShadow: "rgb(255 255 255 / 50%) 0px 0px 15px 0px inset"} : {}}>
            <div className={`main taskbar-area ${theme} ${blur}`} style={xpStyle ? {borderTopRightRadius: 30, borderBottomRightRadius: 30} : {}}>
                <div className={`application window-logo`} style={xpStyle ? {width:"120px", backgroundColor: "#6bb16a", boxShadow: "25px 0 20px -20px rgba(0, 0, 0, 0.45)", borderTopRightRadius: 30, borderBottomRightRadius: 30} : {}} onClick={() => setOpenWindowNewFeeds(prev => !prev)}>
                    <img class="app-icon" src="windows-logo.png" alt="me" className="window-logo" style={{display: xpStyle ? "none" : "block"}}/>
                    <img style={{display: xpStyle ? "block" : "none", width: "30px", height: "30px"}} src="windows-xp-logo.png" alt="me" className="window-logo" />
                    <div style={{display: xpStyle ? "block" : "none", marginBottom: 5,fontSize: 26, fontWeight: "bolder", color: "white", textShadow: "0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 8px 8px rgba(0,0,0,0.11), 0 16px 16px rgba(0,0,0,0.11), 0 32px 32px rgba(0,0,0,0.11)"}}>Start</div>
                </div>
                <div className={`search-area`} >
                    <Input placeholder="Search anything" className="br-3" scalesize="large" style={{width: 150}} iconBefore={<BsSearch />} iconAfter={<TbDeviceDesktopSearch size={18} />} iconposition="before" />
                </div>
            </div>

            <div className={`taskbar-area application-area`}>

                <div style={{justifyContent: xpStyle ? "" : "center", paddingLeft: xpStyle ? "5px" : ""}} ref={refs[0]} className={`${xpStyle ? "windows-xp-tab" : "application"} ${openedApps.home === 1 ? "opened-app" : ""} ${theme} ${blur}`} onClick={(e) => openApp(0, "home", homeStyle, setNewHomeStyle, setAreOpenedApps, openedApps)}>
                    <img class="app-icon" src="home-logo-app.png" alt="home" onLoad={() => setLoadedApps(prev => prev + 1)} />
                    <div style={{display: xpStyle ? "block" : "none"}} className="app-name">Home</div>
                </div>
                <div style={{justifyContent: xpStyle ? "" : "center", paddingLeft: xpStyle ? "5px" : ""}} ref={refs[1]} className={`${xpStyle ? "windows-xp-tab" : "application"} ${openedApps.personal === 1 ? "opened-app" : ""} ${theme} ${blur}`} onClick={(e) => openApp(1, "personal", personalInfoStyle, setNewPersonalInfoStyle, setAreOpenedApps, openedApps)}>
                    <img class="app-icon" src="personal-logo-app.png" alt="personal" onLoad={() => setLoadedApps(prev => prev + 1)} />
                    <div style={{display: xpStyle ? "block" : "none"}} className="app-name">My Personal Info</div>
                </div>
                <div style={{justifyContent: xpStyle ? "" : "center", paddingLeft: xpStyle ? "5px" : ""}} ref={refs[2]} className={`${xpStyle ? "windows-xp-tab" : "application"} ${openedApps.game === 1 ? "opened-app" : ""} ${theme} ${blur}`} onClick={(e) => openApp(2, "game", gameStyle, setNewGameStyle, setAreOpenedApps, openedApps)}>
                    <img class="app-icon" src="game-logo-app.png" alt="game" onLoad={() => setLoadedApps(prev => prev + 1)} />
                    <div style={{display: xpStyle ? "block" : "none"}} className="app-name">Caro Game</div>
                </div>
                <div style={{justifyContent: xpStyle ? "" : "center", paddingLeft: xpStyle ? "5px" : ""}} ref={refs[3]} className={`${xpStyle ? "windows-xp-tab" : "application"} ${openedApps.settings === 1 ? "opened-app" : ""} ${theme} ${blur}`} onClick={(e) => openApp(3, "settings", settingsStyle, setNewSettingsStyle, setAreOpenedApps, openedApps)}>
                    <img class="app-icon" src="settings-logo-app.png" alt="settings" onLoad={() => setLoadedApps(prev => prev + 1)} />
                    <div style={{display: xpStyle ? "block" : "none"}} className="app-name">Settings</div>
                </div>
            </div>
            {/* <div className="taskbar-space"></div> */}
            <div className={`taskbar-area weather-area ${xpStyle ? '' : theme} ${blur}`} style={xpStyle ? {display: "flex", alignItems: "center"} : {}}>
                <div className="weather" style={xpStyle ? {height: 40} : {}}>

                    <a class="weatherwidget-io" href="https://forecast7.com/en/21d00105d82/hanoi/" onClick={() => { }} data-label_1="HÀ NỘI" data-label_2="WEATHER" data-font="Roboto Slab" data-icons="Climacons Animated" data-mode="Current" data-days="3" data-theme="weather_one" >HÀ NỘI WEATHER</a>

                </div>
            </div>

            <div className={`taskbar-area tools-and-time ${theme} ${blur}`} style={xpStyle ? {borderTopLeftRadius: 30, borderBottomLeftRadius: 30, backgroundColor: "#0d96ee", boxShadow: "-25px 0 20px -20px rgba(0, 0, 0, 0.45)"} : {}}>
                <div
                    className={`tool-area ${openQuickSetting ? "opened" : ""} ${xpStyle ? "xp-style-hover" : ""}`}
                    onClick={() => setOpenQuickSetting(prev => !prev)}
                >
                    <CiVolumeHigh size={20} />
                    <FaWifi size={18} />
                    <FaBatteryFull size={20} />
                </div>
                <div className="date-and-time">
                    <div className="time"><CTime /></div>
                </div>
                <div
                    className={`notification-tile ${openNotification ? "opened" : ""}`}
                    onClick={() => setOpenNotification(prev => !prev)}
                >
                    <BiMessageSquareDots size={20} />
                    {notificationCount === 0 ? <></> : <div className="notification-badge">{notificationCount}</div>}

                </div>
            </div>
        </div>

    )
}

export default TaskBar;