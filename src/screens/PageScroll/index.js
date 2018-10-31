import React, { PureComponent } from 'react';
import { View, ScrollView, Text, Dimensions, SectionList, Button } from 'react-native';
import PageItem from './Page';

const { width } = Dimensions.get('window');
console.log(width);
export default class PageScroll extends PureComponent {
  state = {
    pageStack: [this.props.navigation.getParam('id'), 0]
  }
  prePage = 0;
  handleScroll = (e) => {
    const { layoutMeasurement: { width }, contentOffset: { x } } = e.nativeEvent;
    const isScrollEnd = x % width === 0;
    if (!isScrollEnd) return;
    const curPageIndex = x / width;
    const prePage = this.prePage;
    const { pageStack } = this.state;
    const pageCount = pageStack.length;
    const lastPageId = pageStack[pageCount - 2] + 1;
    const _pageStack = pageStack.slice();
    let dir = 'next';
    if (prePage === curPageIndex) return;
    if (prePage > curPageIndex) {
      dir = 'pre';
    };
    if (dir === 'pre') {
      // 右滑
      _pageStack.splice(-2, 1);
    } else {
      // 左滑
      _pageStack.splice(-1, 0, lastPageId);
    }
    console.log(_pageStack);
    this.setState({
      pageStack: _pageStack,
    });
    this.prePage = curPageIndex;

  }

  renderPage = () => {
    const { pageStack } = this.state;
    return pageStack.map((item, index) => {
      if (item) {
        return <PageItem id={item} key={index} />
      }
      return <View key={index} style={{ flex: 1, width, alignItems: 'center', justifyContent: 'center' }}><Text>loading</Text></View>
    })
  }
  render() {
    return (
      <ScrollView
        removeClippedSubviews
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={this.handleScroll}
        style={{ flex: 1 }}>
        {this.renderPage()}
      </ScrollView>
    )
  }
}