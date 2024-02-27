import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './styles.module.sass';
import {
    BarChartIcon,
    CounterIcon,
    LineChartIcon,
    PieChartIcon,
    TableIcon,
    TextWidgetIcon,
} from '@src/components';
import type { WidgetDataType } from './widgetDataType';
import type { WidgetType } from '@src/store/dashboardTemp/@types';

interface ICreateWidgetTypes {
    className?: string;
    isCreatePage?: boolean;
    currentWidgetType?: WidgetType;
    onChangeWidgetType?: (value: WidgetType) => void;
}

export const CreateWidgetTypes: React.FC<ICreateWidgetTypes> = props => {
    const { className, isCreatePage, currentWidgetType, onChangeWidgetType } =
        props;

    const { t } = useTranslation();

    const widgetData: WidgetDataType = [
        {
            type: 'text',
            title: t('widgets.empty.text'),
        },
        {
            type: 'pieChart',
            title: t('widgets.empty.pieChart'),
        },
        {
            type: 'table',
            title: t('widgets.empty.table'),
        },
        {
            type: 'counter',
            title: t('widgets.empty.counter'),
        },
        {
            type: 'barChart',
            title: t('widgets.empty.barChart'),
        },
        {
            type: 'lineChart',
            title: t('widgets.empty.lineChart'),
        },
    ];

    const renderIcons = (type: WidgetType) => {
        switch (type) {
            case 'counter':
                return <CounterIcon />;
            case 'lineChart':
                return <LineChartIcon />;
            case 'pieChart':
                return <PieChartIcon />;
            case 'barChart':
                return <BarChartIcon />;
            case 'table':
                return <TableIcon />;
            case 'text':
                return <TextWidgetIcon />;
        }
    };

    const renderButtons = widgetData.map((item, index) => {
        if (isCreatePage && onChangeWidgetType) {
            return (
                <button
                    key={index}
                    className={`${styles.btn} ${
                        currentWidgetType === item.type ? styles.active : ''
                    } `}
                    title={item.title}
                    onClick={() => onChangeWidgetType(item.type)}
                >
                    {renderIcons(item.type)}
                </button>
            );
        } else {
            return (
                <Link
                    to={'/create-widget'}
                    // this prop for pass widget type to create widget page
                    state={{ widgetType: item.type }}
                    key={index}
                    className={styles.btn}
                    title={item.title}
                    type={item.type}
                >
                    {renderIcons(item.type)}
                </Link>
            );
        }
    });

    return (
        <div className={`${styles.root} ${className ?? ''}`}>
            {renderButtons}
        </div>
    );
};
