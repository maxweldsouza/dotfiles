import React, { useState, useRef } from "react";
import { ChromePicker } from "react-color";
import styled from "styled-components";
import useClickAway from "react-use/lib/useClickAway";
import { Copy } from "react-feather";

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;

const Inline = styled.span`
    display: inline-block;
    vertical-align: middle;
    line-height: 20px;
    height: 20px;
    font-size: 16px;
    margin-right: 10px;
`;

const Circle = styled(Inline)`
    border-radius: 999em;
    width: 20px;
`;

const Icon = styled(Inline)`
    width: 10px;
    height: 10px;
`;

function ColorPicker(props) {
    const [open, setopen] = useState(false);
    const ref = useRef(null);
    const color = props.color;
    useClickAway(ref, () => {
        setopen(false);
    });

    return (
        <div
            style={{
                position: "relative",
            }}
        >
            {open && (
                <Container ref={ref}>
                    <ChromePicker
                        color={color}
                        onChange={(c) => props.onChange(c.hex)}
                    />
                </Container>
            )}
            {!open && (
                <Circle
                    style={{
                        background: color,
                    }}
                    onClick={(e) => setopen(true)}
                ></Circle>
            )}
            <Inline>{color}</Inline>
            <Icon>
                <Copy stroke={color} />
            </Icon>
        </div>
    );
}

export default ColorPicker;
