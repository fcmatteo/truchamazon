import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default () => (
  <View style={styles.header}>
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
    paddingBottom: 5,
    paddingLeft: 20,
    alignItems: 'center',
    backgroundColor: '#575757',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#305f30',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  green: {
    color: '#90f190'
  },
});
