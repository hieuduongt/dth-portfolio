import { useContext, useEffect, useState, createRef } from "react";
import { AppContext } from "../../App";
import { Input } from "../../components/Input";
import { BsSearch } from 'react-icons/bs';
import { FaBatteryFull } from "react-icons/fa6";
import { CiVolumeHigh  } from "react-icons/ci";
import { BiMessageSquareDots } from "react-icons/bi";
import { FaWifi } from "react-icons/fa6";
import { handleOpenAnApplication, createHiddenStyle } from '../../Helpers/Helpers';

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
        setOpenQuickSetting
    } = useContext(AppContext);
    const [loadedApps, setLoadedApps] = useState(0);

    const refs = Array.from({ length: 4 }, () => createRef());

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
        if (refs[0].current && loadedApps === 4) {
            refs.forEach(ref => {
                const img = ref.current.querySelector("img").getAttribute("src");
                if (img) {
                    const name = ref.current.querySelector("img").getAttribute("alt");
                    const style = styleMapping.find(it => it.name === name);
                    if (name === "game") {
                        const newStyle = createHiddenStyle(ref.current.getBoundingClientRect(), 40, 40, true)
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
    }, [loadedApps]);

    return (
        <div className="taskbar">
            <div className={`main ${theme} ${blur}`}>
                <div className="application">
                    <img src="windows-logo.png" alt="me" className="window-logo" />
                </div>
                <div className="search-area">
                    <Input placeholder="Search anything" className="br-3" scalesize="large" icon={<BsSearch />} iconposition="before" />
                </div>
            </div>

            <div className={`application-area`}>
                <div ref={refs[0]} className={`application ${openedApps.home === 1 ? "opened-app" : ""} ${theme} ${blur}`} onClick={(e) => openApp(0, "home", homeStyle, setNewHomeStyle, setAreOpenedApps, openedApps)}>
                    <img src="home-logo-app.png" alt="home" onLoad={() => setLoadedApps(prev => prev + 1)} />
                </div>
                <div ref={refs[1]} className={`application ${openedApps.personal === 1 ? "opened-app" : ""} ${theme} ${blur}`} onClick={(e) => openApp(1, "personal", personalInfoStyle, setNewPersonalInfoStyle, setAreOpenedApps, openedApps)}>
                    <img src="personal-logo-app.png" alt="personal" onLoad={() => setLoadedApps(prev => prev + 1)} />
                </div>
                <div ref={refs[2]} className={`application ${openedApps.game === 1 ? "opened-app" : ""} ${theme} ${blur}`} onClick={(e) => openApp(2, "game", gameStyle, setNewGameStyle, setAreOpenedApps, openedApps)}>
                    <img src="game-logo-app.png" alt="game" onLoad={() => setLoadedApps(prev => prev + 1)} />
                </div>
                <div ref={refs[3]} className={`application ${openedApps.settings === 1 ? "opened-app" : ""} ${theme} ${blur}`} onClick={(e) => openApp(3, "settings", settingsStyle, setNewSettingsStyle, setAreOpenedApps, openedApps)}>
                    <img src="settings-logo-app.png" alt="settings" onLoad={() => setLoadedApps(prev => prev + 1)} />
                </div>
            </div>
            {/* <div className="taskbar-space"></div> */}
            <div className={`weather-area ${theme} ${blur}`}>
                <div className="weather">

                    <a class="weatherwidget-io" href="https://forecast7.com/en/21d00105d82/hanoi/" onClick={() => { }} data-label_1="HÀ NỘI" data-label_2="WEATHER" data-font="Roboto Slab" data-icons="Climacons Animated" data-mode="Current" data-days="3" data-theme="weather_one" >HÀ NỘI WEATHER</a>

                </div>
            </div>

            <div className={`tools-and-time ${theme} ${blur}`}>
                <div
                    className={`tool-area ${openQuickSetting ? "opened" : ""}`}
                    tabIndex="1"
                    onClick={() => setOpenQuickSetting(prev => !prev)}
                >
                    <CiVolumeHigh size={20}/>
                    <FaWifi size={18}/>
                    <FaBatteryFull size={20}/>
                </div>
                <div className="date-and-time">
                    <div className="time"><CTime /></div>
                </div>
                <div className="notifications">
                    <BiMessageSquareDots size={20}/>
                </div>
            </div>
        </div>

    )
}

export default TaskBar;