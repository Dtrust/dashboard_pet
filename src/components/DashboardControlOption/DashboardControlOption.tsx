import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    AddUserIcon,
    CopyIcon,
    DeleteIcon,
    EditIcon,
    LockIcon,
    SubMenuIcon,
    UnViewIcon,
    ModalCopy,
    ModalDelete,
    ModalHide,
    ModalShare,
    EditableTitle,
} from '@src/components';
import styles from './styles.module.sass';
import { MenuLayout } from '@src/layouts';
import { useSelector } from 'react-redux';
import { selectDashboardByID, selectTempDashboard } from '@src/store/dashboards/selectors';
import { useAPPDispatch } from '@src/store/store';
import { setCurrentDashBoard } from '@src/store/dashboards/slice';
import { sharedUsersTemp } from '@src/tempData/sharedUsers';
import { Link } from 'react-router-dom';

interface IDashboardControlOption {
    dashboardID: number;
    dashboardTitle: string;
    isLocked?: boolean;
    isViewed?: boolean;
    isShared?: boolean;
    isActive: boolean;
}

export const DashboardControlOption: React.FC<
    IDashboardControlOption
> = props => {
    const {
        dashboardID,
        dashboardTitle,
        isLocked,
        isViewed,
        isShared,
        isActive,
    } = props;

    const { t } = useTranslation();

    const dispatch = useAPPDispatch() as any;

    // ToDo temporary solution Select added users from dashboard State
    // const addedUsers = useSelector(selectAddedUsers());

    // Select dashboard by ID
    const currentDashboard = useSelector(selectDashboardByID(dashboardID));
    //Select temp dashboard
    const tempDashboard = useSelector(selectTempDashboard());

    // State for open/close modal menu
    const [isMenuActive, setIsMenuActive] = React.useState<boolean>(false);

    // State for edit dashboard name
    const [editNameStatus, setEditNameStatus] = React.useState<boolean>(false);

    // State for Users Access list. Used by hover on Users Access btn
    const [accessListActive, setAccessListActive] =
        React.useState<boolean>(false);

    // State for delete dashboard modal
    const [deleteDashboardModal, setDeleteDashboardModal] =
        React.useState<boolean>(false);

    // State for hide dashboard modal
    const [hideDashboardModal, setHideDashboardModal] =
        React.useState<boolean>(false);

    // State for share dashboard modal
    const [shareDashboardModal, setShareDashboardModal] =
        React.useState<boolean>(false);

    // State for copy dashboard modal
    const [copyDashboardModal, setCopyDashboardModal] =
        React.useState<boolean>(false);

    const onSelectCurrentDashboard = () => {
        if (currentDashboard) {
            dispatch(setCurrentDashBoard({ ...currentDashboard }));
        }
    };

    const handleListActive = () => {
        setIsMenuActive(!isMenuActive);
    };

    const handleEditNameStatus = () => {
        setEditNameStatus(!editNameStatus);
        setIsMenuActive(!isMenuActive);
    };

    const handleDeleteModal = () => {
        setDeleteDashboardModal(!deleteDashboardModal);
        setIsMenuActive(!isMenuActive);
    };

    const handleHideModal = () => {
        setHideDashboardModal(!hideDashboardModal);
        setIsMenuActive(!isMenuActive);
    };

    const handleShareModal = () => {
        setShareDashboardModal(!shareDashboardModal);
        setIsMenuActive(!isMenuActive);
    };

    const handleCopyModal = () => {
        setCopyDashboardModal(!copyDashboardModal);
        setIsMenuActive(!isMenuActive);
    };
    // React.useEffect(() => {
    //     dispatch(setUsers(sharedUsersTemp));
    // }, []);
    React.useEffect(() => {
        if (tempDashboard) {
            dispatch(setCurrentDashBoard({ ...tempDashboard }));
        }
    }, [tempDashboard])

    const renderAddedUsersList = sharedUsersTemp.map((user, index) => (
        <div key={index} className={styles.accessItem}>
            {user.name}
        </div>
    ));

    return (
        <>
            <div
                className={`${styles.root} ${isActive ? styles.active : ''} ${
                    editNameStatus ? styles.inputEdit : ''
                }`}
                onClick={onSelectCurrentDashboard}
            >
                <EditableTitle
                    className={styles.title}
                    titleValue={dashboardTitle}
                    editStatus={editNameStatus}
                    setEditStatus={setEditNameStatus}
                    onChangeAction={() => console.log('Title changed')}
                />
                <div className={styles.optionsIcons}>
                    {isLocked && (
                        <button className={styles.btn}>
                            <LockIcon />
                        </button>
                    )}
                    {isViewed && (
                        <button className={styles.btn}>
                            <UnViewIcon />
                        </button>
                    )}
                    {isShared && (
                        <div
                            className={styles.accessWrap}
                            onMouseEnter={() =>
                                setAccessListActive(prev => !prev)
                            }
                            onMouseLeave={() =>
                                setAccessListActive(prev => !prev)
                            }
                        >
                            <button className={styles.btn}>
                                <AddUserIcon />
                            </button>
                            {accessListActive && (
                                <MenuLayout
                                    setIsMenuActive={setAccessListActive}
                                    className={styles.accessMenu}
                                >
                                    <div className={styles.accessList}>
                                        {renderAddedUsersList}
                                    </div>
                                    {/*<div*/}
                                    {/*    className={`${styles.btn} ${styles.accessBtn}`}*/}
                                    {/*    onClick={handleShareModal}*/}
                                    {/*>*/}
                                    {/*    <AddUserIcon />*/}
                                    {/*    <p>*/}
                                    {/*        {t(*/}
                                    {/*            'dashboard_control_panel.options.share'*/}
                                    {/*        )}*/}
                                    {/*    </p>*/}
                                    {/*</div>*/}
                                    <Link
                                        to={'/access-settings'}
                                        className={`${styles.btn} ${styles.accessBtn}`}
                                    >
                                        <AddUserIcon />
                                        <p>
                                            {t(
                                                'dashboard_control_panel.options.share'
                                            )}
                                        </p>
                                    </Link>
                                </MenuLayout>
                            )}
                        </div>
                    )}
                </div>
                <button
                    className={`${styles.btn} ${
                        isMenuActive ? styles.active : ''
                    }`}
                    onClick={handleListActive}
                    // onMouseEnter={handleListActive}
                    // onMouseLeave={handleListActive}
                >
                    <SubMenuIcon />
                </button>
                {isMenuActive && (
                    <MenuLayout setIsMenuActive={setIsMenuActive}>
                        <div onClick={handleEditNameStatus}>
                            <EditIcon />
                            <p>
                                {t('dashboard_control_panel.options.edit_name')}
                            </p>
                        </div>
                        <div onClick={handleDeleteModal}>
                            <DeleteIcon />
                            <p>{t('dashboard_control_panel.options.delete')}</p>
                        </div>
                        <div onClick={handleHideModal}>
                            <UnViewIcon />
                            <p>{t('dashboard_control_panel.options.hide')}</p>
                        </div>
                        <div onClick={handleShareModal}>
                            <AddUserIcon />
                            <p>{t('dashboard_control_panel.options.share')}</p>
                        </div>
                        <div onClick={handleCopyModal}>
                            <CopyIcon />
                            <p>{t('dashboard_control_panel.options.copy')}</p>
                        </div>
                    </MenuLayout>
                )}
            </div>
            {deleteDashboardModal && (
                <ModalDelete
                    dashboardTitle={dashboardTitle}
                    setModalOpen={setDeleteDashboardModal}
                    isShared={isShared ?? false}
                />
            )}
            {hideDashboardModal && (
                <ModalHide
                    dashboardTitle={dashboardTitle}
                    setModalOpen={setHideDashboardModal}
                />
            )}
            {shareDashboardModal && (
                <ModalShare
                    dashboardTitle={dashboardTitle}
                    setModalOpen={setShareDashboardModal}
                />
            )}
            {copyDashboardModal && (
                <ModalCopy
                    dashboardTitle={dashboardTitle}
                    setModalOpen={setCopyDashboardModal}
                />
            )}
        </>
    );
};
