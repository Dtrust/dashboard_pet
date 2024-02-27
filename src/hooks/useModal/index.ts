export const useModal = (setOpen: (open: boolean) => void) => {
    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    return [handleCancel, handleOk];
};
