import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Grid from "./Grid";
import Flexbox from "./Flexbox";

const Container = styled.div`
    height: 100%;
    background: #ddd;
    width: 100%;
    min-height: 100vh;
    padding-top: 100px;
`;
const NavItem = styled.div`
    height: 60px;
    width: 100%;
    display: block;
    line-height: 60px;
    padding: 0 30px;
`;

function Sidebar(props) {
    return (
        <Container>
            <Flexbox>
                <NavItem>
                    <Link href={"/"}>Home</Link>
                </NavItem>
                <NavItem>
                    <Link href={"/button"}>Button</Link>
                </NavItem>
            </Flexbox>
        </Container>
    );
}

export default Sidebar;
