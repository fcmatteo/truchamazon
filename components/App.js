import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Header from './Header';
import Book from './Book';

export default class Books extends Component {
  render() {
    const url = 'https://http2.mlstatic.com/harry-potter-y-el-caliz-de-fuego-ano-4-tapa-dura-D_NQ_NP_13740-MLA20080157434_042014-F.jpg';
    return (
      <View style={styles.container}>
        <Header />
        <Book image={url} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('Books', () => Books);
