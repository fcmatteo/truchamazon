import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import Header from './Header';
// import Book from './Book';

export default class Books extends Component {
  render() {
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
