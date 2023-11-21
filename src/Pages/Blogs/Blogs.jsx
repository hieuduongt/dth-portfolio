import { AppContext } from "../../App";
import { useContext } from 'react';
import { Window } from '../../Layouts/Window';

const Content = (props) => {
    const { theme, className } = props;
    return (
        <div className={className}>
            Blogs
        </div>
    )
}

const Blogs = (props) => {
    const { children } = props;
    const { theme, blur, blogsStyle, setNewBlogsStyle, zIndex, setNewZIndex } = useContext(AppContext);

    return (
        <>
            <Content theme={theme} className={`mobile content ${theme} ${blur} br-1`} />
            <Window
                handleOnMouseDown={() => setNewZIndex("blogs")}
                zIndex={zIndex.find(item => item.name === "blogs").zIndex}
                className="window desktop"
                defaultPosition={blogsStyle.defaultPosition}
                position={{
                    x: blogsStyle?.position?.x || "",
                    y: blogsStyle?.position?.y || ""
                }}
                size={{
                    height: blogsStyle?.size?.height || "",
                    width: blogsStyle?.size?.width || ""
                }}
                style={{ ...blogsStyle.style }}
                windowName="blogs"
                index={3}
                styleContext={blogsStyle}
                setStyleContext={setNewBlogsStyle}
            >
                <Content theme={theme} />
            </Window>
        </>

    )
}

export default Blogs;