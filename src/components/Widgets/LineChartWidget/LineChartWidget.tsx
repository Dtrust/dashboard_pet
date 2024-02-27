import React, { memo } from 'react';
import {
    Line,
    LineChart,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import styles from './styles.module.sass';
import { WidgetLayout } from '@src/layouts';
import type { IWidget } from '@src/components/Widgets/@types';
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

const colors = ['#FFC700', '#D73737', '#437EC3', '#54c142'];

interface IChart {
    data?: any[];
}

const Chart: React.FC<IChart> = memo(function Chart({ data }) {
    const keys =
        (data && Object.keys(data[0]).filter(key => key !== 'name')) ?? [];
    return (
        <div className={styles.root}>
            <ResponsiveContainer className={styles.chartWrap} height="99%">
                <LineChart data={data} className={styles.chart}>
                    {/*<CartesianGrid strokeDasharray="3 3" />*/}
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    {keys.map((key, index) => (
                        <Line
                            key={index}
                            type="monotone"
                            dataKey={key}
                            stroke={colors[index % colors.length]}
                            strokeWidth="2"
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
});

export const LineChartWidget: React.FC<IWidget> = props => {
    const {
        id,
        data = [],
        isCreatePage,
        type,
        title,
        setIsMainGridDraggable,
    } = props;

    return (
        <WidgetLayout
            widgetID={id}
            optionsPeriod={options}
            selectedPeriod={'today'}
            time={'12:45'}
            isCreatePage={isCreatePage ?? false}
            emptyWidget={{ ...emptyWidgets[type], title }}
            setIsMainGridDraggable={setIsMainGridDraggable}
        >
            <Chart data={[...data]} />
        </WidgetLayout>
    );
};
