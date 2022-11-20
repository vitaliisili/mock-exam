import * as React from 'react';
import styled from "styled-components";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

const StyledTextEditor = styled.div`
  margin-top: 10px;

`

const TextEditor = ({data, setData}) => {

    const onPaste = (e) => {
            let brRegex = /\r?\n/g;
            let paste = (e.clipboardData || window.clipboardData).getData('text/plain');
            let divText = paste.split(brRegex)

            const selection = window.getSelection();
            if (!selection.rangeCount)
                return false;

            let div = document.createElement('div');
            divText.forEach(text =>
            {
                div.appendChild(document.createTextNode(text));
                div.appendChild(document.createElement("br"));
            });

            selection.deleteFromDocument();
            selection.deleteFromDocument();
            selection.getRangeAt(0).insertNode(div);

            e.preventDefault();

    }

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline','blockquote', 'code-block'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['clean']
        ],
    }

    return (
        <StyledTextEditor>
            <ReactQuill
                theme='snow'
                value={data}
                modules={modules}
                onChange={setData}
                onPaste={onPaste}
            />
        </StyledTextEditor>
    )
}

export default TextEditor