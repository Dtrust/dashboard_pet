import React from 'react';
import './styles.sass';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import '@ckeditor/ckeditor5-build-classic/build/translations/uk';
import { getCurrentLanguage } from '@src/helpers';
import { useToolbar } from '@src/hooks';

interface TextEditorProps {
    data: string;
    setData: (data: string) => void;
}
export const TextEditor: React.FC<TextEditorProps> = ({ data, setData }) => {
    const [init] = useToolbar();

    const onChange = (event: any, editor: Editor) => {
        const newData = (editor as any).getData();
        setData(newData);
    };

    const config = {
        language: getCurrentLanguage(),
    };

    return (
        <div className="textEditor">
            <CKEditor
                key={config.language}
                config={config}
                onReady={init}
                editor={Editor}
                data={data}
                onChange={onChange}
            />
        </div>
    );
};
