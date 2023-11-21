import { AppContext } from "../../App";
import { useContext } from 'react';
import { Window } from '../../Layouts/Window';

const Content = (props) => {
    const { theme, className } = props;
    return (
        <div className={className}>
            Resume
        </div>
    )
}

const Resume = (props) => {
    const { children } = props;
    const { theme, blur, resumeStyle, setNewResumeStyle, zIndex, setNewZIndex } = useContext(AppContext);

    return (
        <>
            <Content theme={theme} className={`mobile content ${theme} ${blur} br-1`} />
            <Window
                handleOnMouseDown={() => setNewZIndex("resume")}
                zIndex={zIndex.find(item => item.name === "resume").zIndex}
                defaultPosition={resumeStyle.defaultPosition}
                className="desktop"
                position={{
                    x: resumeStyle?.position?.x || "",
                    y: resumeStyle?.position?.y || ""
                }}
                size={{
                    height: resumeStyle?.size?.height || "",
                    width: resumeStyle?.size?.width || ""
                }}
                style={{ ...resumeStyle.style }}
                windowName="resume"
                index={1}
                styleContext={resumeStyle}
                setStyleContext={setNewResumeStyle}
            >
                <Content theme={theme} />
            </Window>
        </>

    )
}

export default Resume;