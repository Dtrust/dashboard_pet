import { useState, useRef, useEffect, type RefObject } from 'react';

interface ResizableDivProps {
    resizableRef: RefObject<HTMLDivElement>;
    width: number;
    height: number;
}

export const useResizableDiv = (): ResizableDivProps => {
    const resizableRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<number>(200);
    const [height, setHeight] = useState<number>(200);
    const [isResizing, setIsResizing] = useState<boolean>(false);
    const [resizeStartX, setResizeStartX] = useState<number>(0);
    const [resizeStartY, setResizeStartY] = useState<number>(0);

    useEffect(() => {
        const handleMouseDown = (event: MouseEvent) => {
            event.preventDefault();
            setIsResizing(true);
            setResizeStartX(event.clientX);
            setResizeStartY(event.clientY);
        };

        const handleMouseUp = () => {
            setIsResizing(false);
        };

        const handleMouseMove = (event: MouseEvent) => {
            if (!isResizing) return;
            const newWidth = width + (event.clientX - resizeStartX);
            const newHeight = height + (event.clientY - resizeStartY);
            setWidth(newWidth);
            setHeight(newHeight);
            setResizeStartX(event.clientX);
            setResizeStartY(event.clientY);
        };

        resizableRef.current?.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            resizableRef.current?.removeEventListener(
                'mousedown',
                handleMouseDown
            );
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isResizing, height, width]);

    return { resizableRef, width, height };
};
