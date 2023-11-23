import React, { useState } from 'react';
import { useEffect } from 'react';

interface SwitchProps {
    onChange: (value: boolean) => void;
    checked: boolean;
    label: string;
    additionalLabel?: string;
}

export function Switch(props: SwitchProps) {
    const { onChange, checked, label, additionalLabel } = props;
    const [value, setValue] = useState<boolean>();
    const [lever, setLever] = useState<string>();
    const handleOnClick = () => {
        setLever(prev => {
            if (prev?.includes("inactive")) {
                return "switch-lever-active";
            } else {
                return "switch-lever-inactive";
            }
        });
        setValue(!value);
        if (onChange) onChange(!value);
    }
    useEffect(() => {
        setLever(checked ? "switch-lever-active" : "switch-lever-inactive");
        setValue(checked ? true : false);
    }, [checked]);

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