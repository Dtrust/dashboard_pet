import React from 'react';

export const useOutsideClick = (
    ref: React.RefObject<HTMLElement>,
    setState: React.Dispatch<React.SetStateAction<boolean>>
) => {
    React.useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setState(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, setState]);
};
