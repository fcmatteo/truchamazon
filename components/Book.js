import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default Book = (props) => (
  <View style={styles.container}>
    <Image style={styles.img} source={{uri: props.image}} />
    <Text style={styles.title}>Bajo la misma estrella</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-start',
  },
  img: {
    width: 150,
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  }
});

Book.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  desc: PropTypes.string,
}
