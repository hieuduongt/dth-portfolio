import React, { useContext, useState } from 'react';
import ActionBar from '../ActionBar/ActionBar';
import { AppContext } from '../../App';
import { Rnd } from 'react-rnd';
import { handleOpenAnApplication } from '../../Helpers/Helpers';

interface Size {
    width: number | string;
    height: number | string;
}

interface Position {
    x: number;
    y: number;
}

interface WindowProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: Size;
    minWidth?: number;
    minHeight?: number;
    defaultPosition: Position;
    position: Position;
    zIndex: number;
    handleOnMouseDown?: (event: MouseEvent) => void;
    windowName?: string;
    index?: number;
    styleContext?: any;
    setStyleContext?: any;
}

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export function Window(props: WindowProps) {
    const {
        theme,
        setIsRunningApp,
        openedApps,
        setAreOpenedApps,
    } = useContext(AppContext);
    const [windowSize, setWindowSize] = useState<Size>({
        width: "",
        height: ""
    });
    const [expanded, setExpanded] = useState(false);
    const { defaultPosition, style, children, className, zIndex, minWidth, minHeight, position, size, windowName, index, styleContext, setStyleContext } = props;
    const [windowPosition, setWindowPosition] = useState<Position>({
        x: defaultPosition?.x ? defaultPosition.x : 50,
        y: defaultPosition?.y ? defaultPosition.y : 50
    });
    const [animation, setAnimation] = useState<string>("");

    return (
        <Rnd
            dragHandleClassName="action-bar"
            style={{ ...style, zIndex: expanded ? 8 : zIndex, transition: animation ? animation : style?.transition ? style.transition : "" }}
            className={`window content ${theme} blur-3 ${!windowSize.width ? "br" : ""} ${className}`}
            minWidth={size?.width ? 0 : minWidth || 300}
            minHeight={size?.width ? 0 : minHeight || 300}
            default={{
                width: 400,
                height: 300,
                x: defaultPosition?.x ? defaultPosition.x : 50,
                y: defaultPosition?.y ? defaultPosition.y : 50
            }}
            bounds={"parent"}
            position={position?.x ? position :
                (!windowSize.width ? windowPosition : {
                    x: 0,
                    y: 0
                })}
            size={size?.width ? size :
                windowSize.width ? {
                    width: windowSize.width,
                    height: windowSize.height
                } : undefined}
            onResize={(e, direction, ref, delta, position) => {
                setWindowPosition({
                    x: position.x,
                    y: position.y
                });
            }}
            onDrag={(node, data) => {
                setWindowPosition({
                    x: data.x,
                    y: data.y
                });
            }}
            onMouseDown={props.handleOnMouseDown}
        >
            <ActionBar
                onExpand={async () => {
                    setAnimation("transform 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out");
                    setWindowSize(prev => ({
                        width: prev.width ? "" : "100%",
                        height: prev.height ? "" : "100%"
                    }));
                    setExpanded(!expanded);
                    await sleep(300);
                    setAnimation("");
                }
                }
                onClose={() => handleOpenAnApplication(index, windowName, styleContext, setStyleContext, setIsRunningApp, setAreOpenedApps, openedApps)}
                onSave={() => handleOpenAnApplication(index, windowName, styleContext, setStyleContext, setIsRunningApp, setAreOpenedApps, openedApps)}
                expanded={expanded}
            />
            {children}
        </Rnd>
    )
}