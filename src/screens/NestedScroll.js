import React, { PureComponent } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import mock from 'mockjs';

const data1 = mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|20': [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      content: '@cparagraph(10, 50)',
    },
  ],
});
const data2 = mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|10': [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
    },
  ]
});

export default class NestedScroll extends PureComponent {
  static navigationOptions = {
    title: '嵌套滚动'
  }
  // data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7],
  // data: ['a', 'b', 'c'],
  render() {
    return (
      <ScrollView stickyHeaderIndices={[1]}>
        <ScrollView>
          {data1.list.map((item, index) =>
            <View key={index} style={styles.item}>
              <Text>{index}</Text>
            </View>)}
        </ScrollView>
        <ScrollView style={styles.innerList} horizontal>
          {data2.list.map((item, index) =>
            <View key={index} style={styles.innerItem}>
              <Text>{index}</Text>
            </View>)}
        </ScrollView>
        {data1.list.map((item, index) =>
          <View key={index} style={styles.item}>
            <Text>{index}</Text>
          </View>)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  outList: {
    flex: 1,
  },
  item: {
    height: 50,
    marginBottom: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000',
  },
  innerList: {
    backgroundColor: 'red',
    height: 30,
  },
  innerItem: {
    width: 50
  }
})