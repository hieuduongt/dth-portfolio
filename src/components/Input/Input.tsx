import React, { useEffect, useState } from 'react';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    iconbefore: React.ReactNode | null;
    iconafter: React.ReactNode | null;
    scalesize: "default" | "small" | "large";
    placeholder?: string;
}

const scaleNumber = [
    {
        value: 30,
        name: "default"
    },
    {
        value: 40,
        name: "large"
    }
];

export function Input(props: InputProps) {
    const { iconbefore, scalesize, iconafter, placeholder } = props;
    const [size, setSize] = useState(
        {
            value: 30,
            name: "default"
        }
    );
    useEffect(() => {
        if (scalesize) {
            for (const scale of scaleNumber) {
                if (scale.name === scalesize) {
                    setSize(scale);
                    break;
                }
            }
        }
    }, [scalesize]);
    return (
        <div className='input-bar'>
            {
                iconbefore ?
                    <span className='input-icon-left' style={{ width: size.value, color: "black" }}>
                        {iconbefore}
                    </span>
                    :
                    <></>
            }
            <input {...props} placeholder={placeholder || ""} size={size.value - 10} style={{ ...props.style, height: size.value, padding: `${iconbefore ? `0 ${size.value}px` : "0 10px"}` }} className={'input ' + props.className} />
            {
                iconafter ?
                    <span className='input-icon-right' style={{ width: size.value, color: "black" }}>
                        {iconafter}
                    </span>
                    :
                    <></>
            }
        </div>
    )
}