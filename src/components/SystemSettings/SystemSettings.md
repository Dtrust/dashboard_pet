# Меню налаштувань інтерфейсу

Даний компонент рендериться у модальному окні (Layouts/Modal) та являэ собою меню налаштувань интерфейсу. Компоненти даного меню відокремлені у відповідні компоненти (./LangSettings, ./ThemeSettings, ./AccessSettings, ./WidgetSettings). Дані компоненти використовують загальні стилі прописані у ./styles.module.sass  

```jsx
import React from 'react';
import {SystemSettings} from './SystemSettings';

<SystemSettings/>
```
