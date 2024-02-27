import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.sass';
import { ArrowDropDownIcon, CloseIcon, SearchIcon } from '@src/components';

interface ISearchInput {
    inputClassName?: string;
    searchValue?: string;
    onChange?: (value: string) => void;
}

export const SearchInput: React.FC<ISearchInput> = props => {
    const { inputClassName, searchValue, onChange } = props;
    const { t } = useTranslation();

    const [localValue, setLocalValue] = React.useState<string>(
        searchValue ?? ''
    );

    const handleSearch = (value: string) => {
        onChange?.(value);
        setLocalValue(value);
    };

    const handleClear = () => {
        setLocalValue('');
        onChange?.('');
    };

    return (
        <div className={styles.root}>
            <input
                className={`${styles.searchInput} ${inputClassName ?? ''}`}
                type={'text'}
                value={localValue}
                placeholder={t('search.placeholder')}
                onChange={e => handleSearch(e.target.value)}
            />
            <div className={styles.searchActions}>
                {!localValue ? (
                    <button
                        title={t('search.placeholder')}
                        className={styles.searchBtn}
                    >
                        <SearchIcon />
                    </button>
                ) : (
                    <div className={styles.searchActionsWrap}>
                        <div className={'divider'} />
                        <button
                            title={t('search.down_btn')}
                            className={`${styles.actionBtn} ${styles.down}`}
                        >
                            <ArrowDropDownIcon />
                        </button>
                        <button
                            title={t('search.up_btn')}
                            className={`${styles.actionBtn} ${styles.up}`}
                        >
                            <ArrowDropDownIcon />
                        </button>
                        <button
                            title={t('search.clear_btn')}
                            onClick={handleClear}
                            className={`${styles.actionBtn} ${styles.close}`}
                        >
                            <CloseIcon />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
