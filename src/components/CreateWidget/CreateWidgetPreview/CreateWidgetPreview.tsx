import React from 'react';
import { WidgetMatcher } from '@src/components';
import { type WidgetItemType } from '@src/store/dashboardTemp/@types';

interface IWidgetPreviewProps {
    widget: WidgetItemType;
}

export const CreateWidgetPreview: React.FC<IWidgetPreviewProps> = props => {
    const { widget } = props;

    // ToDo this is temporary bad practice for fix types error with react-grid-layout in modal table
    // eslint-disable-next-line
    const [_, setIsMainGridDraggable] = React.useState<boolean>(false);

    const Widget = () => {
        const widgetProps = { ...widget, isCreatePage: true };
        return (
            <WidgetMatcher
                {...widgetProps}
                setIsMainGridDraggable={setIsMainGridDraggable}
            />
        );
    };

    return <Widget />;
};
