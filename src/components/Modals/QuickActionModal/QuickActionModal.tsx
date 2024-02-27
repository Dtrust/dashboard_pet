import React from 'react';
import { ModalLayout } from '@src/layouts';
import type { WidgetType } from '@src/store/dashboardTemp/@types';
import styles from './styles.module.sass';
import './devExtremeCustom.sass';
import {
    ApplyIcon,
    ButtonIcon,
    ButtonPrimary,
    ExcelIcon,
    InfoIcon,
    PrinterIcon,
    SearchInput,
} from '@src/components';
import { useTranslation } from 'react-i18next';
import DataGrid, {
    Column,
    Grouping,
    Scrolling,
} from 'devextreme-react/data-grid';
import { SelectList } from '@src/components/StyleGuide/Ui/SelectList/SelectList';
import { customers } from '@src/tempData/dataDevExtreme';
import ExcelJS from 'exceljs';
import { jsPDF as JsPDF } from 'jspdf';
import { saveAs } from 'file-saver-es';
import { exportDataGrid as exportDataGridExcel } from 'devextreme/excel_exporter';
import { exportDataGrid as exportDataGridPdf } from 'devextreme/pdf_exporter';

interface IQuickActionModal {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    widgetType: WidgetType;
    widgetTitle: string;
    optionsPeriod: Array<{ value: string; label: string }>;
    selectedPeriod: string;
    currentTime: string;
    setIsMainGridDraggable: React.Dispatch<React.SetStateAction<boolean>>;
}

export const QuickActionModal: React.FC<IQuickActionModal> = props => {
    const {
        setIsModalOpen,
        widgetType,
        widgetTitle,
        optionsPeriod,
        selectedPeriod,
        currentTime,
        setIsMainGridDraggable,
    } = props;

    const { t } = useTranslation();

    const dataGridRef = React.useRef<DataGrid | null>(null);

    const [searchValue, setSearchValue] = React.useState<string>('');

    const handleCloseModal = () => {
        setIsModalOpen(prev => !prev);
    };

    const handleExportToExcel = () => {
        if (dataGridRef.current) {
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('DataGrid');

            exportDataGridExcel({
                component: dataGridRef.current?.instance,
                worksheet,
                autoFilterEnabled: true,
            }).then(() => {
                workbook.xlsx.writeBuffer().then(buffer => {
                    saveAs(
                        new Blob([buffer], {
                            type: 'application/octet-stream',
                        }),
                        'DataGrid.xlsx'
                    );
                });
            });
        }
    };

    const handleExportToPdf = () => {
        if (dataGridRef.current) {
            const doc = new JsPDF();
            exportDataGridPdf({
                component: dataGridRef.current?.instance,
                jsPDFDocument: doc,
            }).then(() => {
                doc.save('DataGrid.pdf');
            });
        }
    };

    const handleSearchValueChanged = (value: string) => {
        setSearchValue(value);
    };

    return (
        <ModalLayout
            setIsModalOpen={setIsModalOpen}
            containerClassName={styles.root}
            isUseClickOutside={true}
            setIsMainGridDraggable={setIsMainGridDraggable}
        >
            <div className={styles.title}>
                <p className={styles.titleType}>{widgetType}</p>
                <p className={`${styles.titleType} ${styles.titleTxt}`}>
                    {widgetTitle}
                </p>
            </div>
            <div className={styles.panel}>
                <div className={styles.panelWrap}>
                    <InfoIcon />
                    <p className={styles.infoTxt}>
                        {t('widgets.quick_actions.info_txt')}
                    </p>
                </div>
                <div className={`${styles.panelWrap} ${styles.actionsWrap}`}>
                    <ButtonIcon
                        className={styles.actionBtn}
                        icon={<ExcelIcon />}
                        title={t('widgets.quick_actions.excel_btn')}
                        onClick={() => handleExportToExcel()}
                    />
                    <ButtonIcon
                        className={styles.actionBtn}
                        icon={<PrinterIcon />}
                        title={t('widgets.quick_actions.print_btn')}
                        onClick={() => handleExportToPdf()}
                    />
                    <SearchInput
                        inputClassName={styles.searchInput}
                        searchValue={searchValue}
                        onChange={handleSearchValueChanged}
                    />
                    <SelectList
                        className={styles.selectList}
                        options={optionsPeriod}
                        selectedValue={selectedPeriod}
                    />
                    <p className={styles.currentTime}>{currentTime}</p>
                </div>
            </div>
            <div className={styles.content}>
                <DataGrid
                    ref={dataGridRef}
                    height={540}
                    columnWidth={325}
                    dataSource={customers.filter(
                        customer =>
                            searchValue === '' ||
                            customer.CompanyName.toLowerCase().includes(
                                searchValue.toLowerCase()
                            ) ||
                            customer.Phone.toLowerCase().includes(
                                searchValue.toLowerCase()
                            ) ||
                            customer.Fax.toLowerCase().includes(
                                searchValue.toLowerCase()
                            ) ||
                            customer.City.toLowerCase().includes(
                                searchValue.toLowerCase()
                            )
                    )}
                    keyExpr="ID"
                    allowColumnReordering={true}
                    showBorders={true}
                    showRowLines={true}
                    className={styles.dataGrid}
                >
                    <Scrolling columnRenderingMode="virtual" />
                    <Grouping autoExpandAll={true} />
                    <Column dataField="CompanyName" dataType="string" />
                    <Column dataField="Phone" dataType="string" />
                    <Column dataField="Fax" dataType="string" />
                    <Column dataField="City" dataType="string" />
                </DataGrid>
            </div>
            <div className={styles.btnWrap}>
                <ButtonPrimary
                    className={styles.btnClose}
                    icon={<ApplyIcon />}
                    title={t('buttons.close')}
                    type="primary"
                    onClick={handleCloseModal}
                />
            </div>
        </ModalLayout>
    );
};
