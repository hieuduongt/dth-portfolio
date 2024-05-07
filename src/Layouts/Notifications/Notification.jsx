import { useContext, useState, useRef, useEffect } from "react";
import { AppContext } from "../../App";
import { MdOutlineDoDisturbOff } from "react-icons/md";
import { MdClearAll } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Notification = (props) => {
    const { theme, blur, openNotification, setOpenNotification, setNotificationCount } = useContext(AppContext);
    const initialed = useRef(false);
    const popoverRef = useRef(null);
    const [doNotDisturb, setDoNotDisturb] = useState(false);
    const [notifications, setNotifications] = useState([
        {
            time: "2:48 CH",
            title: "Welcome to HieuDuongIT",
            description: "Hello, if this is the first time you have gone here, congratulations, you accessed one of the most beautiful and interesting websites in the world ^^",
            isClosed: false
        },
        {
            time: "3:30 CH",
            title: "How to use the HieuDuongIT website",
            description: "Feel free to destroy anything you want ^^",
            isClosed: false
        },
        {
            time: "4:33 CH",
            title: "Thank you friend",
            description: "I hope you will have a fun time here",
            isClosed: false
        }
    ]);

    useEffect(() => {
        if (initialed.current === false) {
            setNotificationCount(prev => prev + notifications.length);
        }
        initialed.current = true;
    }, []);

    const handleClickOutside = (event) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target) && !event.target.closest(".notification-tile")) {
            setOpenNotification(false);
        }
    };

    useEffect(() => {
        if (openNotification) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openNotification]);

    const handleCloseNotification = (index, event) => {
        const pr = event.target.closest(".notification");
        setNotifications(prev => {
            const newNf = [...prev];
            const current = newNf[index];
            const newEl = { ...current };
            newEl.isClosed = true;
            newNf[index] = newEl;
            return newNf;
        });

        if (pr) {
            setTimeout(() => {
                pr.style.display = "none";
            }, 300);
        }

        setNotificationCount(prev => prev - 1);
    }

    const handleClearAllNotifications = () => {
        setNotifications(prev => {
            const newNf = [...prev];
            const newArr = newNf.map(it => {
                const current = it;
                const newEl = { ...current };
                newEl.isClosed = true;
                return newEl;
            });

            return newArr;
        });
        setNotificationCount(prev => prev - notifications.length < 0 ? 0 : prev - notifications.length);
    }


    return (
        <div ref={popoverRef} className={`notifications ${theme} ${blur} br-1 ${openNotification ? "opened" : "closed"}`}
            tabIndex={2}
        >
            <div className="notification-header">
                <div className="notification-title">Notifications</div>
                <div className="notification-actions">
                    <div className={`notification-action ${theme} ${doNotDisturb ? "active" : ""}`} onClick={() => setDoNotDisturb(!doNotDisturb)}>
                        <MdOutlineDoDisturbOff size={22} />
                        <div className={`disturb-tooltip ${theme} br-1`}>Do not disturb: {doNotDisturb ? "on" : "off"}</div>
                    </div>
                    <div className={`notification-action ${theme}`} onClick={() => handleClearAllNotifications()}>
                        <MdClearAll size={24} />
                        <div className={`clear-all-tooltip ${theme} br-1`}>Clear all</div>
                    </div>
                </div>
            </div>
            <div className={`notification-panel`}>
                {
                    notifications.map((n, index) => (
                        <div className={`notification ${theme} br-1 ${n.isClosed ? "closed" : ""}`}>
                            <div className="notification-time">
                                <div className="time-content">
                                    {n.time}
                                </div>
                                <div className="close-notification-icon" onClick={(event) => handleCloseNotification(index, event)}>
                                    <IoClose />
                                </div>
                            </div>
                            <div className="notification-body">
                                <div className="notification-title">
                                    {n.title}
                                </div>
                                <div className="notification-description">
                                    {n.description}
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Notification;