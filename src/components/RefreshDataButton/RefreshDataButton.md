Компонент оновлення дашборду. У пропсах приймає тип оновлення "default" | "autoRefresh" | "sever" 
Має модальне вікно із вибором періоду автоматичного оновлення Modals/RefreshButtonModal

```jsx
import React from 'react';
import { RefreshDataButton } from './RefreshDataButton';

<div>
<RefreshDataButton dataStatus={'default'} />
<RefreshDataButton dataStatus={'autoRefresh'} />
<RefreshDataButton dataStatus={'server'} />
</div>
```
