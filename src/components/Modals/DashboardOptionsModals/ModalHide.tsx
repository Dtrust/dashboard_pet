import React from 'react';
import { useTranslation } from 'react-i18next';
import { ModalLayout } from '@src/layouts';
import styles from '@src/components/Modals/styles.module.sass';
import {
    ButtonPrimary,
    CancelIcon,
    CheckBox,
    InfoIcon,
    UnViewIcon,
} from '@src/components';
import type { IOptionsModal } from '@src/components/Modals/DashboardOptionsModals/@types';

export const ModalHide: React.FC<IOptionsModal> = props => {
    const { dashboardTitle, setModalOpen } = props;

    const { t } = useTranslation();

    // State for remember checkbox
    const [isRemember, setIsRemember] = React.useState<boolean>(false);

    const handleRemember = () => {
        setIsRemember(prev => !prev);
    };

    const handleCancel = () => {
        setModalOpen(prev => !prev);
    };

    return (
        <ModalLayout
            setIsModalOpen={setModalOpen}
            title={t('dashboard_control_panel.hide_modal.title')}
        >
            <div className={styles.root}>
                <div className={styles.wrap}>
                    <p className={styles.titlePlaceholder}>
                        {t('dashboard_control_panel.modals_placeholder')}
                    </p>
                    <p className={styles.title}>{dashboardTitle}</p>
                </div>
                <div className={styles.checkWrap}>
                    <CheckBox
                        isChecked={isRemember}
                        onChange={handleRemember}
                        label={t('dashboard_control_panel.hide_modal.check')}
                    />
                </div>
                <p className={`${styles.desc} ${styles.info}`}>
                    {t('dashboard_control_panel.hide_modal.message')}
                </p>
                <div
                    className={`${styles.wrap} ${styles.withIcon} ${styles.withExample}`}
                >
                    <InfoIcon />
                    <p>{t('dashboard_control_panel.hide_modal.warning')}</p>
                    <div className={styles.exampleIcon}>
                        <UnViewIcon />
                    </div>
                </div>
                <div className={styles.btnWrap}>
                    <ButtonPrimary
                        className={styles.btnUnView}
                        icon={<UnViewIcon />}
                        title={t('dashboard_control_panel.hide_modal.hide_btn')}
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
