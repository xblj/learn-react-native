import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import { myView } from '../src/redux/reducer/myView';
import { changeData, setCurId, fetchData } from '../src/redux/actions';
class MyView extends Component {
  constructor(props) {
    super(props);
    const { pageData, fetchData: fetchPageData, setCurId: setId } = props;
    setId();
    if (!pageData) {
      fetchPageData();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isFocused, navigation, setCurId: setId } = nextProps;
    if (nextProps.isFocused) {
      setId();
    }
  }

  render() {
    const { navigation: { getParam }, pageData = {} } = this.props;
    const { requestStatus } = pageData;
    const name = getParam('name');
    const id = getParam('id');
    const loading = !requestStatus || requestStatus === 'start'
    return (
      <View>
        {
          loading ?
            <Text style={styles.txt}>加载中...</Text> :
            <View>
              <View style={styles.txt}>
                <Text>name:{name}</Text>
                <Text>id:{id}</Text>
                <Text>pageData:{pageData.data}</Text>
              </View>
              <Button title="跳转到MyView" onPress={() => this.props.navigation.navigate('MyView', { name: 'myView', id: Math.floor(Math.random() * 5 + 1) })} />
              <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
              <Button title="change" onPress={this.props.handleChangeData} />
            </View>
        }

      </View>
    );
  }
}
const mapStateToProps = ({ myView }, ownProps) => {
  // console.log(state);
  const { navigation, screenProps } = ownProps;
  const id = navigation.getParam('id');
  const pageData = myView[id];
  return { pageData };
}

const mapActionsToProps = (dispatch, ownProps) => {
  const id = ownProps.navigation.getParam('id');
  return {
    handleChangeData() {
      dispatch(changeData(id));
    },
    fetchData() {
      dispatch(fetchData(id));
    },
    setCurId() {
      dispatch(setCurId(id));
    }
  }
}
export default connect(mapStateToProps, mapActionsToProps)(withNavigationFocus(MyView));

const styles = StyleSheet.create({
  txt: {
    alignItems: 'center',
  }
});