import React from 'react';
import styles from './styles.module.sass';
import { CheckBox, WarningIcon } from '@src/components';
import { useAPPDispatch } from '@src/store/store';
import { setShareByID } from '@src/store/dashboardTemp/slice';

interface ISharedUserItem {
    userID: number;
    userName: string;
    isShared: boolean;
    hasRight: boolean;
}

export const SharedUserItem: React.FC<ISharedUserItem> = props => {
    const { userID, userName, isShared, hasRight } = props;

    const dispatch = useAPPDispatch();

    const [isChecked, setIsChecked] = React.useState<boolean>(isShared);

    const handleChange = () => {
        setIsChecked(prev => !prev);
        dispatch(setShareByID(userID));
    };

    return (
        <div className={`${styles.root} ${!hasRight ? styles.warning : ''}`}>
            <CheckBox
                isChecked={isChecked}
                onChange={handleChange}
                label={userName}
            />
            {!hasRight && <WarningIcon />}
        </div>
    );
};
