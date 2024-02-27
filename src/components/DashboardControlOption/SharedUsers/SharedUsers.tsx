import React from 'react';
import { SharedUserItem } from '@src/components/DashboardControlOption/SharedUsers/SharedUserItem/SharedUserItem';
import styles from './styles.module.sass';
import { useSelector } from 'react-redux';
import { selectDashboardUsers } from '@src/store/dashboardTemp/selectors';

export const SharedUsers: React.FC = () => {
    const dashboardUsers = useSelector(selectDashboardUsers());

    return (
        <div className={styles.root}>
            {dashboardUsers.map((obj, index) => (
                <SharedUserItem
                    key={index}
                    userID={obj.id}
                    userName={obj.name}
                    isShared={obj.isShared}
                    hasRight={obj.hasRight}
                />
            ))}
        </div>
    );
};
