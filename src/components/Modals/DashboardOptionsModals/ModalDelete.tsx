import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    AddUserIcon,
    ButtonPrimary,
    CancelIcon,
    DeleteIcon,
    WarningIcon,
} from '@src/components';
import { ModalLayout } from '@src/layouts';
import styles from '../styles.module.sass';
import type { IOptionsModal } from '@src/components/Modals/DashboardOptionsModals/@types';

export const ModalDelete: React.FC<IOptionsModal> = props => {
    const { dashboardTitle, setModalOpen, isShared } = props;

    const { t } = useTranslation();

    const handleCancel = () => {
        setModalOpen(prev => !prev);
    };

    return (
        <ModalLayout
            setIsModalOpen={setModalOpen}
            title={t('dashboard_control_panel.delete_modal.title')}
        >
            <div className={styles.root}>
                <div className={styles.wrap}>
                    <p className={styles.titlePlaceholder}>
                        {t('dashboard_control_panel.modals_placeholder')}
                    </p>
                    <p className={styles.title}>{dashboardTitle}</p>
                </div>
                {isShared && (
                    <div
                        className={`${styles.wrap} ${styles.withIcon} ${styles.shared}`}
                    >
                        <AddUserIcon />
                        <p className={styles.desc}>
                            {t(
                                'dashboard_control_panel.delete_modal.shared_msg'
                            )}
                        </p>
                    </div>
                )}
                <p className={`${styles.desc} ${styles.warning}`}>
                    {t('dashboard_control_panel.delete_modal.message')}
                </p>
                <div className={`${styles.wrap} ${styles.withIcon}`}>
                    <WarningIcon />
                    <p>{t('dashboard_control_panel.delete_modal.warning')}</p>
                </div>
                <div className={styles.btnWrap}>
                    <ButtonPrimary
                        icon={<DeleteIcon />}
                        title={t(
                            'dashboard_control_panel.delete_modal.delete_btn'
                        )}
                        type="red"
                        onClick={() => console.log('deleted')}
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
