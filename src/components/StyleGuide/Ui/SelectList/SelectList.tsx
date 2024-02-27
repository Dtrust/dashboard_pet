import React from 'react';
import { Select } from 'antd';
import styles from './styles.module.sass';
import { ArrowDownIcon, ArrowRoundedIcon } from '@src/components';

interface ISelectList {
    placeholder?: string;
    options: Array<{ value: string; label: string }>;
    selectedValue: string;
    className?: string;
    isDisabled?: boolean;
    isFilter?: boolean;
    isTransparentBg?: boolean;
}

export const SelectList: React.FC<ISelectList> = props => {
    const {
        options,
        placeholder,
        selectedValue,
        className,
        isDisabled,
        isFilter,
        isTransparentBg,
    } = props;

    const [currentValue, setCurrentValue] =
        React.useState<string>(selectedValue);

    const handleSelect = (value: string) => {
        setCurrentValue(value);
        console.log(`Selected: ${value}`);
    };

    const renderIcon = () => {
        if (isFilter) {
            return <ArrowDownIcon />;
        } else {
            return <ArrowRoundedIcon />;
        }
    };

    return (
        <Select
            className={`${styles.root} ${className ?? ''} ${
                isDisabled ? styles.disabled : ''
            } ${isFilter ? 'h27' : ''} ${isTransparentBg ? 'transparent' : ''}`}
            suffixIcon={renderIcon()}
            placeholder={placeholder && placeholder}
            onSelect={handleSelect}
            options={options}
            value={currentValue}
        />
    );
};
