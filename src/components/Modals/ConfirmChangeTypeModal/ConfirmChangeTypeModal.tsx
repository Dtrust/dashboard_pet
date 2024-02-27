import React, { type Dispatch, type SetStateAction } from 'react';
import styles from './styles.module.sass';
import { Modal } from 'antd';
import './styles.sass';
import { CheckBox, CloseIcon, DangerButton } from '@src/components/StyleGuide';
import { useModal } from '@src/hooks';
import { t } from 'i18next';
import { Title } from './Title/Title';
import { FooterButtons } from './FooterButtons/FooterButtons';

interface IConfirmChangeTypeModalProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    onConfirm: () => void;
}

export const ConfirmChangeTypeModal: React.FC<
    IConfirmChangeTypeModalProps
> = props => {
    const { open, setOpen, onConfirm } = props;
    const [checked, setChecked] = React.useState(false);
    const [handleOk, handleCancel] = useModal(setOpen);
    const handleConfirm = () => {
        onConfirm();
        handleOk();
        if (checked) {
            localStorage.setItem('isModalTypeChangeBanned', 'true');
        }
    };

    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    };

    return (
        <Modal
            rootClassName="ConfirmModal"
            className={`${styles.modal} noDrag`}
            open={open}
            title={<Title />}
            onOk={handleOk}
            onCancel={handleCancel}
            closeIcon={<CloseIcon />}
            centered
            footer={
                <FooterButtons
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            }
        >
            <div className={styles.content}>
                <div className={styles.message}>
                    <div className={styles.dangerIcon}>
                        <DangerButton />
                    </div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: t('create_widget.confirmModal.text'),
                        }}
                    ></div>
                </div>
                <div className={styles.ban}>
                    <CheckBox
                        label={t('create_widget.confirmModal.banModal')}
                        isChecked={checked}
                        onChange={handleCheckChange as () => void}
                    />
                    <p>{}</p>
                </div>
                <div className={styles.question}>
                    <p>{t('create_widget.confirmModal.question')}</p>
                </div>
            </div>
        </Modal>
    );
};
