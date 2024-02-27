import React from 'react';
import styles from '@src/components/Modals/styles.module.sass';
import {
    ApplyIcon,
    ButtonPrimary,
    CancelIcon,
    InfoIcon,
    SearchInput,
    WarningIcon,
} from '@src/components';
import { ModalLayout } from '@src/layouts';
import { useTranslation } from 'react-i18next';
import type { IOptionsModal } from '@src/components/Modals/DashboardOptionsModals/@types';
import { SharedUsers } from '@src/components/DashboardControlOption/SharedUsers/SharedUsers';
import { useSelector } from 'react-redux';
import { selectNoRightsUsersLength } from '@src/store/dashboardTemp/selectors';

export const ModalShare: React.FC<IOptionsModal> = props => {
    const { dashboardTitle, setModalOpen } = props;

    const { t } = useTranslation();

    const noRightsUsersLength = useSelector(selectNoRightsUsersLength());

    const handleCancel = () => {
        setModalOpen(prev => !prev);
    };

    return (
        <ModalLayout
            setIsModalOpen={setModalOpen}
            title={t('dashboard_control_panel.share_modal.title')}
            titleSpan={dashboardTitle}
        >
            <div className={`${styles.root} ${styles.noWidth}`}>
                <div className={styles.wrap}>
                    <p className={styles.msg}>
                        {t('dashboard_control_panel.share_modal.message')}
                    </p>
                    <div className={styles.inner}>
                        <div className={styles.innerSearch}>
                            <SearchInput />
                            <SharedUsers />
                        </div>
                    </div>
                </div>
                <div className={`${styles.wrap} ${styles.withIcon}`}>
                    {noRightsUsersLength > 0 ? (
                        <>
                            <WarningIcon />
                            <p className={styles.shareWarning}>
                                {t(
                                    'dashboard_control_panel.share_modal.warning_error'
                                )}
                            </p>
                        </>
                    ) : (
                        <>
                            <InfoIcon />
                            <p className={styles.shareWarning}>
                                <span>
                                    {t(
                                        'dashboard_control_panel.share_modal.warning_title'
                                    )}
                                </span>
                                {t(
                                    'dashboard_control_panel.share_modal.warning_msg'
                                )}
                            </p>
                        </>
                    )}
                </div>
                <div className={styles.btnWrap}>
                    <ButtonPrimary
                        className={styles.btnUnView}
                        icon={<ApplyIcon />}
                        title={
                            noRightsUsersLength > 0
                                ? t(
                                      'dashboard_control_panel.share_modal.share_btn_error'
                                  )
                                : t(
                                      'dashboard_control_panel.share_modal.share_btn'
                                  )
                        }
                        type="primary"
                        onClick={() => console.log('Shared')}
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
