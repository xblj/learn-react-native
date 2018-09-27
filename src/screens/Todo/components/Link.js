import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Link extends PureComponent {
  componentDidMount = () => {
    console.log(this.props);
  }
  render() {
    const { active, children, onClick } = this.props;
    if (active) {
      return (
        <View>
          <Text>{children}</Text>
        </View>
      );
    }

    return (
      <TouchableOpacity onPress={onClick}>
        <View>
          <Text style={styles.unactive}>{children}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  unactive: {
    textDecorationLine: 'underline'
  }
})