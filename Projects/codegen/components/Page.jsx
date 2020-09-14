import React from 'react';
import styled from 'styled-components';
import Grid from "./Grid";
import Sidebar from "./Sidebar";

const Container = styled.div`
    font-family: 'Source Sans Pro';
    max-width: 700px;
    width: 100%;
    margin: 100px auto;
`;

function Page(props) {
    return (
        <Grid columns={'300px 1fr'}>
            <Sidebar/>
            <Container>
                {props.children}
            </Container>
        </Grid>
    );
}

export default Page;
