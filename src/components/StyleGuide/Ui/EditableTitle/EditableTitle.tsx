import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.sass';
import { ApplyIcon, CloseIcon } from '@src/components';

interface IEditableTitle {
    titleValue: string;
    className?: string;
    editStatus: boolean;
    setEditStatus: React.Dispatch<React.SetStateAction<boolean>>;
    onChangeAction: (value: string) => void;
}

export const EditableTitle: React.FC<IEditableTitle> = props => {
    const { titleValue, className, editStatus, setEditStatus, onChangeAction } =
        props;

    const { t } = useTranslation();

    // State for dashboard title. Title is passed from props
    const [localValue, setTitleValue] = React.useState<string>(titleValue);

    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (editStatus) {
            inputRef.current?.focus();
        }
    }, [editStatus]);

    const handleApplyEdit = () => {
        onChangeAction(localValue);
        setEditStatus(prev => !prev);
    };

    const handleCancelEdit = () => {
        setEditStatus(prev => !prev);
        setTitleValue(titleValue);
    };

    return (
        <div
            className={`${styles.root} ${className ?? ''} ${
                editStatus ? styles.inputEdit : ''
            }`}
        >
            <input
                ref={inputRef}
                className={styles.input}
                type={'text'}
                readOnly={!editStatus}
                value={localValue}
                onChange={e => setTitleValue(e.target.value)}
                style={{ width: `${localValue.length + 4}ch` }}
            />
            {editStatus && (
                <div className={styles.inputActions}>
                    <button
                        title={t('buttons.save')}
                        className={styles.btn}
                        onClick={handleApplyEdit}
                    >
                        <ApplyIcon />
                    </button>
                    <button
                        title={t('buttons.cancel')}
                        className={`${styles.btn} ${styles.cancel}`}
                        onClick={handleCancelEdit}
                    >
                        <CloseIcon />
                    </button>
                </div>
            )}
        </div>
    );
};
