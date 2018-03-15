import React, { Component } from 'react';
import { Text, Image, CheckBox, View, Button, StyleSheet, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ProfileScreen } from './component/profile_screen';
import {MainScreen } from './component/main_screen';

export default StackNavigator({
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen }
});