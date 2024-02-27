import { setIsDragging } from '@src/store/dashboardTemp/slice';
import { useAPPDispatch } from '@src/store/store';

export const useDraggable = () => {
    const dispatch = useAPPDispatch();

    const handleDragStart = () => {
        dispatch(setIsDragging(true));
    };

    const handleDragStop = () => {
        setTimeout(() => {
            dispatch(setIsDragging(false));
        }, 0)
    };
    return [handleDragStart, handleDragStop];
}
