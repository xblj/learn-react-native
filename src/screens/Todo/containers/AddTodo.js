import React, { PureComponent } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../../../redux/actions';

class AddToDo extends PureComponent {
  state = {
    value: ''
  };

  componentDidMount = () => {
    console.log(this.props);
  }

  handleChange = (value) => {
    this.setState({
      value
    });
  }

  handleSubmit = () => {
    this.props.dispatch(addTodo(this.state.value));
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <View>
        <TextInput
          value={this.state.value}
          onSubmitEditing={this.handleSubmit}
          onChangeText={this.handleChange} />
      </View>
    );
  }
}

export default connect()(AddToDo);