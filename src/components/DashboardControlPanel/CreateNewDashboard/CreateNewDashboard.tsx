import React from 'react';
import { useTranslation } from 'react-i18next';
import { ApplyIcon, ButtonPrimary, CloseIcon, PlusIcon } from '@src/components';
import styles from './styles.module.sass';
// import { useAPPDispatch } from '@src/store/store';
// import { createDashboardAsync } from '@src/store/dashboards/actions';
// import { ICreateDashboardData } from '@src/store/dashboards/@types';

export const CreateNewDashboard: React.FC = () => {
    const { t } = useTranslation();

    const [createActive, setCreateActive] = React.useState<boolean>(false);
    const [inputValue, setInputValue] = React.useState<string>('');
    const [isFocused, setIsFocused] = React.useState<boolean>(false);

    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleCreateActive = () => {
        setCreateActive(!createActive);
        setIsFocused(!isFocused);
    };

    const handleCreateDashboard = () => {
        // const data: ICreateDashboardData = {
        //     dataSourceTypeID: 0,
        //     widgetCollectionTypeID: 0,
        //     name: inputValue,
        //     cellsX: 0,
        //     cellsY: 0,
        // };
        // dispatch(createDashboardAsync(data));
    };

    return (
        <div className={styles.root}>
            {createActive ? (
                <div className={styles.inputWrap}>
                    <input
                        className={styles.input}
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        type={'text'}
                        ref={inputRef}
                        autoFocus={isFocused}
                    />
                    <div className={styles.inputActions}>
                        <button
                            title={t('buttons.save')}
                            className={styles.btn}
                            onClick={handleCreateDashboard}
                        >
                            <ApplyIcon />
                        </button>
                        <button
                            title={t('buttons.cancel')}
                            className={`${styles.btn} ${styles.cancel}`}
                            onClick={handleCreateActive}
                        >
                            <CloseIcon />
                        </button>
                    </div>
                </div>
            ) : (
                <ButtonPrimary
                    className={styles.addBtn}
                    onClick={handleCreateActive}
                    title={t('buttons.add_board')}
                    type="transparent"
                    icon={<PlusIcon />}
                />
            )}
        </div>
    );
};
