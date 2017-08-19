import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const Book = props => (
  <View style={styles.container}>
    {
      props.image &&
      <Image
        style={styles.img}
        source={{ uri: props.image.replace('http://', 'https://') }}
      />
    }
    <View style={styles.info}>
      <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
      <Text style={styles.description} numberOfLines={3}>
        {props.desc}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    flexDirection: 'row',
    alignContent: 'flex-start',
    maxHeight: 100,
    marginVertical: 2,
  },
  img: {
    width: 70,
    height: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  info: {
    flex: 1,
    paddingLeft: 20,
  },
});

Book.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Book;
