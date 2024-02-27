import React, { useState } from 'react';
import SplitPane from 'react-split-pane';
import type { SplitPaneProps } from 'react-split-pane';
import {
    CreateWidgetControlPanel,
    CreateWidgetPreview,
    CreateWidgetSettings,
} from '@src/components';
import styles from './styles.module.sass';
import { useLocation } from 'react-router';
import { type WidgetType } from '@src/store/dashboardTemp/@types';
import { emptyWidgets } from '@src/components/CreateWidget/CreateWidgetPreview/consts';

//This solution for fix bug in types in library react-split-pane. Add children prop type to SplitPaneProps
interface ICustomSplitPane extends SplitPaneProps {
    children: React.ReactNode;
}
// New SplitPane with extends interface
const CustomSplitPane: React.FC<ICustomSplitPane> = ({ children, ...rest }) => {
    return <SplitPane {...rest}>{children}</SplitPane>;
};

export const CreateWidgetLayout: React.FC = props => {
    // State for set direction of SplitPane. setDirectionView use in CreateWidgetControlPanel
    const [directionView, setDirectionView] = React.useState<
        'horizontal' | 'vertical'
    >('vertical');

    // State for set min and max size of SplitPanes. 300 and 1200 set by visual testing
    const [minSize, setMinSize] = React.useState<number>(300);
    const [maxSize, setMaxSize] = React.useState<number>(1200);

    const location = useLocation();
    const widgetType = location.state?.widgetType as WidgetType;
    const [widget, setWidget] = useState(emptyWidgets[widgetType]);
    // State for setting the primary SplitPane. The main panel is changeable
    // const [primaryPane, setPrimaryPane] = React.useState<'first' | 'second'>(
    //     'first'
    // );

    // This action for change primary SplitPane, max and min size if direction of SplitPane has changed
    React.useLayoutEffect(() => {
        if (directionView === 'horizontal') {
            // setPrimaryPane('second');
            setMinSize(minSize / 2.5);
            setMaxSize(maxSize / 2.5);
        } else {
            // setPrimaryPane('first');
            setMinSize(300);
            setMaxSize(1200);
        }
    }, [directionView]);

    return (
        <>
            <CreateWidgetControlPanel
                setDirectionView={setDirectionView}
                directionView={directionView}
                widget={widget}
                setWidget={setWidget}
            />
            <div className={styles.root}>
                <CustomSplitPane
                    className={`${styles.splitPane} ${
                        directionView === 'horizontal'
                            ? styles.horizontal
                            : styles.vertical
                    }`}
                    resizerClassName={`${styles.resizer} ${
                        directionView === 'vertical' ? styles.vertical : ''
                    }`}
                    split={directionView}
                    defaultSize={'50%'}
                    minSize={minSize}
                    maxSize={maxSize}
                    // primary={primaryPane}
                >
                    <div className={`container ${styles.paneContent}`}>
                        <CreateWidgetSettings
                            widget={widget}
                            setWidget={setWidget}
                            directionView={directionView}
                        />
                    </div>
                    <div
                        className={`container ${styles.paneContent} ${styles.panePreview}`}
                    >
                        <div className={styles.panePreviewWrap}>
                            <CreateWidgetPreview widget={widget} />
                        </div>
                    </div>
                </CustomSplitPane>
            </div>
        </>
    );
};
