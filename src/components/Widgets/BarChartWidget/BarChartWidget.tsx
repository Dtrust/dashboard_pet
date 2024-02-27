import React from 'react';
import { WidgetLayout } from '@src/layouts';
import styles from './styles.module.sass';
import {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
} from 'recharts';
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

export const BarChartWidget: React.FC<IWidget> = props => {
    const { id, data, isCreatePage, title, type, setIsMainGridDraggable } =
        props;

    const keys =
        (data && Object.keys(data[0]).filter(key => key !== 'name')) ?? [];

    const colors = ['#FFC700', '#D73737', '#437EC3', '#54c142'];

    return (
        <WidgetLayout
            widgetID={id}
            optionsPeriod={options}
            selectedPeriod="today"
            time="12:45"
            isCreatePage={isCreatePage ?? false}
            setIsMainGridDraggable={setIsMainGridDraggable}
            emptyWidget={{ ...emptyWidgets[type], title }}
        >
            <ResponsiveContainer className={styles.root} height="99%">
                <BarChart data={data} className={styles.chart}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#82ca9d"
                    />
                    <Tooltip />
                    {keys.map((key, index) => (
                        <React.Fragment key={index}>
                            <Bar
                                yAxisId="left"
                                dataKey={key}
                                fill={colors[index % colors.length]}
                            />
                            <Bar
                                yAxisId="right"
                                dataKey={key}
                                fill={colors[index % colors.length]}
                            />
                        </React.Fragment>
                    ))}
                </BarChart>
            </ResponsiveContainer>
        </WidgetLayout>
    );
};
