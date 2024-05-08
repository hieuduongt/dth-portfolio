import React, { useEffect, useState } from 'react';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    iconBefore: React.ReactNode | null;
    iconAfter: React.ReactNode | null;
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
    const { iconBefore, scalesize, iconAfter, placeholder } = props;
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
                iconBefore ?
                    <span className='input-icon-left' style={{ width: size.value, color: "black" }}>
                        {iconBefore}
                    </span>
                    :
                    <></>
            }
            <input {...props} placeholder={placeholder || ""} size={size.value - 10} style={{ ...props.style, height: size.value, padding: `${iconBefore ? `0 ${size.value}px` : "0 10px"}` }} className={'input ' + props.className} />
            {
                iconAfter ?
                    <span className='input-icon-right' style={{ width: size.value, color: "black" }}>
                        {iconAfter}
                    </span>
                    :
                    <></>
            }
        </div>
    )
}