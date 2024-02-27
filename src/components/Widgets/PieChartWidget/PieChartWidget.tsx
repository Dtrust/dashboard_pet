/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { WidgetLayout } from '@src/layouts';
import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
// import { useTranslation } from 'react-i18next';
import { type IWidget } from '../@types';
import { emptyWidgets } from '@src/components/CreateWidget/CreateWidgetPreview/consts';

export const PieChartWidget: React.FC<IWidget> = props => {
    const {
        id,
        isCreatePage,
        title,
        type,
        data = [],
        setIsMainGridDraggable,
    } = props;

    // const { t } = useTranslation();

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
    const COLORS = [
        'var(--color-orange-pie-chart)',
        'var(--color-nightBlue-pie-chart)',
        'var(--color-green-pie-chart)',
        'var(--color-purple-pie-chart)',
    ];

    console.log('PieChartWidget', data);

    const renderLabel = (props: any) => {
        const { cx, cy, midAngle, outerRadius, fill, value, name } = props;
        const RADIAN = Math.PI / 180;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const mx = cx + (outerRadius + 10) * cos;
        const my = cy + (outerRadius + 15) * sin;
        const ex = mx + (cos >= 0 ? 1.5 : -1.5) * 34;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        const rectangleHeight = 10;

        return (
            <g>
                <path
                    d={`M${cx},${cy}L${mx},${my}L${ex},${ey}`}
                    stroke={fill}
                    fill="none"
                />
                <text
                    x={ex}
                    y={ey + rectangleHeight / 3.5}
                    textAnchor={textAnchor}
                    dominantBaseline="middle"
                    fontWeight="500"
                    fill={fill}
                    fontSize="14px"
                >
                    {`${name}${value}`}
                </text>
            </g>
        );
    };

    return (
        <WidgetLayout
            widgetID={id}
            optionsPeriod={options}
            selectedPeriod={'today'}
            time={'12:45'}
            isCreatePage={isCreatePage ?? false}
            setIsMainGridDraggable={setIsMainGridDraggable}
            emptyWidget={{ ...emptyWidgets[type], title }}
        >
            <div style={{ width: '100%', height: '100%' }}>
                <ResponsiveContainer width={'100%'} height={'100%'}>
                    <PieChart>
                        <Pie
                            data={data}
                            labelLine={false}
                            label={renderLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((_, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </WidgetLayout>
    );
};
