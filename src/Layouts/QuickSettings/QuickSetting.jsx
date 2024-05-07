import { useContext, useState, useRef, useEffect } from "react";
import { AppContext } from "../../App";
import { FaWifi, FaBluetoothB } from "react-icons/fa6";
import { MdAirplanemodeActive, MdNightlight } from "react-icons/md";
import { RiBatterySaverFill, RiUserSettingsLine } from "react-icons/ri";
import { IoAccessibility } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { CiVolumeHigh, CiSettings, CiPower } from "react-icons/ci";
import { Slider } from "../../components/Slider";
import { FaRegUser } from "react-icons/fa";
import { CTime } from "../Taskbar/TaskBar";
import { FaBatteryFull } from "react-icons/fa6";
import { formatDate } from "../../Helpers/Helpers";
import { TbPointFilled } from "react-icons/tb";

const QuickSettings = (props) => {
    const { theme, blur, openQuickSetting, setOpenQuickSetting } = useContext(AppContext);
    const popoverRef = useRef(null);
    const [quickSettings, setQuickSettings] = useState([
        {
            name: "wifi",
            displayName: "Wifi",
            turnOn: true,
            icon: <FaWifi size={22} />
        },
        {
            name: "bluetooth",
            displayName: "Bluetooth",
            turnOn: true,
            icon: <FaBluetoothB size={22} />
        },
        {
            name: "airplanMode",
            displayName: "Airplan Mode",
            turnOn: false,
            icon: <MdAirplanemodeActive size={22} />
        },
        {
            name: "batterySaver",
            displayName: "Battery Saver",
            turnOn: false,
            icon: <RiBatterySaverFill size={22} />
        },
        {
            name: "nightlight",
            displayName: "Nightlight",
            turnOn: false,
            icon: <MdNightlight size={22} />
        },
        {
            name: "accessibility",
            displayName: "Accessibility",
            turnOn: false,
            icon: <IoAccessibility size={22} />
        }
    ]);

    const handleClickOutside = (event) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target) && !event.target.closest(".tool-area")) {
            setOpenQuickSetting(false);
        }
    };

    useEffect(() => {
        if (openQuickSetting) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openQuickSetting]);

    const handleToggleQuickSetting = (qs) => {
        setQuickSettings(prev => {
            const newQs = [...prev];
            for (let index = 0; index < newQs.length; index++) {
                const element = newQs[index];
                if (qs.name === element.name) {
                    const newEl = { ...element };
                    newEl.turnOn = !newEl.turnOn;
                    newQs[index] = newEl;
                    break;
                }
            }
            return newQs;
        });
    }

    return (
        <div ref={popoverRef} className={`quick-settings ${theme} ${blur} br-1 ${openQuickSetting ? "opened" : "closed"}`}
            tabIndex={2}
        >
            <div className="quick-action-area">
                <div className={`current-user `}>
                    <div className={`user-icon ${theme}`}>
                        <FaRegUser size={22} />
                    </div>
                    <div className="user-name">
                        HieuduongIT
                    </div>
                </div>
                <div className="quick-action-items">
                    <div className={`quick-action-icon ${theme}`}>
                        <CiSettings size={20} />
                    </div>
                    <div className={`quick-action-icon ${theme}`}>
                        <CiPower size={20} />
                    </div>
                    <div className={`quick-action-icon ${theme}`}>
                        <RiUserSettingsLine size={20} />
                    </div>
                </div>
            </div>
            <div className={`quick-setting-area ${theme} br-1`}>
                {
                    quickSettings.map(qs => (
                        <div className="quick-setting-tile" onClick={() => handleToggleQuickSetting(qs)}>
                            <div className={`quick-setting-icon ${theme} ${qs.turnOn ? "turned-on" : ""}`}>
                                {qs.icon}
                            </div>
                            <div className="quick-setting-name">
                                {qs.displayName}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={`volumn-and-light ${theme} br-1`}>
                <div className="volumn">
                    <CiVolumeHigh size={20} style={{ minWidth: 30 }} />
                    <Slider defaultLevel={80} />
                </div>
                <div className="light">
                    <MdOutlineLightMode size={20} style={{ minWidth: 30 }} />
                    <Slider defaultLevel={100} />
                </div>
            </div>
            <div className="time-and-battery">
                <div className="time-calendar">
                    <div className="time">
                        <CTime />
                    </div>
                    <div className="point">
                        <TbPointFilled />
                    </div>
                    <div className="calendar">
                        {
                            formatDate()
                        }
                    </div>
                </div>
                <div className="battery-status">
                    <div className="battery-percents">
                        100%
                    </div>
                    <div className="battery-icon">
                        <FaBatteryFull size={20} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default QuickSettings;