import { AppContext } from "../../App";
import { useContext } from 'react';
import { Window } from '../../Layouts/Window';
import { contents } from "../../Helpers/Content";

const Content = (props) => {
    const { theme, className } = props;
    return (
        <div className={className} style={{ height: "100%" }}>
            <iframe src="https://caro-game.hieuduongit.com/" height={"100%"} width={"100%"} style={{ borderRadius: "10px", border: "none" }} />
        </div>
    )
}

const Game = (props) => {
    const { children } = props;
    const { theme, gameStyle, setNewGameStyle, zIndex, setNewZIndex, language } = useContext(AppContext);
    const content = contents.layouts.find(c => c.name === "game_application");
    return (
        <>
            {/* <Content theme={theme} className={`mobile content ${theme} ${blur} br-1`} /> */}
            <Window
                handleOnMouseDown={() => setNewZIndex("game")}
                zIndex={zIndex.find(item => item.name === "game").zIndex}
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
                windowName="game"
                index={4}
                styleContext={gameStyle}
                setStyleContext={setNewGameStyle}
                name={
                    <span className="action-bar-link"
                        onClick={() => window.open("https://caro-game.hieuduongit.com", "_blank")}
                    >
                        {content.content[language]}
                    </span>
                }
            >
                <Content theme={theme} />
            </Window>
        </>

    )
}

export default Game;