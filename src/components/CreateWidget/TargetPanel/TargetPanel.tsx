import React from 'react';
import styles from './styles.module.sass';
import { ColorPicker, InputCount, Switcher, TargetIcon } from '@src/components';
import { useTranslation } from 'react-i18next';

interface ITargetPanel {
    isActive: boolean;
    onChange: React.Dispatch<React.SetStateAction<boolean>>;
    isCreateCounterWidgetPage?: boolean;
    isColorChange?: boolean;
    onColorChange?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TargetPanel: React.FC<ITargetPanel> = props => {
    const {
        isActive,
        onChange,
        isCreateCounterWidgetPage,
        isColorChange,
        onColorChange,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={styles.root}>
            <div
                className={`${styles.switchBtn} ${
                    isCreateCounterWidgetPage ? styles.fixedHeight : ''
                } ${isColorChange && isActive ? styles.colorChangeActive : ''}`}
                style={
                    isCreateCounterWidgetPage && isActive
                        ? { width: '100%' }
                        : {}
                }
            >
                <TargetIcon />
                <span className={styles.switchBtnLabel}>
                    {t('target_panel.label')}
                </span>
                <Switcher value={isActive} onChange={onChange} />
                {isCreateCounterWidgetPage && isActive && (
                    <>
                        <InputCount
                            disabled={!isActive}
                            isManual={true}
                            inputClassName={styles.settingInput}
                        />
                        <div className={styles.settingWrap}>
                            <div className={'divider'} />
                            <span className={styles.settingTitle}>
                                {t('target_panel.setting_title')}
                            </span>
                            <Switcher
                                value={isColorChange ?? false}
                                onChange={onColorChange ?? onChange}
                            />
                        </div>
                        {isColorChange && (
                            <>
                                <div className={'divider'} />
                                <span className={styles.settingTitle}>
                                    {t('target_panel.target_less')}
                                </span>
                                <ColorPicker
                                    className={styles.settingColorPicker}
                                />
                                <div className={'divider'} />
                                <span className={styles.settingTitle}>
                                    {t('target_panel.target_more')}
                                </span>
                                <ColorPicker
                                    className={styles.settingColorPicker}
                                />
                            </>
                        )}
                    </>
                )}
            </div>
            {!isCreateCounterWidgetPage && (
                <InputCount disabled={!isActive} isManual={true} />
            )}
        </div>
    );
};
