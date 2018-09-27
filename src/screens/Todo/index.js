import React, { PureComponent } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux'
import store from '../../redux';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

import mock from 'mockjs';

export default class TodoList extends PureComponent {
  componentDidMount = () => {
    console.log(this.props);
  }
  
  render() {
    return (
      <View>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </View>
    );
  }
}
