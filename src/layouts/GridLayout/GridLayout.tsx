import React from 'react';
import { useSelector } from 'react-redux';
import type { Layout } from 'react-grid-layout';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import styles from './styles.module.sass';
import {
    selectDashboardWidgets,
    // selectGridLayout,
} from '@src/store/dashboardTemp/selectors';
import { EmptyWidget, WidgetMatcher } from '@src/components';
import { useDraggable } from '@src/hooks';
import { selectCurrentDashBoard } from '@src/store/dashboards/selectors';
import { useAPPDispatch } from '@src/store/store';
import { dashboardWidgets } from '@src/tempData/dashboardWidgets';
import { setWidgets } from '@src/store/dashboardTemp/slice';

const ResponsiveGridLayout = WidthProvider(Responsive);

export const GridLayout: React.FC = () => {
    const dispatch = useAPPDispatch();

    const [handleDragStart, handleDragStop] = useDraggable();
    // Get grid layout from global state
    // const stateLayout = useSelector(selectGridLayout());
    const currentDashboard = useSelector(selectCurrentDashBoard());

    const widgets = useSelector(selectDashboardWidgets());

    // Calculate widgets count
    const widgetsCount = currentDashboard.cellsY * currentDashboard.cellsX;

    // Calculate widget width, 12 - the number of columns
    const widgetWidth = 12 / currentDashboard.cellsY;

    // Calculate widget height based on number of widgets 8 - number of height=100% of area
    const widgetHeight = widgetsCount === 1 ? 8 : 4;

    // Local layout state
    const [layout, setLayout] = React.useState<Layout[]>([]);

    // This is IMPORTANT state for disable draggable if widget modal is open and
    const [isMainGridDraggable, setIsMainGridDraggable] =
        React.useState<boolean>(true);

    const onLayoutChange = (newLayout: Layout[]) => {
        setLayout(newLayout);
        // console.log(newLayout);
    };

    React.useEffect(() => {
        dispatch(setWidgets(dashboardWidgets));
    }, []);

    React.useLayoutEffect(() => {
        /* Make new layout array depending on widgets count
         * [...{ i: '0', x: 0, y: 0, w: widgetWidth, h: 4 }]
         *  */
        const newLayout = Array.from({ length: widgetsCount }, (_, index) => ({
            i: index.toString(),
            x: (index % currentDashboard.cellsY) * widgetWidth,
            y: Math.floor(index / currentDashboard.cellsY) * 4,
            w: widgetWidth,
            h: widgetHeight,
        }));
        setLayout(newLayout);
    }, [widgetsCount, currentDashboard.cellsY, widgetWidth]);

    const renderWidget = widgets.map((widget, index) => (
        <div key={index} className={`${styles.item}`}>
            <WidgetMatcher
                {...widget}
                setIsMainGridDraggable={setIsMainGridDraggable}
            />
        </div>
    ));

    const renderWidgetsArea = () => {
        return Array.from({ length: widgetsCount }, (_, index) => {
            if (index < widgets.length) {
                return renderWidget[index];
            } else {
                return (
                    <div
                        key={index}
                        className={`${styles.item} ${styles.emptyWidget}`}
                    >
                        <EmptyWidget />
                    </div>
                );
            }
        });
    };

    return (
        <div className={styles.root}>
            <div className={`container ${styles.gridContainer}`}>
                <ResponsiveGridLayout
                    onDragStop={handleDragStop}
                    onDrag={handleDragStart}
                    className="layout"
                    draggableCancel=".noDrag"
                    layouts={{ lg: layout }}
                    breakpoints={{
                        lg: 1200,
                        md: 996,
                        sm: 768,
                        xs: 480,
                        xxs: 0,
                    }}
                    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                    rowHeight={88}
                    onLayoutChange={onLayoutChange}
                    isBounded={true}
                    isDraggable={isMainGridDraggable}
                >
                    {renderWidgetsArea()}
                </ResponsiveGridLayout>
            </div>
        </div>
    );
};
