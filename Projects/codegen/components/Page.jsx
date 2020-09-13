import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-family: 'Source Sans Pro';
    max-width: 800px;
    margin: 100px auto;
`;

function Page(props) {
    return (
        <Container>
            {props.children}
        </Container>
    );
}

export default Page;
