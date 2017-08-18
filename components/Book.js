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
    <View style={styles.info}>
      <Text style={styles.title} numberOfLines={2}>Harry Potter y el caliz de fuego</Text>
      <Text style={styles.description} numberOfLines={4}>
        Este es el cuarto libro de la saga Harry Potter. En esta ocasión Harry 
        Este es el cuarto libro de la saga Harry Potter. En esta ocasión Harry 
        Este es el cuarto libro de la saga Harry Potter. En esta ocasión Harry 
        Este es el cuarto libro de la saga Harry Potter. En esta ocasión Harry 
        Este es el cuarto libro de la saga Harry Potter. En esta ocasión Harry 
        Este es el cuarto libro de la saga Harry Potter. En esta ocasión Harry 
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
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  desc: PropTypes.string,
}
