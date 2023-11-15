import { AppContext } from "../../App";
import { useContext } from 'react';
import { Window } from '../../Layouts/Window';

const Content = (props) => {
    const { theme, className } = props;
    return (
        <div className={className}>
            Works
        </div>
    )
}

const Works = (props) => {
    const { children } = props;
    const { theme, worksStyle, setNewWorksStyle, zIndex, setNewZIndex } = useContext(AppContext);

    return (
        <>
            <Content theme={theme} className={`mobile content ${theme} br-1 blur-3`} />
            <Window
                handleOnMouseDown={() => setNewZIndex("works")}
                zIndex={zIndex.find(item => item.name === "works").zIndex}
                defaultPosition={worksStyle.defaultPosition}
                className="desktop"
                position={{
                    x: worksStyle?.position?.x || "",
                    y: worksStyle?.position?.y || ""
                }}
                size={{
                    height: worksStyle?.size?.height || "",
                    width: worksStyle?.size?.width || ""
                }}
                style={{ ...worksStyle.style }}
                styleContext={worksStyle}
                windowName="works"
                index={2}
                setStyleContext={setNewWorksStyle}
            >
                 <Content theme={theme}/>
            </Window>
        </>

    )
}

export default Works;