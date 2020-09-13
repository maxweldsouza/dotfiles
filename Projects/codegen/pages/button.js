import React, {Component, useEffect, useState} from 'react';
import * as Babel from '@babel/standalone'
import styled from 'styled-components';
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'
import Page from "../components/Page";


const editorStyle = {
    'background': '#1e1e1e',
    borderRadius: '3px'
};

class Button extends Component {
    render() {
        return (
            <Page>
                <h1>Button</h1>
                <LiveProvider code="<strong>Hello World!</strong>">
                    <LiveEditor style={editorStyle}/>
                    <LiveError />
                    <LivePreview />
                </LiveProvider>
            </Page>
        );
    }
}

export default Button;
