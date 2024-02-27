Даний компонент у пропсах приймає тип кнопки 'primary' | 'transparent' | 'red'

```jsx
import React from 'react';
import {MailIcon} from '../../../../StyleGuide/Icons/Icons';
import {ButtonPrimary} from './ButtonPrimary';

<ButtonPrimary
    title={'Повідомлення'}
    type={'primary'}
    icon={<MailIcon/>}
    onClick={() => console.log('Test')}
/>
```
