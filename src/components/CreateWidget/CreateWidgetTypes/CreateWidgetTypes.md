Даний компонент являє собою перелік кнопок із типами віджетів.
На момент складення поточної документації компонент використовується у компонентах "<EmptyWidget/>" та "<CreateWidgetControlPanel/>"

interface ICreateWidgetTypes {
className?: string;
isCreatePage?: boolean;
currentWidgetType?: WidgetType;
onChangeWidgetType?: (value: WidgetType) => void;
}

В залежності від області використання компонент може повертати перелік <Link> (якщо використовується у <EmptyWidget/>), або перелік звичайних <button> (якщо використовується на сторінці створення віджету)

```jsx
import React from 'react';
import {CreateWidgetTypes} from './CreateWidgetTypes';

<CreateWidgetTypes/>
```

