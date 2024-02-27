import React from 'react';
import { Switch } from 'antd';
import styles from './styles.module.sass';

interface ISwitcher {
    className?: string;
    value: boolean;
    onChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Switcher: React.FC<ISwitcher> = props => {
    const { className, value, onChange } = props;

    // const [checked, setChecked] = React.useState<boolean>(value);

    const handleChange = () => {
        // setChecked(prev => !prev);
        onChange(prev => !prev);
    };

    return (
        <Switch
            className={`${styles.root} ${value ? styles.checked : ''} ${
                className ?? ''
            }`}
            checked={value}
            onChange={handleChange}
        />
    );
};
