import { AppContext } from "../../App";
import { useContext } from 'react';
import { Window } from '../../Layouts/Window';
import { contents } from "../../Helpers/Content";

const Content = (props) => {
    const { className, content, language } = props;
    return (
        <div className={`${className}`}>
            {content.inside.welcome[language]}
        </div>
    )
}

const Home = (props) => {
    const { children } = props;
    const { theme, blur, homeStyle, zIndex, setNewZIndex, setNewHomeStyle, language } = useContext(AppContext);
    const content = contents.layouts.find(c => c.name === "home_application");
    return (
        <>
            <Content theme={theme} className={`mobile window-content mobile-content ${theme} ${blur} br-1`} language={language} content={content}/>
            <Window
                setStyleContext={setNewHomeStyle}
                handleOnMouseDown={() => setNewZIndex("home")}
                zIndex={zIndex.find(item => item.name === "home").zIndex}
                className="desktop"
                defaultPosition={homeStyle.defaultPosition}
                position={{
                    x: homeStyle?.position?.x || "",
                    y: homeStyle?.position?.y || ""
                }}
                size={{
                    height: homeStyle?.size?.height || "",
                    width: homeStyle?.size?.width || ""
                }}
                style={{ ...homeStyle.style }}
                styleContext={homeStyle}
                windowName="home"
                index={0}
                name={content.content[language]}
            >
                <Content theme={theme} language={language} content={content}/>
            </Window>
        </>

    )
}

export default Home;