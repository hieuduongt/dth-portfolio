import { AppContext } from "../../App";
import { useContext } from 'react';
import { Window } from '../../Layouts/Window';

const Content = (props) => {
    const { theme, className } = props;
    return (
        <div className={className}>
            Welcome to HieuDuongIT website
        </div>
    )
}

const Home = (props) => {
    const { children } = props;
    const { theme, blur, homeStyle, zIndex, setNewZIndex, setNewHomeStyle } = useContext(AppContext);

    return (
        <>
            <Content theme={theme} className={`mobile content ${theme} ${blur} br-1`} />
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
                name="Welcome"
            >
                <Content theme={theme} />
            </Window>
        </>

    )
}

export default Home;