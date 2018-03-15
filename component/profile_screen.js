import React, { Component } from 'react';
import { Text, Image, CheckBox, View, Button, StyleSheet, TextInput } from 'react-native';
export class ProfileScreen extends Component {
  constructor() {
    super();
    this.state = { text: '🍕', isShow: true, inputText: '' };
    // setInterval(() => {
    //   this.setState(preState => {
    //     return { isShow: !preState.isShow };
    //   });
    // }, 1000);
    this.checkChange = this.checkChange.bind(this);
    this.onPressLearnMore = this.onPressLearnMore.bind(this);
  }
  checkChange() {
    this.setState({ text: '2222' });
  }
  onPressLearnMore() {
    this.setState({ text: '33333' });
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    let text = this.state.isShow ? this.state.text : '';
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
        <CheckBox onChange={this.checkChange} />
        <TextInput onChangeText={text => this.setState({ inputText: text })} style={styles.width} />
        <Text>
          {this.state.inputText
            .split('')
            .reverse()
            .join('')}
        </Text>
        <Text style={styles.red}>{text}</Text>
        <Button onPress={this.onPressLearnMore} title="Learn More" color="red" accessibilityLabel="Learn more about this purple button" />
        <Image source={pic} style={{ width: 193, height: 110 }} />
        {/* <MyComponent label="mylabe"></MyComponent> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    color: 'red'
  },
  width: {
    width: 100
  }
});