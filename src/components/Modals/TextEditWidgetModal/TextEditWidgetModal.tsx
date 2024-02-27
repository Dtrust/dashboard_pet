import React, { useState } from 'react';
import styles from './styles.module.sass';
import { Modal } from 'antd';
import './styles.sass';
import { CloseIcon, Input } from '@src/components/StyleGuide';
import type { TextEditWidgetModalProps } from './@types';
import { FooterButtons } from './FooterButtons/FooterButtons';
import { Title } from './Title/Title';
import { TextEditor } from '@src/components';
import { useModal } from '@src/hooks';
import { t } from 'i18next';
import { selectWidgetByID } from '@src/store/dashboardTemp/selectors';
import { useSelector } from 'react-redux';
import { useAPPDispatch } from '@src/store/store';
import { setWidgetData } from '@src/store/dashboardTemp/slice';

export const emptyWidget = {
    title: '',
    data: [''],
};

export const TextEditWidgetModal: React.FC<
    TextEditWidgetModalProps
> = props => {
    const { open, setOpen, id } = props;
    const { title, data = [''] } =
        useSelector(selectWidgetByID(id)) ?? emptyWidget;

    const [editorData, setEditorData] = useState(data[0]);
    const [subjectValue, setSubjectValue] = useState('Якась тема');

    const dispatch = useAPPDispatch();
    const [handleOk, handleCancel] = useModal(setOpen);

    const onCancel = () => {
        setEditorData(data[0]);
        handleCancel();
    }

    const onSave = () => {
        handleCancel();
        dispatch(setWidgetData({
            id,
            data: [editorData],
        }))
    };
    return (
        <Modal
            width="100%"
            rootClassName="textWidgetModal"
            className={`${styles.modal} noDrag`}
            open={open}
            title={<Title title={title}></Title>}
            onOk={handleOk}
            onCancel={handleCancel}
            closeIcon={<CloseIcon />}
            centered
            footer={
                <FooterButtons onSave={onSave} onCancel={onCancel} />
            }
        >
            <div className={styles.subject}>
                <span>{t('widgets.text.modal.subject')}</span>
                <Input value={subjectValue} setInputValue={setSubjectValue} />
            </div>
            <div className={styles.textEditor}>
                <TextEditor data={editorData} setData={setEditorData} />
            </div>
        </Modal>
    );
};
