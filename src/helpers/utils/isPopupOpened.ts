export const isPopupOpened = () => {
    const popupNodes = document.querySelectorAll(
        '.PopupModal .ant-modal-wrap'
    );
    if (!popupNodes) return false;
    const [isOpened] = Array.from(
        popupNodes as NodeListOf<HTMLElement>
    ).filter(el => {
        return el.style.display !== 'none';
    });
    return isOpened;
};
