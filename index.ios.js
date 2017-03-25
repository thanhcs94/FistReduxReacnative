/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './Apps/App';
import {Provider} from 'react-redux';
import configureStore from './Apps/configureStore';
const store = configureStore();
export default class Reactreduxbasic extends Component {
  render() {
    return (
        <Provider store={store}>
        <App/>
        </Provider>
    );
  }
}

AppRegistry.registerComponent('Reactreduxbasic', () => Reactreduxbasic);
