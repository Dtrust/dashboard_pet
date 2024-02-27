import React from 'react';
import { useTranslation } from 'react-i18next';
import { DatePicker, ConfigProvider } from 'antd';
import 'dayjs/locale/uk';
import 'dayjs/locale/en';
import enUS from 'antd/lib/locale/en_US';
import ukUA from 'antd/lib/locale/uk_UA';
import {
    ArrowIcon,
    ButtonIcon,
    ButtonPrimary,
    CalendarCloseIcon,
    CalendarIcon,
    CancelIcon,
    CheckIcon,
    TabContainer,
} from '@src/components';
import styles from './styles.module.sass';

interface ISelectDashboardPeriod {
    isCreatePage?: boolean;
    className?: string;
}

export const SelectDashboardPeriod: React.FC<
    ISelectDashboardPeriod
> = props => {
    const { isCreatePage, className } = props;

    const { RangePicker } = DatePicker;

    const { t } = useTranslation();

    // temp data
    const tabsData = [
        {
            title: t('period.month'),
            value: 'month',
        },
        {
            title: t('period.week'),
            value: 'week',
        },
        {
            title: t('period.yesterday'),
            value: 'tomorrow',
        },
        {
            title: t('period.today'),
            value: 'today',
        },
    ];

    // ToDo need check locale i18 and set current locale
    const locale = 'ua';

    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const [selectedValue, setSelectedValue] = React.useState<string>('');

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (value: string) => {
        setSelectedValue(value);
    };

    return (
        <div className={`${styles.root} ${className ?? ''}`}>
            {!isCreatePage && (
                <ButtonIcon
                    title={t('buttons.period')}
                    icon={isOpen ? <CalendarCloseIcon /> : <CalendarIcon />}
                    className={`${styles.openBtn} ${
                        isOpen ? styles.active : ''
                    }`}
                    onClick={handleOpen}
                />
            )}
            {isOpen || isCreatePage ? (
                <div className={styles.dateContainer}>
                    <TabContainer className={styles.tabContainer}>
                        {tabsData.map((obj, index) => (
                            <button
                                key={index}
                                onClick={() => handleSelect(obj.value)}
                                className={`${styles.tabBtn} ${
                                    obj.value === selectedValue
                                        ? styles.active
                                        : ''
                                }`}
                            >
                                {obj.title}
                            </button>
                        ))}
                    </TabContainer>
                    <ConfigProvider locale={locale === 'ua' ? ukUA : enUS}>
                        <RangePicker
                            className={styles.datePicker}
                            prevIcon={<ArrowIcon />}
                            nextIcon={<ArrowIcon />}
                            suffixIcon={<CalendarIcon />}
                            clearIcon={<CalendarCloseIcon />}
                            format="DD.MM.YY"
                            placeholder={[
                                t('dashboard_control_panel.date_from'),
                                t('dashboard_control_panel.date_to'),
                            ]}
                            popupClassName={styles.dropdownPicker}
                            size="large"
                            separator="-"
                            renderExtraFooter={() => (
                                <div className={styles.datePickerFooter}>
                                    <ButtonPrimary
                                        title={t('buttons.save')}
                                        onClick={() => console.log('apply')}
                                        type="primary"
                                        icon={<CheckIcon />}
                                    />
                                    <ButtonPrimary
                                        title={t('buttons.cancel')}
                                        onClick={() => console.log('cancel')}
                                        type="transparent"
                                        icon={<CancelIcon />}
                                    />
                                </div>
                            )}
                        />
                    </ConfigProvider>
                </div>
            ) : null}
        </div>
    );
};
