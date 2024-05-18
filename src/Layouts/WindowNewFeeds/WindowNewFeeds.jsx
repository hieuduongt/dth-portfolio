import { useContext, useRef, useEffect } from "react";
import { AppContext } from "../../App";
import { IoMdArrowRoundBack } from "react-icons/io";

const WindowNewFeeds = (props) => {
    const { theme, blur, openWindowNewFeeds, setOpenWindowNewFeeds } = useContext(AppContext);
    const popoverRef = useRef(null);

    const handleClickOutside = (event) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target) && !event.target.closest(".window-logo")) {
            setOpenWindowNewFeeds(false);
        }
    };

    useEffect(() => {
        if (openWindowNewFeeds) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openWindowNewFeeds]);

    return (
        <div ref={popoverRef} className={`window-new-feeds ${theme} ${blur} br-3 ${openWindowNewFeeds ? "opened" : "closed"}`}>
            <div className="new-feeds">
                <div className="new-feed-header">
                    <div className="all-apps">
                        All Applications
                    </div>
                    <div className={`back-icon ${theme}`}>
                        <IoMdArrowRoundBack size={20}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WindowNewFeeds;