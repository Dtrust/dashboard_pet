import React, { type Dispatch, type SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.sass';
import {
    ButtonIcon,
    ButtonWithIcon,
    ConfirmChangeTypeModal,
    CreateWidgetTypes,
    DeleteIcon,
    DirectionIcon,
    Input,
    ReturnIcon,
    SaveIcon,
} from '@src/components';
import { SelectList } from '@src/components/StyleGuide/Ui/SelectList/SelectList';
import type {
    WidgetItemType,
    WidgetType,
} from '@src/store/dashboardTemp/@types';
import { emptyWidgets } from '../CreateWidgetPreview/consts';
import { useAPPDispatch } from '@src/store/store';
import { addWidget } from '@src/store/dashboardTemp/slice';

const options = [
    {
        value: 'courier_control',
        label: 'Контроль кур’єрів',
    },
    {
        value: 'delivery_control',
        label: 'Контроль доставки',
    },
    {
        value: 'some_control',
        label: 'Інший сценарій',
    },
];

interface ICreateWidgetControlPanel {
    directionView: 'horizontal' | 'vertical';
    setDirectionView: (directionView: 'horizontal' | 'vertical') => void;
    widget: WidgetItemType;
    setWidget: Dispatch<SetStateAction<WidgetItemType>>;
}

export const CreateWidgetControlPanel: React.FC<
    ICreateWidgetControlPanel
> = props => {
    const { directionView, setDirectionView, widget, setWidget } = props;

    const { type, title } = widget;

    const { t } = useTranslation();

    const [openModal, setOpenModal] = React.useState(false);
    const [selectedType, setSelectedType] = React.useState<WidgetType>(type);
    // Navigation for GoBack button
    const navigate = useNavigate();

    const dispatch = useAPPDispatch();

    const handleBack = () => {
        navigate(-1);
    };

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const handleTryWidgetTypeChange = (widgetType: WidgetType) => {
        if (type === widgetType) return;

        const isModalTypeChangeBanned = localStorage.getItem(
            'isModalTypeChangeBanned'
        );
        if (!isModalTypeChangeBanned) {
            setSelectedType(widgetType);
            setOpenModal(true);
            return;
        }

        setNewWidgetType(widgetType);
    };

    const setNewWidgetType = (widgetType?: WidgetType) => {
        const newWidgetType = widgetType ?? selectedType;
        setWidget(emptyWidgets[newWidgetType]);
    };

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const setWidgetTitle = (title: string) => {
        setWidget({ ...widget, title });
    };

    const setHorizontalDirection = () => {
        setDirectionView('horizontal');
    };

    const setVerticalDirection = () => {
        setDirectionView('vertical');
    };

    const onSave = () => {
        const newWidget = {
            ...widget,
            id: new Date().getTime(),
        };
        dispatch(addWidget(newWidget));
        handleBack();
    };

    return (
        <div className={styles.root}>
            <div className={`container ${styles.content}`}>
                <div className={styles.contentWrap}>
                    <ButtonIcon
                        className={styles.btnIcon}
                        icon={<ReturnIcon />}
                        title={t('buttons.back')}
                        onClick={handleBack}
                    />
                    <div className={`divider ${styles.divider}`} />
                    <div className={`${styles.wrap} ${styles.fieldWrap}`}>
                        <span className={styles.label}>
                            {t('create_widget.labels.title')}
                        </span>
                        <Input
                            className={styles.input}
                            value={title}
                            setInputValue={
                                setWidgetTitle as Dispatch<
                                    SetStateAction<string>
                                >
                            }
                        />
                    </div>
                    <div className={`${styles.wrap} ${styles.fieldWrap}`}>
                        <span className={styles.label}>
                            {t('create_widget.labels.scenario')}
                        </span>
                        <SelectList
                            options={options}
                            selectedValue="courier_control"
                        />
                    </div>
                    <div className={styles.wrap}>
                        <span className={styles.label}>
                            {t('create_widget.labels.type')}
                        </span>
                        <CreateWidgetTypes
                            isCreatePage={true}
                            currentWidgetType={type}
                            onChangeWidgetType={handleTryWidgetTypeChange}
                        />
                    </div>
                    <div className={styles.wrap}>
                        <span className={styles.label}>
                            {t('create_widget.labels.direction')}
                        </span>
                        <div className={styles.directionWrap}>
                            <ButtonWithIcon
                                onClick={setVerticalDirection}
                                className={styles.btn}
                                isActive={directionView === 'vertical'}
                                title={t('create_widget.direction.vertical')}
                                icon={<DirectionIcon />}
                            />
                            <ButtonWithIcon
                                onClick={setHorizontalDirection}
                                className={`${styles.btn} ${styles.horizontal}`}
                                isActive={directionView === 'horizontal'}
                                title={t('create_widget.direction.horizontal')}
                                icon={<DirectionIcon />}
                            />
                        </div>
                    </div>
                </div>
                <div className={`${styles.wrap} ${styles.actions}`}>
                    <ButtonWithIcon
                        onClick={onSave}
                        className={`${styles.btn} ${styles.saveBtn}`}
                        title={t('buttons.save')}
                        icon={<SaveIcon />}
                    />
                    <div className={`divider ${styles.divider}`} />
                    <ButtonIcon
                        icon={<DeleteIcon />}
                        title={t('buttons.delete')}
                    />
                </div>
            </div>
            <ConfirmChangeTypeModal
                open={openModal}
                setOpen={setOpenModal}
                onConfirm={setNewWidgetType}
            />
        </div>
    );
};
