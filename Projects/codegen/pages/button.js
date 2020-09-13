import React,{useState} from 'react';
import styled from 'styled-components';
import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live'
import Page from "../components/Page";


const editorStyle = {
    'background': '#1e1e1e',
    borderRadius: '3px'
};

const MarginBottom = styled.div`
    margin-bottom: 20px;
`;

function Button() {
    const [paddingX, setPaddingX] = useState(10);
    const [paddingY, setPaddingY] = useState(10);
    const [borderRadius, setBorderRadius] = useState(0);
    const [fontSize, setfontSize] = useState(12);
    const code = `
const Button = styled.button\`
    border-radius: ${borderRadius}px;
    border: none;
    box-shadow: none;
    color: red;
    cursor: pointer;
    padding: ${paddingY}px ${paddingX}px;
    font-size: ${fontSize}px;
    &:disabled {
        cursor: default;
    }    
    &:focus {
        outline: dashed 2px red;
    }
    
\`

render(<Button>Test</Button>)
`;
    return (
        <Page>
            <h1>Button</h1>
            Padding
            <input type="range" min="1" max="200" value={paddingX} className="slider" id="myRange" onChange={e => setPaddingX(e.target.value)}/>
            <input type="range" min="1" max="100" value={paddingY} className="slider" id="myRange" onChange={e => setPaddingY(e.target.value)}/>
            Border Radius
            <input type="range" min="0" max="20" value={borderRadius} className="slider" id="myRange" onChange={e => setBorderRadius(e.target.value)}/>
            Font Size
            <input type="range" min="0" max="50" value={fontSize} className="slider" id="myRange" onChange={e => setfontSize(e.target.value)}/>
            <LiveProvider code={code} scope={{styled}} noInline={true}>
                <MarginBottom>
                <LiveEditor style={editorStyle}/>
                </MarginBottom>
                <LiveError/>
                <LivePreview/>
            </LiveProvider>
        </Page>
    );
}

export default Button;
