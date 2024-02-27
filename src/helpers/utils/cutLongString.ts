type CutLongStringType = (text: string, limit: number) => string;

export const cutLongString: CutLongStringType = (text, limit) => {
    text = text.trim();
    if (text.length <= limit) {
        return text;
    } else {
        text = text.slice(0, limit);
        const lastSpace = text.lastIndexOf(' ');
        if (lastSpace > 0) {
            text = text.substr(0, lastSpace);
        }
        return text + '...';
    }
};
