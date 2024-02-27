import React from 'react';
import styles from './styles.module.sass';
import { LangSetting } from '@src/components/SystemSettings/LangSetting/LangSetting';
import { ThemeSetting } from '@src/components/SystemSettings/ThemeSetting/ThemeSetting';
import { WidgetSetting } from '@src/components/SystemSettings/WidgetSetting/WidgetSetting';
import { AccessSetting } from '@src/components/SystemSettings/AccessSetting/AccessSetting';

export const SystemSettings: React.FC = props => {
    return (
        <div className={styles.root}>
            <LangSetting />
            <ThemeSetting />
            <WidgetSetting />
            <AccessSetting />
        </div>
    );
};
