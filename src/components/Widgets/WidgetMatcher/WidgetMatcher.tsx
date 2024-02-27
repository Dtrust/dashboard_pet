import React from 'react';
import { type IWidget } from '../@types';
import { BarChartWidget } from '../BarChartWidget/BarChartWidget';
import { CounterWidget } from '../CounterWidget/CounterWidget';
import { LineChartWidget } from '../LineChartWidget/LineChartWidget';
import { TextWidget } from '../TextWidget/TextWidget';
import { PieChartWidget, TableWidget } from '@src/components';

export const WidgetMatcher: React.FC<IWidget> = props => {
    const { type, setIsMainGridDraggable } = props;
    switch (type) {
        case 'counter':
            return (
                <CounterWidget
                    {...props}
                    setIsMainGridDraggable={setIsMainGridDraggable}
                />
            );
        case 'lineChart':
            return (
                <LineChartWidget
                    {...props}
                    setIsMainGridDraggable={setIsMainGridDraggable}
                />
            );
        case 'pieChart':
            return (
                <PieChartWidget
                    {...props}
                    setIsMainGridDraggable={setIsMainGridDraggable}
                />
            );
        case 'barChart':
            return (
                <BarChartWidget
                    {...props}
                    setIsMainGridDraggable={setIsMainGridDraggable}
                />
            );
        case 'table':
            return (
                <TableWidget
                    {...props}
                    setIsMainGridDraggable={setIsMainGridDraggable}
                />
            );
        case 'text':
            return (
                <TextWidget
                    {...props}
                    setIsMainGridDraggable={setIsMainGridDraggable}
                />
            );
        default:
            return <>Error type</>;
    }
};
