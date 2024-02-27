import type {
    WidgetType,
    WidgetItemType,
} from '@src/store/dashboardTemp/@types';
// import { t } from 'i18next';

type IEmptyWidgets = Record<WidgetType, WidgetItemType>;

export const emptyWidgets: IEmptyWidgets = {
    lineChart: {
        id: 2,
        type: 'lineChart',
        title: 'Доставка їжі',
        access: true,
        data: [
            {
                name: "Кур'єр 1",
                uv: 4000,
                pv: 2400,
                amt: 2400,
            },
            {
                name: "Кур'єр 2",
                uv: 3000,
                pv: 1398,
                amt: 2210,
            },
            {
                name: "Кур'єр 3",
                uv: 2000,
                pv: 9800,
                amt: 2290,
            },
            {
                name: "Кур'єр 4",
                uv: 2780,
                pv: 3908,
                amt: 2000,
            },
            {
                name: "Кур'єр 5",
                uv: 1890,
                pv: 4800,
                amt: 2181,
            },
        ],
    },
    counter: {
        id: new Date().getTime(),
        type: 'counter',
        title: 'Кількість записів за сьогодні',
        access: true,
    },
    pieChart: {
        id: new Date().getTime(),
        type: 'pieChart',
        title: 'Доставка їжі - Кур’єри',
        access: true,
        data: [
            { name: 'Кур’єр' + ' 1:', value: 20 },
            { name: 'Кур’єр' + ' 2:', value: 21 },
            { name: 'Кур’єр' + ' 3:', value: 59 },
        ],
    },
    barChart: {
        id: new Date().getTime(),
        type: 'barChart',
        title: 'Доставка їжі',
        access: true,
        data: [
            {
                name: "Кур'єр 1",
                uv: 4000,
                pv: 2400,
                amt: 2400,
            },
            {
                name: "Кур'єр 2",
                uv: 3000,
                pv: 1398,
                amt: 2210,
            },
            {
                name: "Кур'єр 3",
                uv: 2000,
                pv: 9800,
                amt: 2290,
            },
            {
                name: "Кур'єр 4",
                uv: 2780,
                pv: 3908,
                amt: 2000,
            },
            {
                name: "Кур'єр 5",
                uv: 1890,
                pv: 4800,
                amt: 2181,
            },
        ],
    },
    table: {
        id: new Date().getTime(),
        type: 'table',
        title: 'Доставка їжі - Кур’єри',
        access: true,
        data: [
            {
                time: '11.03.2022 12:45',
                courier: "Кур'єр" + ' 1',
                on_time: 'Вчасно',
                key: '1',
            },
            {
                time: '11.03.2022 12:45',
                courier: "Кур'єр" + ' 2',
                on_time: 'Не вчасно',
                key: '2',
            },
            {
                time: '11.03.2022 12:45',
                courier: "Кур'єр" + ' 3',
                on_time: 'Вчасно',
                key: '3',
            },
            {
                time: '11.03.2022 12:45',
                courier: "Кур'єр" + ' 4',
                on_time: 'Не вчасно',
                key: '4',
            },
            {
                time: '11.03.2022 12:45',
                courier: "Кур'єр" + ' 5',
                on_time: 'Вчасно',
                key: '5',
            },
            {
                time: '11.03.2022 12:45',
                courier: "Кур'єр" + ' 6',
                on_time: 'Не вчасно',
                key: '6',
            },
            {
                time: '11.03.2022 12:45',
                courier: "Кур'єр" + ' 1',
                on_time: 'Вчасно',
                key: '1',
            },
            {
                time: '11.03.2022 12:45',
                courier: "Кур'єр" + ' 2',
                on_time: 'Не вчасно',
                key: '2',
            },
            {
                time: '11.03.2022 12:45',
                courier: "Кур'єр" + ' 3',
                on_time: 'Вчасно',
                key: '3',
            },
            {
                time: '11.03.2022 12:45',
                courier: "Кур'єр" + ' 4',
                on_time: 'Не вчасно',
                key: '4',
            },
            {
                time: '11.03.2022 12:45',
                courier: "Кур'єр" + ' 5',
                on_time: 'Вчасно',
                key: '5',
            },
            {
                time: '11.03.2022 12:45',
                courier: "Кур'єр" + ' 6',
                on_time: 'Не вчасно',
                key: '6',
            },
            {
                time: '11.03.2022 12:45',
                courier: "Кур'єр" + ' 1',
                on_time: 'Вчасно',
                key: '1',
            },
            {
                time: '11.03.2022 12:45',
                courier: "Кур'єр" + ' 2',
                on_time: 'Не вчасно',
                key: '2',
            },
            {
                time: '11.03.2022 12:45',
                courier: "Кур'єр" + ' 3',
                on_time: 'Вчасно',
                key: '3',
            },
            {
                time: '11.03.2022 12:45',
                courier: "Кур'єр" + ' 4',
                on_time: 'Не вчасно',
                key: '4',
            },
            {
                time: '11.03.2022 12:45',
                courier: "Кур'єр" + ' 5',
                on_time: 'Вчасно',
                key: '5',
            },
            {
                time: '11.03.2022 12:45',
                courier: "Кур'єр" + ' 6',
                on_time: 'Не вчасно',
                key: '6',
            },
        ],
    },
    text: {
        id: new Date().getTime(),
        type: 'text',
        title: 'Доставка їжі - Кур’єри',
        access: true,
        data: ['<h1>Заголовок</h1>' + '<p>Введіть текст</p>'],
    },
};
