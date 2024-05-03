import { AiOutlineClose } from 'react-icons/ai';
import { FaRegCircle } from 'react-icons/fa';
import { GoPlus, GoDash } from "react-icons/go";
import { AppContext } from "../../App";
import { useContext } from 'react';

const ActionBar = (props) => {
    const { onSave, onClose, onExpand, expanded, name, styleContext } = props;
    const {
        theme,
        actionBarColor,
        blur
    } = useContext(AppContext);

    return (
        <div className={`action-bar ${styleContext.style.visibility === "hidden" ? "hidden" : ""} ${theme.includes("transparent") ? "" : actionBarColor}`} style={{
            borderTopLeftRadius: expanded ? 0 : "10px",
            borderTopRightRadius: expanded ? 0 : "10px",
        }}>
            <div className={`app-name ${blur} ${theme}`}>
                &nbsp;{name}
            </div>
            <div className="add-more-tab">
                <GoPlus size={20} />
            </div>

            <div className='drag-area'>

            </div>
            <div className={`action-buttons ${blur} ${theme}`}>
                <button style={theme.includes("dark") ? { color: "white" } : { color: "black" }} className="action-icon" onClick={onClose || (() => { })}>
                    <GoDash size={13} />
                </button>

                <button style={theme.includes("dark") ? { color: "white" } : { color: "black" }} className="action-icon" onClick={onExpand || (() => { })}>
                    <FaRegCircle size={13} />
                </button>

                <button style={theme.includes("dark") ? { color: "white" } : { color: "black" }} className="action-icon" onClick={onSave || (() => { })}>
                    <AiOutlineClose size={13} />
                </button>
            </div>
        </div>
    )
}

export default ActionBar;