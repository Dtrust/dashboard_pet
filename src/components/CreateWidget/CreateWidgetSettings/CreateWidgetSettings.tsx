import React, { useMemo, type Dispatch, type SetStateAction } from 'react';
import {
    FilterPanel,
    SelectDashboardPeriod,
    Switcher,
    TextEditor,
} from '@src/components';
import styles from './styles.module.sass';
import type { WidgetItemType } from '@src/store/dashboardTemp/@types';
import { t } from 'i18next';
import { getCurrentLanguage } from '@src/helpers';
import { LineChartSettings } from './LineChartSettings';
import { PieChartSettings } from '@src/components/CreateWidget/CreateWidgetSettings/PieChartSettings';
import { CounterSettings } from '@src/components/CreateWidget/CreateWidgetSettings/CounterSettings';
import { TableWidgetSettings } from '@src/components/CreateWidget/CreateWidgetSettings/TableWidgetSettings';

interface ICreateWidgetSettings {
    directionView: 'horizontal' | 'vertical';
    widget: WidgetItemType;
    setWidget: Dispatch<SetStateAction<WidgetItemType>>;
}

export const CreateWidgetSettings: React.FC<ICreateWidgetSettings> = props => {
    const { directionView, widget, setWidget } = props;
    const { data: widgetData = [''] } = widget;

    const [dataLabelsSwitch, setDataLabelsSwitch] =
        React.useState<boolean>(false);

    const language = getCurrentLanguage();
    const settingsTitle =
        widget.type === 'text'
            ? t('create_widget.settings.text')
            : t('create_widget.settings.period');

    const isTextWidget = widget.type === 'text';

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const setWidgetData = (widgetData: string | WidgetItemType['data']) => {
        //string argument for TextWidget. For rest WidgetItemType['data']
        if (typeof widgetData === 'string') {
            const data = [widgetData] as WidgetItemType['data'];
            setWidget({
                ...widget,
                data,
            });
        } else {
            setWidget({
                ...widget,
                data: widgetData,
            });
        }
    };

    const WidgetSettings = useMemo(() => {
        switch (widget.type) {
            case 'text':
                return (
                    <TextEditor data={widgetData[0]} setData={setWidgetData} />
                );
            case 'lineChart':
                return <LineChartSettings />;
            case 'barChart':
                return <LineChartSettings />;
            case 'pieChart':
                return <PieChartSettings />;
            case 'table':
                return <TableWidgetSettings />;
            case 'counter':
                return <CounterSettings />;
            default:
                return <>Этот виджет еще не реализовали</>;
        }
    }, [widget, language]);

    return (
        <div
            className={`${styles.root} ${
                directionView === 'horizontal' ? styles.horizontal : ''
            }`}
        >
            <div className={styles.wrap}>
                <div className={styles.settingItem}>
                    <p className={styles.settingItemTitle}>{settingsTitle}</p>
                    {!isTextWidget && (
                        <div className={styles.settingPeriod}>
                            <SelectDashboardPeriod
                                isCreatePage={true}
                                className={styles.createPagePeriod}
                            />
                            {widget.type !== 'counter' &&
                                widget.type !== 'table' && (
                                    <div className={styles.settingSwitchWrap}>
                                        <p
                                            className={
                                                styles.settingSwitchTitle
                                            }
                                        >
                                            {t(
                                                'create_widget.settings.data_label'
                                            )}
                                        </p>
                                        <Switcher
                                            value={dataLabelsSwitch}
                                            onChange={setDataLabelsSwitch}
                                        />
                                    </div>
                                )}
                        </div>
                    )}
                </div>
                {WidgetSettings}
            </div>
            {!isTextWidget && <FilterPanel />}
        </div>
    );
};
