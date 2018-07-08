import React, { Component } from 'react';
import { View, Button, Text, FlatList, StyleSheet } from 'react-native';
import mock from 'mockjs';

var data = mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|10': [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      content: '@cparagraph(200, 300)',
    },
  ],
});
export class TestFlatList extends Component {
  separator = () => <View style={styles.separator} />;
  renderItem = ({ item, index }) => (
    <ContentItem
      item={item}
      {...item}
      index={index}
      scrollToViewTop={this.goTo}
    />
  );
  goTo = index => {
    // this.flatList.scrollToEnd();
    this.flatList.scrollToIndex({ index: index, viewPosition: 0 });
  };
  keyExtractor = (item, index) => '' + index;
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>精选评论精选评论</Text>
        </View>
        <View style={styles.btnWrapper}>
          {data.list.map((item, index) => (
            <Button
              style={styles.btn}
              onPress={() => this.goTo(index)}
              title={'去' + item.id}
              key={item.id}
            />
          ))}
        </View>
        <FlatList
          data={data.list}
          ref={_ref => (this.flatList = _ref)}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

class ContentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowAll: false,
    };
  }
  changeShow = () =>
    this.setState({ isShowAll: !this.state.isShowAll }, () =>
      // !this.state.isShowAll && this.props.scrollToViewTop(this.props.index)
      this.props.scrollToViewTop(this.props.index)
    );
  renderContent = content => {
    const { isShowAll } = this.state;
    return (
      <Text>
        {content}
        <Text style={styles.contentBtn} onPress={this.changeShow}>
          {isShowAll ? '收起' : '查看全部'}
        </Text>
      </Text>
    );
    // if (content.length > 8000) {
    //   if (!isShowAll) content = content.slice(0, 80) + '...';
    //   return (
    //     <Text>
    //       {content}
    //       <Text style={styles.contentBtn} onPress={this.changeShow}>
    //         {isShowAll ? '收起' : '查看全部'}
    //       </Text>
    //     </Text>
    //   );
    // }
    // return content;
  };
  render() {
    const { id, content } = this.props;
    return (
      <View key={id}>
        <Text style={styles.itemHeader}>{id}</Text>
        <Text>{this.renderContent(content)}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  btnWrapper: {
    flexDirection: 'row',
    height: 50,
  },
  itemHeader: {
    fontSize: 20,
  },
  contentBtn: {
    color: '#114AA5',
  },
  separator: {
    borderStyle: 'solid',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
});
