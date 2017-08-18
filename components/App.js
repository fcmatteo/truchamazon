import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';
import Header from './Header';
import Book from './Book';

export default class Books extends Component {
  render() {
    const url = 'https://http2.mlstatic.com/harry-potter-y-el-caliz-de-fuego-ano-4-tapa-dura-D_NQ_NP_13740-MLA20080157434_042014-F.jpg';
    return (
      <View style={styles.container}>
        <StatusBar translucent />
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3c3c3',
  },
});

AppRegistry.registerComponent('Books', () => Books);
