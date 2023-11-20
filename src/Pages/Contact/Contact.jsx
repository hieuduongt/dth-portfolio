import { AppContext } from "../../App";
import { useContext } from 'react';
import { Window } from '../../Layouts/Window';

const Content = (props) => {
    const { theme, className } = props;
    return (
        <div className={className}>
            Contact
        </div>
    )
}

const Contact = (props) => {
    const { children } = props;
    const { theme, contactStyle, setNewContactStyle, zIndex, setNewZIndex } = useContext(AppContext);

    return (
        <>
            <Content theme={theme} className={`mobile content ${theme} br-1 blur-3`} />
            <Window
                handleOnMouseDown={() => setNewZIndex("contact")}
                zIndex={zIndex.find(item => item.name === "contact").zIndex}
                className="window desktop"
                defaultPosition={contactStyle.defaultPosition}
                position={{
                    x: contactStyle?.position?.x || "",
                    y: contactStyle?.position?.y || ""
                }}
                size={{
                    height: contactStyle?.size?.height || "",
                    width: contactStyle?.size?.width || "",
                }}
                style={{ ...contactStyle.style }}
                windowName="contact"
                index={4}
                styleContext={contactStyle}
                setStyleContext={setNewContactStyle}
            >
                <Content theme={theme} />
            </Window>
        </>

    )
}

export default Contact;