import { AiOutlineClose } from 'react-icons/ai';
import { FaRegWindowRestore } from 'react-icons/fa';
import { GoDash } from 'react-icons/go';
import { AppContext } from "../../App";
import { useContext } from 'react';

const ActionBar = (props) => {
    const { onSave, onClose, onExpand, expanded } = props;
    const {
        theme,
        blur
    } = useContext(AppContext);

    return (
        <div className={`action-bar blur-1 ${theme} ${blur}`} style={{
            borderTopLeftRadius: expanded ? 0 : "7.5px",
            borderTopRightRadius: expanded ? 0 : "7.5px",
        }}>
            <div className="action-buttons">
                <button style={theme.includes("dark") ? { color: "white", borderTopRightRadius: !expanded ? "7.5px" : 0 } : { color: "black", borderTopRightRadius: !expanded ? "7.5px" : 0 }} className="action-icon" onClick={onSave || (() => { })}>
                    <AiOutlineClose size={13} />
                </button>
                <button style={theme.includes("dark") ? { color: "white" } : { color: "black" }} className="action-icon" onClick={onExpand || (() => { })}>
                    <FaRegWindowRestore size={13} />
                </button>
                <button style={theme.includes("dark") ? { color: "white" } : { color: "black" }} className="action-icon" onClick={onClose || (() => { })}>
                    <GoDash size={13} />
                </button>
            </div>
        </div>
    )
}

export default ActionBar;