import React from 'react';
import { ColorPicker as AntdColorPicker } from 'antd';
import { ArrowRoundedIcon } from '@src/components';
import styles from './styles.module.sass';

interface IColorPicker {
    isDisabled?: boolean;
    className?: string;
}

export const ColorPicker: React.FC<IColorPicker> = props => {
    const { isDisabled, className } = props;

    const [open, setOpen] = React.useState<boolean>(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <AntdColorPicker
            className={`${styles.root} ${isDisabled ? styles.disabled : ''} ${
                className ?? ''
            }`}
            open={open}
            onOpenChange={handleOpen}
            disabled={isDisabled ?? false}
            showText={() => (
                <div
                    className={styles.icon}
                    style={open ? { transform: 'rotate(180deg)' } : {}}
                >
                    <ArrowRoundedIcon />
                </div>
            )}
        />
    );
};
