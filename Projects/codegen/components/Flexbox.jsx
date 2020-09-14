import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

function Flexbox(props) {
    return (
        <Container>
            {props.children}
        </Container>
    );
}

export default Flexbox;
