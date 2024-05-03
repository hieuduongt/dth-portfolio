import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../App';
import { Button } from '../Button';
import { IoClose } from "react-icons/io5";
import { Timer } from '../Timer';

interface Size {
    name: string;
    width: number;
}

const sizes = [
    {
        name: "small",
        width: 400
    },
    {
        name: "default",
        width: 800
    },
    {
        name: "large",
        width: 1200
    }
]

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    modalsize: "small" | "default" | "large";
    closeIcon: React.ReactNode | undefined;
    okButtonIcon: React.ReactNode | undefined;
    cancelButtonIcon: React.ReactNode | undefined;
    okText: string | undefined;
    cancelText: string | undefined;
    modaltitle: string | undefined;
    show: boolean | undefined;
    backdropclose: boolean | undefined;
    isalert: boolean | undefined;
    closeafter?: number | undefined;
    onOk: () => void;
    onCancel: () => void;
}

export function Modal(props: ModalProps) {
    const { children, closeIcon, modalsize, modaltitle, show, backdropclose, closeafter, isalert, onOk, onCancel } = props;
    const { theme } = useContext(AppContext);
    const [size, setSize] = useState<Size>();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setSize(sizes.find(s => s.name === modalsize));
        setOpen(show ? show : false);
    }, [modalsize, show]);

    return (
        <div className={`modal-container ${open ? "open" : "close"}`}>
            <div className={`${theme.includes("dark") ? "dark-background-transparent " : "light-background-transparent "} blur-3 modal-background `}
                onClick={closeafter ? () => {} : backdropclose === true ? () => onCancel() : () => {}}
            >
            </div>
            <div className={`modal ${theme} blur-3 br-2`} style={{ width: size ? size.width : 600 }}>
                <div className='modal-header'>
                    <div className='modal-title'>
                        {modaltitle || "Modal Title"}
                    </div>
                    {
                        closeafter ?
                            <div className='modal-timing'>
                                <Timer time={closeafter} onTimesUp={() => setOpen(false)}/>
                            </div>
                            :
                            <div className='modal-close-button'>
                                <Button color='error-color' icon={closeIcon ? closeIcon : <IoClose size={25} />} icononly="true" onClick={() => onCancel()}>Close</Button>
                            </div>
                    }

                </div>
                <div className='modal-body'>
                    {children}
                </div>
                {isalert ? <></> :
                    <div className='modal-footer'>
                        <Button color='default-color' onClick={onCancel ? () => onCancel() : () => { }} style={{ marginLeft: "10px" }}>Cancel</Button>
                        <Button color='success-color' onClick={onOk ? () => onOk() : () => { }}>Ok</Button>
                    </div>
                }
            </div>

        </div>
    );
}