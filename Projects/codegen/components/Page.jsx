import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

function Page(props) {
    return (
        <Container>
            {props.children}
        </Container>
    );
}

export default Page;
