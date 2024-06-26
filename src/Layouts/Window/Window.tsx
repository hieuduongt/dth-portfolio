import React, { useContext, useState } from 'react';
import ActionBar from '../ActionBar/ActionBar';
import { AppContext } from '../../App';
import { Rnd } from 'react-rnd';
import { handleOpenAnApplication } from '../../Helpers/Helpers';
import { ReactNode } from 'react';

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
    name?: string | ReactNode;
}

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export function Window(props: WindowProps) {
    const {
        theme,
        blur,
        actionBarColor,
        openedApps,
        setAreOpenedApps,
        setNewZIndex
    } = useContext(AppContext);
    const [windowSize, setWindowSize] = useState<Size>({
        width: "",
        height: ""
    });
    const [expanded, setExpanded] = useState(false);
    const { defaultPosition, style, children, className, zIndex, minWidth, minHeight, position, size, windowName, name, styleContext, setStyleContext } = props;
    const [windowPosition, setWindowPosition] = useState<Position>({
        x: defaultPosition?.x ? defaultPosition.x : 50,
        y: defaultPosition?.y ? defaultPosition.y : 50
    });
    const [animation, setAnimation] = useState<string>("");

    return (
        <Rnd
            dragHandleClassName="drag-area"
            style={{ ...style, zIndex: expanded ? 8 : zIndex, transition: animation || (style?.transition ? style.transition : ""), display: "flex", flexDirection: "column", backgroundColor: theme.includes("transparent") ? "" : actionBarColor}}
            className={`window content ${theme.includes("transparent") ? theme : ""} ${blur} ${!windowSize.width ? "br-1" : ""} ${className}`}
            minWidth={size?.width ? 0 : minWidth || 300}
            minHeight={size?.width ? 0 : minHeight || 200}
            resizeHandleClasses={{
                top: "window-resize-top-cursor",
                right: "window-resize-right-cursor",
                bottom: "window-resize-bottom-cursor",
                left: "window-resize-left-cursor"
            }}
            default={{
                width: 300,
                height: 200,
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
                styleContext={styleContext}
                onClose={() => handleOpenAnApplication(windowName, styleContext, setStyleContext, setAreOpenedApps, openedApps, setNewZIndex)}
                onSave={() => handleOpenAnApplication(windowName, styleContext, setStyleContext, setAreOpenedApps, openedApps, setNewZIndex)}
                expanded={expanded}
                name={name}
            />
            <div className={`window-content ${theme.includes("transparent") ? "" : theme}`}>
                {children}
            </div>

        </Rnd>
    )
}