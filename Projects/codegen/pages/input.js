import React, { useState } from "react";
import styled from "styled-components";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import Page from "../components/Page";
import Head from 'next/head';
import ColorPicker from "../components/ColorPicker";

const editorStyle = {
    background: "#1e1e1e",
    borderRadius: "3px",
};

const MarginBottom = styled.div`
    margin-bottom: ${({margin}) => margin || 15}px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 15px;
`;

function Input() {
    const [paddingX, setPaddingX] = useState(10);
    const [paddingY, setPaddingY] = useState(10);
    const [borderRadius, setBorderRadius] = useState(0);
    const [fontSize, setfontSize] = useState(12);
    const [color, setcolor] = useState("#000");
    const [fontColor, setfontColor] = useState('#fff');
    const code = `
const Text = styled.input\`
    border-radius: ${borderRadius}px;
    border: none;
    box-shadow: none;
    background: ${color};
    color: ${fontColor};
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

render(<Text type="text" value="Test"></Text>)
`;
    return (
        <Page>
            <Head>
                <title>
                    Input
                </title>
            </Head>
            <h1>Input</h1>
            <MarginBottom margin={50}>
                <Grid>
                    Padding X
                    <input
                        type="range"
                        min="1"
                        max="200"
                        value={paddingX}
                        className="slider"
                        onChange={(e) => setPaddingX(e.target.value)}
                    />
                    Padding Y
                    <input
                        type="range"
                        min="1"
                        max="100"
                        value={paddingY}
                        className="slider"
                        onChange={(e) => setPaddingY(e.target.value)}
                    />
                    Border Radius
                    <input
                        type="range"
                        min="0"
                        max="20"
                        value={borderRadius}
                        className="slider"
                        onChange={(e) => setBorderRadius(e.target.value)}
                    />
                    Font Size
                    <input
                        type="range"
                        min="0"
                        max="50"
                        value={fontSize}
                        className="slider"
                        onChange={(e) => setfontSize(e.target.value)}
                    />
                    Background
                    <ColorPicker color={color} onChange={(c) => setcolor(c)} />
                    Font Color
                    <ColorPicker color={fontColor} onChange={(c) => setfontColor(c)} />
                </Grid>
            </MarginBottom>
            <LiveProvider code={code} scope={{ styled }} noInline={true}>
                <MarginBottom>
                    <LiveEditor style={editorStyle} />
                </MarginBottom>
                <LiveError />
                <LivePreview />
            </LiveProvider>
            <div>
                References:
                <a href={"https://react.semantic-ui.com/elements/button/"}>Semantic UI</a>
            </div>
        </Page>
    );
}

export default Input;
