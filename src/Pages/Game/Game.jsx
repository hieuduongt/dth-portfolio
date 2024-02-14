import { AppContext } from "../../App";
import { useContext } from 'react';
import { Window } from '../../Layouts/Window';

const Content = (props) => {
    const { theme, className } = props;
    return (
        <div className={className} style={{height: "100%"}}>
            <iframe src="https://hieuduongit-carogame.vercel.app/" height={"100%"} width={"100%"} style={{borderRadius: "10px", border: "none"}}/>
        </div>
    )
}

const Game = (props) => {
    const { children } = props;
    const { theme, gameStyle, setNewGameStyle, zIndex, setNewZIndex } = useContext(AppContext);

    return (
        <>
            {/* <Content theme={theme} className={`mobile content ${theme} ${blur} br-1`} /> */}
            <Window
                handleOnMouseDown={() => setNewZIndex("contact")}
                zIndex={zIndex.find(item => item.name === "contact").zIndex}
                className="window desktop"
                defaultPosition={gameStyle.defaultPosition}
                position={{
                    x: gameStyle?.position?.x || "",
                    y: gameStyle?.position?.y || ""
                }}
                size={{
                    height: gameStyle?.size?.height || "",
                    width: gameStyle?.size?.width || "",
                }}
                style={{ ...gameStyle.style }}
                windowName="contact"
                index={4}
                styleContext={gameStyle}
                setStyleContext={setNewGameStyle}
                name="Game"
            >
                <Content theme={theme} />
            </Window>
        </>

    )
}

export default Game;