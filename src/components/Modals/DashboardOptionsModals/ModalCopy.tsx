import React from 'react';
import type { IOptionsModal } from '@src/components/Modals/DashboardOptionsModals/@types';
import { useTranslation } from 'react-i18next';
import { ModalLayout } from '@src/layouts';
import styles from '@src/components/Modals/styles.module.sass';
import { ApplyIcon, ButtonPrimary, CancelIcon } from '@src/components';

export const ModalCopy: React.FC<IOptionsModal> = props => {
    const { dashboardTitle, setModalOpen } = props;

    const { t } = useTranslation();

    const handleCancel = () => {
        setModalOpen(prev => !prev);
    };

    return (
        <ModalLayout
            setIsModalOpen={setModalOpen}
            title={t('dashboard_control_panel.modal_copy.title')}
        >
            <div className={styles.root}>
                <div className={styles.wrap}>
                    <p className={styles.titlePlaceholder}>
                        {t('dashboard_control_panel.modals_placeholder')}
                    </p>
                    <p className={styles.title}>{dashboardTitle}</p>
                </div>
                <div className={styles.checkWrap}>
                    <p className={styles.label}>
                        {t('dashboard_control_panel.modal_copy.placeholder')}
                    </p>
                    <input
                        type="text"
                        value={t(
                            'dashboard_control_panel.modal_copy.new_title',
                            { value: dashboardTitle }
                        )}
                    />
                </div>
                <div className={styles.btnWrap}>
                    <ButtonPrimary
                        className={styles.btnUnView}
                        icon={<ApplyIcon />}
                        title={t('dashboard_control_panel.modal_copy.copy_btn')}
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
