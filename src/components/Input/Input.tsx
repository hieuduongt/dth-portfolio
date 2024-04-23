import React, { useEffect, useState } from 'react';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    icon: React.ReactNode | null;
    iconposition: "before" | "after";
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
    const { icon, scalesize, iconposition, placeholder } = props;
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
                icon && (iconposition ? iconposition === "before" : true) ?
                    <span className='input-icon-left' style={{ width: size.value, color: "black" }}>
                        {icon}
                    </span>
                    :
                    <></>
            }
            <input {...props} placeholder={placeholder || ""} size={size.value - 10} style={{ ...props.style, height: size.value, padding: `${icon && iconposition === "before" ? `0 ${size.value}px` : "0 10px"}` }} className={'input ' + props.className} />
            {
                icon && iconposition && iconposition === "after" ?
                    <span className='input-icon-right' style={{ width: size.value, color: "black" }}>
                        {icon}
                    </span>
                    :
                    <></>
            }
        </div>
    )
}