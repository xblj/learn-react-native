import React, { PureComponent } from 'react';
import { View, ScrollView, Text, Dimensions, SectionList, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import Mock from 'mockjs';
const { width } = Dimensions.get('window');
var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|5': [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      content: '@cparagraph(200, 300)',
    },
  ],
});

class PageItem extends PureComponent {
  constructor() {
    super();
    this.state = {
      sections: [{ data: data.list }]
    }
  }
  componentWillUnmount() {
    console.log('unmount');
  }

  handleEnd = () => {
    console.log('end');
  }

  renderListHeader = () => {
    return (
      <View>
        <Text>{this.props.id}</Text>
        <Button title="去其他页"
          onPress={() => this.props.navigation.navigate('FlatList')}>
        </Button>
      </View>
    );
  }

  render() {
    const { sections } = this.state;

    console.log(sections);
    return (
      <View style={{ flex: 1, width }}>
        <SectionList
          style={{ flex: 1 }}
          ListHeaderComponent={this.renderListHeader}
          ListFooterComponent={this.renderListHeader}
          sections={sections}
          onEndReached={this.handleEnd}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => <View key={item.id}><Text>{item.content}</Text></View>}
        />
      </View>
    );
  }
}

export default withNavigation(PageItem);
