import React, { Component } from 'react';
import { WebView } from 'react-native';
export class myWebView extends Component {
    render() {
        return (<WebView source={{ uri: 'http://192.168.2.105:9000?'+new Date() }}>

        </WebView>)
    }
} 