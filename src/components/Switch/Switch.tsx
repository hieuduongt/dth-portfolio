import React, { useState } from 'react';

interface SwitchProps {
    onChange: (value: boolean) => void;
    checked: boolean;
    label: string;
    additionalLabel?: string;
}

export function Switch(props: SwitchProps) {
    const { onChange, checked, label, additionalLabel } = props;
    const [value, setValue] = useState(checked ? true : false);
    const [lever, setLever] = useState(checked ? "switch-lever-active" : "switch-lever-inactive");
    const handleOnClick = () => {
        setLever(prev => {
            if (prev.includes("inactive")) {
                return "switch-lever-active";
            } else {
                return "switch-lever-inactive";
            }
        });
        setValue(!value);
        if (onChange) onChange(!value);
    }
    return (
        <div className='switch-container'>
            <div className='switch-label'>{label}</div>

            <button className='switch' role='switch' aria-checked={value} onClick={() => handleOnClick()}>
                <div className={`switch-lever ${lever}`}></div>
            </button>
            <div className='switch-additional-label'>{additionalLabel}</div>
        </div>

    );
}