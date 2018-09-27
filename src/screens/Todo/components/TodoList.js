import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

import Todo from './Todo';

export default class TodoList extends PureComponent {
  render() {
    const { todos, onTodoClick } = this.props;
    return (
      <View>
        {
          todos.map((todo, index) => <Todo key={todo.key} {...todo} onClick={() => onTodoClick(todo.key)} />)
        }
      </View>
    );
  }
}