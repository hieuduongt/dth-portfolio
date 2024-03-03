import React from 'react';

enum Colors {
    "default-color",
    "success-color",
    "warning-color",
    "error-color",
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    color?: "default-color" | "success-color" | "warning-color" | "error-color";
    icon?: React.ReactNode | undefined;
    iconposition?: "before" | "after";
    icononly?: boolean | undefined;
    disabled: boolean | undefined;
}

export function Button(props: ButtonProps) {
    const { color, children, icon, iconposition, icononly, disabled } = props;
    return (
        <button {...props} disabled={disabled} className={`btn ${color || Colors['default-color']}`}>
            {icononly ?
                <span style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    {icon}
                </span>
                :
                <>
                    {iconposition === "after" ?
                        <span style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                            <span style={{ marginRight: "5px" }}>
                                {children}
                            </span>
                            <span style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                {icon}
                            </span>
                        </span>
                        :
                        <span style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                            <span style={{ marginRight: icon ? "5px" : "", display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                {icon}
                            </span>
                            <span>
                                {children}
                            </span>
                        </span>
                    }
                </>
            }
        </button>
    );
}