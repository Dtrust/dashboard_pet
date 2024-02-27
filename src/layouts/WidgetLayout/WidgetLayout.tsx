import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.sass';
import {
    ButtonIcon,
    CopyIcon,
    DeleteIcon,
    EditableTitle,
    EditIcon,
    LockIcon,
    MoveIcon,
    PopupModal,
    SettingsLinesIcon,
    ShareIcon,
    SubMenuIcon,
    WarningIcon,
} from '@src/components';
import { SelectList } from '@src/components/StyleGuide/Ui/SelectList/SelectList';
import type {
    WidgetItemType,
    WidgetType,
} from '@src/store/dashboardTemp/@types';
import { MenuLayout } from '@src/layouts';
import { useAPPDispatch } from '@src/store/store';
import { changeWidgetTitle } from '@src/store/dashboardTemp/slice';
import { useSelector } from 'react-redux';
import {
    selectIsDragging,
    selectWidgetByID,
} from '@src/store/dashboardTemp/selectors';
import { cutLongString, isPopupOpened } from '@src/helpers';
import { QuickActionModal } from '@src/components/Modals/QuickActionModal/QuickActionModal';

interface IWidgetLayout {
    widgetID: number;
    actionButtons?: React.ReactNode;
    optionsPeriod: Array<{ value: string; label: string }>;
    selectedPeriod: string;
    time: string;
    children: React.ReactNode;
    isCreatePage?: boolean;
    emptyWidget?: WidgetItemType;
    widgetTitle?: string;
    isPopupMode?: boolean;
    setIsMainGridDraggable: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WidgetLayout: React.FC<IWidgetLayout> = props => {
    const {
        widgetID,
        actionButtons,
        optionsPeriod,
        selectedPeriod,
        time,
        children,
        isCreatePage,
        widgetTitle,
        emptyWidget,
        setIsMainGridDraggable,
    } = props;

    const [popupOpen, setPopupOpen] = React.useState<boolean>(false);
    const IsDragging = useSelector(selectIsDragging());

    const { t } = useTranslation();

    const dispatch = useAPPDispatch();

    const widget = isCreatePage
        ? emptyWidget
        : useSelector(selectWidgetByID(widgetID));

    const blockClicksClass = isCreatePage ? styles.blockClicks : '';

    if (!widget) {
        return null;
    }

    const isTextWidget = widget.type === 'text';

    // Local State for change widget title
    const [editStatus, setEditStatus] = React.useState<boolean>(false);

    const [isMenuActive, setIsMenuActive] = React.useState<boolean>(false);

    const [quickActionOpen, setQuickActionOpen] =
        React.useState<boolean>(false);

    const handleMenuOpen = () => {
        setIsMenuActive(!isMenuActive);
    };

    const handleQuickActionOpen = () => {
        setQuickActionOpen(prev => !prev);
        setIsMainGridDraggable(prev => !prev);
    };

    const handleTitleChange = (isTitleClicked: boolean) => {
        if (!isTitleClicked) {
            setIsMenuActive(prev => !prev);
        }
        setEditStatus(prev => !prev);
    };

    const onChangeTitle = (value: string) => {
        dispatch(changeWidgetTitle({ id: widgetID, title: value }));
    };

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const renderWidgetTitle = (type: WidgetType) => {
        switch (type) {
            case 'counter':
                return t('widgets.types.counter');
            case 'lineChart':
                return t('widgets.types.line_chart');
            case 'pieChart':
                return t('widgets.types.pie_chart');
            case 'barChart':
                return t('widgets.types.bar_chart');
            case 'table':
                return t('widgets.types.table');
            case 'text':
                return t('widgets.types.text');
            default:
                return '';
        }
    };

    const handlePopupOpen = () => {
        if (isPopupOpened() ?? isCreatePage ?? IsDragging) return;
        setPopupOpen(true);
    };

    return (
        <>
            <div className={styles.root}>
                <div className={`${styles.wrap} ${blockClicksClass}`}>
                    <div className={styles.titleWrap}>
                        <p className={styles.widgetType}>
                            {renderWidgetTitle(widget.type)}
                        </p>
                        {editStatus ? (
                            <EditableTitle
                                className={`${styles.titleEdit} ${
                                    editStatus ? styles.inputEdit : ''
                                }`}
                                titleValue={widgetTitle ?? widget.title}
                                editStatus={editStatus}
                                setEditStatus={setEditStatus}
                                onChangeAction={onChangeTitle}
                            />
                        ) : (
                            <p
                                className={styles.title}
                                onClick={() => handleTitleChange(true)}
                                title={t('widgets.menu.edit_name')}
                            >
                                {cutLongString(widget.title, 50)}
                            </p>
                        )}
                    </div>
                    <div className={styles.actions}>
                        {widget.access ? (
                            actionButtons
                        ) : (
                            <ButtonIcon
                                icon={<LockIcon />}
                                title={t('widgets.no_access_btn')}
                            />
                        )}
                        {!isTextWidget && (
                            <ButtonIcon
                                icon={<ShareIcon />}
                                title={t('widgets.counter.share_btn')}
                                disabled={!widget.access}
                                onClick={handleQuickActionOpen}
                            />
                        )}

                        <div className={styles.menuWrap}>
                            <ButtonIcon
                                icon={<SubMenuIcon />}
                                title={t('widgets.counter.settings_btn')}
                                onClick={handleMenuOpen}
                                disabled={!widget.access}
                            />
                            {isMenuActive && (
                                <MenuLayout
                                    setIsMenuActive={setIsMenuActive}
                                    className={styles.menu}
                                >
                                    <div
                                        onClick={() => handleTitleChange(false)}
                                    >
                                        <EditIcon />
                                        <p>{t('widgets.menu.edit_name')}</p>
                                    </div>
                                    <div>
                                        <SettingsLinesIcon />
                                        <p>{t('widgets.menu.settings')}</p>
                                    </div>
                                    <div>
                                        <DeleteIcon />
                                        <p>{t('widgets.menu.delete')}</p>
                                    </div>
                                    <div>
                                        <CopyIcon />
                                        <p>{t('widgets.menu.copy')}</p>
                                    </div>
                                    <div>
                                        <MoveIcon />
                                        <p>{t('widgets.menu.move')}</p>
                                    </div>
                                </MenuLayout>
                            )}
                        </div>
                    </div>
                </div>
                <div
                    className={styles.dataContainer}
                    style={
                        isCreatePage ? { height: '256px', flex: 'unset' } : {}
                    }
                    onClick={handlePopupOpen}
                >
                    {widget.access ? (
                        children
                    ) : (
                        <div className={styles.noAccess}>
                            <WarningIcon />
                            <p>{t('widgets.no_access')}</p>
                        </div>
                    )}
                </div>
                {!isTextWidget && (
                    <div className={styles.selectWrap}>
                        <SelectList
                            options={optionsPeriod}
                            selectedValue={selectedPeriod}
                            className={styles.select}
                            isDisabled={!widget.access}
                        />
                        <p className={styles.selectTime}>{time}</p>
                    </div>
                )}
            </div>
            <PopupModal
                open={popupOpen}
                setOpen={setPopupOpen}
                widgetID={widgetID}
                setIsMainGridDraggable={setIsMainGridDraggable}
            />
            {quickActionOpen && (
                <QuickActionModal
                    setIsModalOpen={setQuickActionOpen}
                    widgetType={renderWidgetTitle(widget.type) as WidgetType}
                    widgetTitle={cutLongString(widget.title, 50)}
                    optionsPeriod={optionsPeriod}
                    selectedPeriod={selectedPeriod}
                    currentTime={time}
                    setIsMainGridDraggable={setIsMainGridDraggable}
                />
            )}
        </>
    );
};
