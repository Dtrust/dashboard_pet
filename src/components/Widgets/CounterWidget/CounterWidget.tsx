import React from 'react';
import { useTranslation } from 'react-i18next';
import { BriefcaseIcon, ButtonIcon, ExcelIcon } from '@src/components';
import { WidgetLayout } from '@src/layouts';
import styles from './styles.module.sass';
import { type IWidget } from '../@types';
import { emptyWidgets } from '@src/components/CreateWidget/CreateWidgetPreview/consts';

const options = [
    {
        value: 'today',
        label: 'Сьогодні',
    },
    {
        value: 'yesterday',
        label: 'Вчора',
    },
];

export const CounterWidget: React.FC<IWidget> = props => {
    const { id, isCreatePage, title, type, setIsMainGridDraggable } = props;

    const { t } = useTranslation();

    return (
        <WidgetLayout
            widgetID={id}
            optionsPeriod={options}
            selectedPeriod={'today'}
            time={'12:45'}
            isCreatePage={isCreatePage ?? false}
            emptyWidget={{ ...emptyWidgets[type], title }}
            setIsMainGridDraggable={setIsMainGridDraggable}
            actionButtons={
                <>
                    <ButtonIcon
                        className={styles.btn}
                        icon={<BriefcaseIcon />}
                        title={t('widgets.counter.briefcase_btn')}
                    />
                    <ButtonIcon
                        className={styles.btn}
                        icon={<ExcelIcon />}
                        title={t('widgets.counter.excel_btn')}
                    />
                </>
            }
        >
            <div className={styles.root}>
                <div className={styles.dataValue}>56</div>
                <div className={styles.dataLabel}>Вчасно</div>
                <div className={styles.dataGoal}>Мета: 50</div>
            </div>
        </WidgetLayout>
    );
};
