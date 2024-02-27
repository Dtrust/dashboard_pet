import React from 'react';
import styles from '@src/components/Modals/styles.module.sass';
import { ApplyIcon, ButtonPrimary, CancelIcon } from '@src/components';
import { ModalLayout } from '@src/layouts';
import type { IRefreshButtonModal } from '@src/components/Modals/RefreshButtonModal/@types';
import { useTranslation } from 'react-i18next';
import { SelectList } from '@src/components/StyleGuide/Ui/SelectList/SelectList';

export const RefreshButtonModal: React.FC<IRefreshButtonModal> = props => {
    const { setModalOpen } = props;

    const { t } = useTranslation();

    const handleCancel = () => {
        setModalOpen(prev => !prev);
    };

    const options = [
        {
            value: '',
            label: t('dashboard_control_panel.refresh_modal.default'),
        },
        {
            value: '5min',
            label: t('dashboard_control_panel.refresh_modal.option_1'),
        },
        {
            value: '10min',
            label: t('dashboard_control_panel.refresh_modal.option_2'),
        },
        {
            value: '15min',
            label: t('dashboard_control_panel.refresh_modal.option_3'),
        },
        {
            value: '20min',
            label: t('dashboard_control_panel.refresh_modal.option_4'),
        },
    ];

    return (
        <ModalLayout
            setIsModalOpen={setModalOpen}
            title={t('dashboard_control_panel.refresh_modal.title')}
            isUseClickOutside={true}
        >
            <div className={styles.root} style={{ maxWidth: '408px' }}>
                <p className={styles.subTitle}>
                    {t('dashboard_control_panel.refresh_modal.subtitle')}
                </p>
                <div className={styles.checkWrap}>
                    <SelectList
                        selectedValue={''}
                        options={options}
                        placeholder={t(
                            'dashboard_control_panel.refresh_modal.default'
                        )}
                    />
                </div>
                <div className={styles.btnWrap}>
                    <ButtonPrimary
                        className={styles.btnUnView}
                        icon={<ApplyIcon />}
                        title={t('dashboard_control_panel.refresh_modal.btn')}
                        type="primary"
                        onClick={() => console.log('Hided')}
                    />
                    <ButtonPrimary
                        icon={<CancelIcon />}
                        title={t('dashboard_control_panel.modal_cancel_btn')}
                        type="transparent"
                        onClick={handleCancel}
                    />
                </div>
            </div>
        </ModalLayout>
    );
};
