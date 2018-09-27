import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import FilterLink from '../containers/FilterLink';

export default class Footer extends PureComponent {
  render() {
    return (
      <View style={styles.footer}>
        <Text>显示:</Text>
        <FilterLink filter='SHOW_ALL'>全部 </FilterLink>
        <FilterLink filter='SHOW_ACTIVE'>进行中 </FilterLink>
        <FilterLink filter='SHOW_COMPLETED'>完成 </FilterLink>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
  }
});