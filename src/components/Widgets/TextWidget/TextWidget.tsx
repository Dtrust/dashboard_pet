import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.sass';
import { WidgetLayout } from '@src/layouts';
import { ButtonIcon, EditIcon, TextEditWidgetModal } from '@src/components';
import { type IWidget } from '../@types';
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

export const TextWidget: React.FC<IWidget> = props => {
    const {
        id,
        isCreatePage,
        data = [''],
        title,
        type,
        setIsMainGridDraggable,
    } = props;
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();
    const openModal = () => {
        setOpen(true);
    };
    return (
        <>
            <WidgetLayout
                widgetID={id}
                optionsPeriod={options}
                selectedPeriod={'today'}
                time={'12:45'}
                isCreatePage={isCreatePage ?? false}
                setIsMainGridDraggable={setIsMainGridDraggable}
                emptyWidget={{ ...emptyWidgets[type], title }}
                actionButtons={
                    <ButtonIcon
                        onClick={openModal}
                        icon={<EditIcon width={24} height={24} />}
                        title={t('widgets.counter.edit_btn')}
                    />
                }
            >
                <div className={styles.root}>
                    <div
                        className={styles.textBlock}
                        dangerouslySetInnerHTML={{
                            __html: data[0],
                        }}
                    ></div>
                </div>
            </WidgetLayout>
            <TextEditWidgetModal open={open} setOpen={setOpen} id={id} />
        </>
    );
};
