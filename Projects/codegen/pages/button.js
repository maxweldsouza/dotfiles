import React, { useState } from "react";
import styled from "styled-components";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import Page from "../components/Page";
import { ChromePicker } from "react-color";
import Head from 'next/head';

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

function Button() {
    const [paddingX, setPaddingX] = useState(10);
    const [paddingY, setPaddingY] = useState(10);
    const [borderRadius, setBorderRadius] = useState(0);
    const [fontSize, setfontSize] = useState(12);
    const [color, setcolor] = useState();
    const code = `
const Button = styled.button\`
    border-radius: ${borderRadius}px;
    border: none;
    box-shadow: none;
    background: ${color};
    color: white;
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
            <Head>
                <title>
                    Button
                </title>
            </Head>
            <h1>Button</h1>
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
                    <ChromePicker
                        color={color}
                        onChange={(c) => setcolor(c.hex)}
                    />
                </Grid>
            </MarginBottom>
            <LiveProvider code={code} scope={{ styled }} noInline={true}>
                <MarginBottom>
                    <LiveEditor style={editorStyle} />
                </MarginBottom>
                <LiveError />
                <LivePreview />
            </LiveProvider>
        </Page>
    );
}

export default Button;
