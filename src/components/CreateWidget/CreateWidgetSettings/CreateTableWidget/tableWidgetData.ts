export interface ColumnItemType {
    id: string;
    content: string;
}

export interface ColumnType {
    id: string;
    name: string;
    type: 'available' | 'inUse';
    items: ColumnItemType[];
}

export const tableWidgetData: ColumnType[] = [
    {
        id: '1',
        name: 'Доступні',
        type: 'available',
        items: [
            { id: '1', content: 'Адреса' },
            { id: '2', content: 'Прийняв' },
            { id: '3', content: 'Відміна' },
            { id: '4', content: 'Повернуто' },
            { id: '5', content: 'Адреса' },
            { id: '6', content: 'Прийняв' },
            { id: '7', content: 'Відміна' },
            { id: '8', content: 'Повернуто' },
        ],
    },
    {
        id: '2',
        name: 'Задіяні',
        type: 'inUse',
        items: [
            { id: '9', content: 'Заповнено' },
            { id: '10', content: "Кур'єр" },
            { id: '11', content: 'Доставлено' },
            { id: '12', content: 'Доставлено' },
        ],
    },
];

// export const tableWidgetData = {
//     items: {
//         'task-1': { id: 'task-1', content: 'Item 1' },
//         'task-2': { id: 'task-2', content: 'Item 2' },
//         'task-3': { id: 'task-3', content: 'Item 3' },
//         'task-4': { id: 'task-4', content: 'Item 4' },
//         'task-5': { id: 'task-5', content: 'Item 5' },
//         'task-6': { id: 'task-6', content: 'Item 6' },
//         'task-7': { id: 'task-7', content: 'Item 7' },
//         'task-8': { id: 'task-8', content: 'Item 8' },
//     },
//     columns: {
//         'column-1': {
//             id: 'column-1',
//             name: 'Доступні',
//             taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
//         },
//         'column-2': {
//             id: 'column-1',
//             name: 'Задіяні',
//             taskIds: ['task-5', 'task-6', 'task-7', 'task-8'],
//         },
//     },
//     // Facilitate reordering of the columns
//     columnOrder: ['column-1', 'column-2'],
// };
