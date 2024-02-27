import React, { type Dispatch, type SetStateAction } from 'react';
import styles from './styles.module.sass';
import { Modal } from 'antd';
import './styles.sass';
import { CloseIcon } from '@src/components/StyleGuide';
import { useModal } from '@src/hooks';
import { Title } from './Title/Title';
import { FooterButtons } from './FooterButtons/FooterButtons';
import { WidgetMatcher } from '@src/components/Widgets';
import { selectWidgetByID } from '@src/store/dashboardTemp/selectors';
import { useSelector } from 'react-redux';
import { type IWidget } from '@src/components/Widgets/@types';

interface IPopupModalProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    widgetID: number;
    setIsMainGridDraggable: Dispatch<SetStateAction<boolean>>; //This prop for disable draggable if modal with data open
}

export const PopupModal: React.FC<IPopupModalProps> = props => {
    const { widgetID, open, setOpen, setIsMainGridDraggable } = props;
    const [handleOk, handleCancel] = useModal(setOpen);
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const widget = {
        ...useSelector(selectWidgetByID(widgetID)),
        isCreatePage: false,
    } as IWidget;

    return (
        <Modal
            rootClassName="PopupModal"
            className={`${styles.modal} noDrag`}
            open={open}
            title={<Title title={widget.title} />}
            onOk={handleOk}
            onCancel={handleCancel}
            closeIcon={<CloseIcon />}
            centered
            footer={<FooterButtons onCancel={handleCancel} />}
        >
            <div className={styles.content}>
                <WidgetMatcher
                    {...widget}
                    setIsMainGridDraggable={setIsMainGridDraggable}
                />
            </div>
        </Modal>
    );
};
