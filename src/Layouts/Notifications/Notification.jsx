import { useContext, useState, useRef, useEffect } from "react";
import { AppContext, languages } from "../../App";
import { MdOutlineDoDisturbOff } from "react-icons/md";
import { MdClearAll } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { contents } from "../../Helpers/Content";

const Notification = (props) => {
    const { theme, blur, openNotification, setOpenNotification, setNotificationCount, language } = useContext(AppContext);
    const initialed = useRef(false);
    const popoverRef = useRef(null);
    const [doNotDisturb, setDoNotDisturb] = useState(false);
    const [notifications, setNotifications] = useState([
        {
            time: {
                vi: "2:48 CH",
                en: "2:48 PM"
            },
            title: {
                vi: "Chào mừng bạn đến với Website HieuDuongIT",
                en: "Welcome to HieuDuongIT"
            },
            description: {
                vi: "Xin chào, nếu đây là lần đầu tiên bạn đến đây thì xin chúc mừng, bạn đã truy cập được một trong những trang web đẹp và thú vị nhất thế giới ^^",
                en: "Hello, if this is the first time you have gone here, congratulations, you accessed one of the most beautiful and interesting websites in the world ^^"
            },
            isClosed: false
        },
        {
            time: {
                vi: "3:30 CH",
                en: "3:30 PM"
            },
            title: {
                vi: "Cách sử dụng Website HieuDuongIT",
                en: "How to use the HieuDuongIT website"
            },
            description: {
                vi: "Đập phá thoải mái đi anh em :))",
                en: "Feel free to destroy anything you want ^^"
            },
            isClosed: false
        },
        {
            time: {
                vi: "4:33 CH",
                en: "4:33 PM"
            },
            title: {
                vi: "Cảm ơn bạn",
                en: "Thank you friend"
            },
            description: {
                vi: "Hy vọng bạn sẽ có thời gian thú vị ở HieuDuongIT",
                en: "I hope you will have a fun time here"
            },
            isClosed: false
        }
    ]);

    const content = contents.layouts.find(l => l.name === "notifications");

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
                <div className="notification-title">
                    {language === "vi" ? "Thông báo" : "Notifications"}
                </div>
                <div className="notification-actions">
                    <div className={`notification-action ${theme} ${doNotDisturb ? "active" : ""}`} onClick={() => setDoNotDisturb(!doNotDisturb)}>
                        <MdOutlineDoDisturbOff size={22} />
                        <div className={`disturb-tooltip ${theme} br-1`}>{language === "vi" ? "Không làm phiền" : "Do Not Disturb"}: {doNotDisturb ? "on" : "off"}</div>
                    </div>
                    <div className={`notification-action ${theme}`} onClick={() => handleClearAllNotifications()}>
                        <MdClearAll size={24} />
                        <div className={`clear-all-tooltip ${theme} br-1`}>
                            {language === "vi" ? "Xóa hết" : "Clear all"}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`notification-panel`}>
                {
                    notifications.map((n, index) => (
                        <div className={`notification ${theme} br-1 ${n.isClosed ? "closed" : ""}`}>
                            <div className="notification-time">
                                <div className="time-content">
                                    {n.time[language]}
                                </div>
                                <div className="close-notification-icon" onClick={(event) => handleCloseNotification(index, event)}>
                                    <IoClose />
                                </div>
                            </div>
                            <div className="notification-body">
                                <div className="notification-title">
                                    {n.title[language]}
                                </div>
                                <div className="notification-description">
                                    {n.description[language]}
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