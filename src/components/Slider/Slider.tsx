import React, { useState, useCallback, useRef, useEffect } from 'react';

interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
    defaultLevel?: number;
    handleOnChange?: (value) => void;
}

export function Slider(props: SliderProps) {
    const { defaultLevel, handleOnChange } = props;
    const [level, setLevel] = useState(defaultLevel || 0);
    const handleChange = (value) => {
        setLevel(value.target.value);
        if(handleOnChange) handleOnChange(value.target.value);
    }
    return (
        <div className="slider">
            <input
                type="range"
                min="0"
                max="100"
                value={level}
                onChange={handleChange}
                step="1"
                className='progress-bar'
            />
        </div>
    )
}