import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.sass';
import { ArrowDropDownIcon } from '@src/components';

interface IInputCount {
    value?: number;
    maxValue?: number;
    isManual?: boolean;
    disabled?: boolean;
    inputClassName?: string;
}

export const InputCount: React.FC<IInputCount> = props => {
    const { value, maxValue, isManual, disabled, inputClassName } = props;

    const { t } = useTranslation();

    const [inputValue, setInputValue] = React.useState<number>(value ?? 1);

    const handleIncrement = () => {
        if (maxValue) {
            if (inputValue < maxValue) {
                setInputValue(prev => prev + 1);
            }
        } else {
            setInputValue(prev => prev + 1);
        }
    };

    const handleDecrement = () => {
        if (inputValue > 1) {
            setInputValue(prev => prev - 1);
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isManual) {
            setInputValue(Number(e.target.value));
        }
    };

    return (
        <div className={`${styles.root} ${disabled ? styles.disabled : ''}`}>
            <input
                className={inputClassName ?? ''}
                type="number"
                min="1"
                value={inputValue}
                onChange={e => onChange(e)}
            />
            <div className={styles.btnWrap}>
                <button
                    title={t('system_settings.widgets_more_btn')}
                    onClick={handleDecrement}
                    disabled={inputValue === 1}
                    className={`${styles.actionBtn} ${styles.down}`}
                >
                    <ArrowDropDownIcon />
                </button>
                <button
                    title={t('system_settings.widgets_less_btn')}
                    onClick={handleIncrement}
                    disabled={inputValue === maxValue}
                    className={`${styles.actionBtn} ${styles.up}`}
                >
                    <ArrowDropDownIcon />
                </button>
            </div>
        </div>
    );
};
