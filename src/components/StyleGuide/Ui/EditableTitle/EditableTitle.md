Даний компонент використовується для відображення та зміни переданного тексту. 
На момент складання данного опису компонет викорустовується для зміни заголовку віджетів та заголовку дашборду 

Пропси компонента
```
interface IEditableTitle {
    titleValue: string;
    className?: string;
    editStatus: boolean;
    setEditStatus: React.Dispatch<React.SetStateAction<boolean>>;
    onChangeAction: (value: string) => void;
}
```
