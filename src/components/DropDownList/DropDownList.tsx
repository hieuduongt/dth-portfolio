import React, { useEffect, useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";

interface ListData {
    label: string;
    value: any;
}

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    scalesize: "default" | "small" | "large";
    defaultselected?: ListData;
    data: ListData[];
    onchange?: (value: ListData | undefined) => void;
}

const scaleNumber = [
    {
        value: 20,
        name: "small"
    },
    {
        value: 30,
        name: "default"
    },
    {
        value: 40,
        name: "large"
    }
];

export function DropDownList(props: DivProps) {
    const { scalesize, defaultselected, data, onchange, style, className, label } = props;
    const [selected, setSelected] = useState<ListData>();
    const [defaultSelectedValue, setDefaultSelectedValue] = useState<ListData>();
    const [open, setOpen] = useState(false);
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

    useEffect(() => {
        if (defaultselected) {
            setDefaultSelectedValue(defaultselected);
        }
    }, [defaultselected]);

    const handleWhenSelect = (data: ListData | undefined) => {
        setSelected(data);
        setDefaultSelectedValue(data);
        if(onchange) onchange(data);
    }

    return (
        <div className={`dropdown-list ${open ? "opened" : ""} ${className||""}`} style={{...style, height: size.value}} tabIndex={1} onBlur={(e) => setOpen(false)}
        onClick={() => setOpen(prev => !prev)}
        >
            <div className='selected-value'>
                {
                    selected ? selected.label : defaultSelectedValue ? defaultSelectedValue.label : label
                }
            </div>
            <IoIosArrowDropdown />
            <div className={`list-options ${open ? "opened" : ""}`}>
                <div className="option" onClick={() => handleWhenSelect(undefined)}></div>
                {
                    data.map(d => (
                        <div className={`option ${selected?.value === d.value || defaultSelectedValue?.value === d.value ? "selected" : ""}`} onClick={() => handleWhenSelect(d)}>
                            {d.label}
                        </div>
                    ))
                }

            </div>
        </div>
    )
}