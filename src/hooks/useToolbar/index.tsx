import React, { useRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import styles from './styles.module.sass';
import { t } from 'i18next';
import type Editor from 'ckeditor5-custom-build/build/ckeditor';
import { ButtonIcon, ShowMoreIcon } from '@src/components';

const ShowButton = () => (
    <ButtonIcon
        icon={<ShowMoreIcon width={20} height={20} />}
        title={t('dashboard_control_panel.show_btn')}
    />
);

const shortConfig = [0, 1, 5, 6, 10, 11, 12];

export const useToolbar = () => {
    const isFullModeRef = useRef(false);

    const isHidden = (el: HTMLElement) => {
        return el.offsetParent === null;
    };
    const getCurrentToolbar = () => {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        const toolBarNodes = document.querySelectorAll('.ck-toolbar__items');
        const [currentToolbar] = Array.from(toolBarNodes).filter(
            el => !isHidden(el as HTMLElement)
        );
        return currentToolbar
    };
    const init = (editor: Editor) => {
        isFullModeRef.current = false;

        getCurrentToolbar();

        const language = editor.config.get('language');
        if (language === 'uk') {
            translateToUkrainian();
        }

        renderVLine();
        renderShowButton();
        renderShortPanel();
    };
    const translateToUkrainian = () => {
        const toolbar = getCurrentToolbar();
        if (!toolbar) return;

        const childen = toolbar.children;
        const textAlignment = childen[7].querySelector('button');
        const fontFamily = childen[17].querySelector('button');
        const fontSize = childen[18].querySelector('button');
        const fontColor = childen[19].querySelector('button');

        const placeholderAtr = 'data-cke-tooltip-text';
        textAlignment?.setAttribute(
            placeholderAtr,
            t('widgets.text.modal.toolbar.align')
        );
        fontFamily?.setAttribute(
            placeholderAtr,
            t('widgets.text.modal.toolbar.font_family')
        );
        fontSize?.setAttribute(
            placeholderAtr,
            t('widgets.text.modal.toolbar.font_size')
        );
        fontColor?.setAttribute(
            placeholderAtr,
            t('widgets.text.modal.toolbar.font_color')
        );
    };
    const toggleDisplayMode = () => {
        const showButtonNodes = document.querySelectorAll(
            `.${styles.showButton}`
        );
        const [currentShowButtonNode] = Array.from(showButtonNodes).filter(
            el => !isHidden(el as HTMLElement)
        );
        if (!isFullModeRef.current) {
            currentShowButtonNode.className = `${styles.showButton} ${styles.buttonActive}`;
            renderFullPanel();
        } else {
            currentShowButtonNode.className = `${styles.showButton} ${styles.buttonPassive}`;
            renderShortPanel();
        }
        isFullModeRef.current = !isFullModeRef.current;
    };
    const renderShowButton = () => {
        const toolbar = getCurrentToolbar();
        if (!toolbar) return;

        const showButtonHTML = ReactDOMServer.renderToString(<ShowButton />);
        const showButtonElement = document.createElement('div');

        showButtonElement.innerHTML = showButtonHTML;
        showButtonElement.onclick = toggleDisplayMode;
        showButtonElement.className = `${styles.showButton} ${styles.buttonPassive}`;

        toolbar.insertBefore(showButtonElement, toolbar.firstChild);
    };
    const renderVLine = () => {
        const toolbar = getCurrentToolbar();
        if (!toolbar) return;

        const VLine = document.createElement('span');
        VLine.className = 'ck ck-toolbar__separator';
        toolbar.insertBefore(VLine, toolbar.firstChild);
    };
    const renderShortPanel = () => {
        const toolbar = getCurrentToolbar();
        if (!toolbar) return;

        const childElements = toolbar.children;
        for (let i = 0; i < childElements.length; i++) {
            if (!shortConfig.includes(i)) {
                const child = childElements[i] as HTMLElement;
                child.style.display = 'none';
            }
        }
    };
    const renderFullPanel = () => {
        const toolbar = getCurrentToolbar();
        if (!toolbar) return;

        const childElements = toolbar.children;
        for (let i = 0; i < childElements.length; i++) {
            if (!shortConfig.includes(i)) {
                const child = childElements[i] as HTMLElement;
                child.style.display = 'block';
            }
        }
    };
    return [init];
};
