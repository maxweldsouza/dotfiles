import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: ${({ columns}) => columns };
    grid-template-rows: ${({ rows}) => rows };
`;

function Grid(props) {
    return (
        <Container columns={props.columns} rows={props.rows}>
            {props.children}
        </Container>
    );
}

export default Grid;
