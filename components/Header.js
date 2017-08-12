import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import logo from '../assets/logo.jpg';

export default () => (
  <View style={styles.header}>
    <Image style={styles.logo} source={logo} />
    <Text style={styles.title}>
      Truch
      <Text style={styles.green}>Amazon</Text>
    </Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: 25,
    paddingLeft: 25,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  green: {
    color: 'green',
  },
  logo: {
    width: 125,
    height: 125,
  }
});
