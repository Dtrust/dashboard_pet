import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRoundedIcon } from '@src/components';
import { CellItem } from '@src/components/SelectDashboardGrid/CellItem/CellItem';
import { useOutsideClick } from '@src/hooks';
import styles from './styles.module.sass';
import { useAPPDispatch } from '@src/store/store';
import { setGridLayout } from '@src/store/dashboardTemp/slice';
import type { DashboardGridLayoutType } from '@src/store/dashboards/@types';

interface ISelectDashboardGrid {
    isDisabled?: boolean;
    cellsX: number;
    cellsY: number;
}

const MAX_COLUMN_SIZE = 4;
const MAX_ROW_SIZE = 3;

export const SelectDashboardGrid: React.FC<ISelectDashboardGrid> = props => {
    const { isDisabled, cellsX, cellsY } = props;

    const { t } = useTranslation();

    const dispatch = useAPPDispatch();

    // const gridLayout: DashboardGridLayoutType = {cols: cellsX, rows: cellsY };

    const [isActiveDropDown, setIsActiveDropDown] =
        React.useState<boolean>(false);

    const [selectedSize, setSelectedSize] =
        React.useState<DashboardGridLayoutType>({
            rows: cellsX,
            cols: cellsY,
        });
    const [highlightedSize, setHighlightedSize] =
        React.useState<DashboardGridLayoutType>({
            rows: cellsX,
            cols: cellsY,
        });

    React.useEffect(() => {
        setSelectedSize(prev => ({ ...prev, rows: cellsX, cols: cellsY }));
    }, [cellsX, cellsY]);

    const selectDropDownRef = React.useRef<HTMLDivElement>(null);

    const handleMouseEnter = (row: number, col: number) => {
        setHighlightedSize({ rows: row + 1, cols: col + 1 });
    };

    const handleDropDown = () => {
        setIsActiveDropDown(!isActiveDropDown);
    };

    const handleSetGrid = () => {
        setSelectedSize(highlightedSize);
        // Save grid template to global state
        dispatch(setGridLayout(highlightedSize));
        handleDropDown();
    };

    useOutsideClick(selectDropDownRef, setIsActiveDropDown);

    return (
        <div className={styles.root} ref={selectDropDownRef}>
            <button
                className={`${styles.btn} ${
                    isActiveDropDown ? styles.active : ''
                }`}
                title={t('dashboard_control_panel.select_grid')}
                disabled={isDisabled}
                onClick={() => handleDropDown()}
            >
                <span>
                    {selectedSize.rows > 0
                        ? `${selectedSize.rows as unknown as string}x${
                              selectedSize.cols as unknown as string
                          }`
                        : t('dashboard_control_panel.select_grid')}
                </span>
                <div
                    className={styles.btnIcon}
                    style={
                        isActiveDropDown ? { transform: 'rotate(180deg)' } : {}
                    }
                >
                    <ArrowRoundedIcon />
                </div>
            </button>
            {isActiveDropDown && (
                <div className={styles.dropdown}>
                    {[...Array(MAX_ROW_SIZE)].map((_, rowIndex) =>
                        [...Array(MAX_COLUMN_SIZE)].map((__, colIndex) => (
                            <CellItem
                                key={`${rowIndex}-${colIndex}`}
                                active={
                                    rowIndex < selectedSize.rows &&
                                    colIndex < selectedSize.cols
                                }
                                highlighted={
                                    rowIndex < highlightedSize.rows &&
                                    colIndex < highlightedSize.cols
                                }
                                onClick={handleSetGrid}
                                onMouseEnter={() =>
                                    handleMouseEnter(rowIndex, colIndex)
                                }
                            />
                        ))
                    )}
                </div>
            )}
        </div>
    );
};
