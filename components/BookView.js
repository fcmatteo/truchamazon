import React, { PropTypes, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToFav } from '../actions';

class BookView extends Component {
  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    id: PropTypes.string,
    addToFav: PropTypes.func,
    isAddedToFav: PropTypes.bool,
  }
  goBack = () => {
    Actions.pop();
  }
  addToFav = () => {
    this.props.addToFav(this.props.id);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bookData}>
          {
            this.props.image &&
            <Image
              style={styles.img}
              source={{ uri: this.props.image.replace('http://', 'https://') }}
            />
          }
          <View style={styles.info}>
            <Text style={styles.title} numberOfLines={2}>{this.props.title}</Text>
            <Text style={styles.description} numberOfLines={3}>
              {this.props.desc}
            </Text>
          </View>
        </View>
        { this.props.isAddedToFav &&
          <Text style={styles.isFav}>Este libro esta en tus favoritos!</Text>
        }
        <TouchableOpacity disabled={this.props.isAddedToFav} style={styles.button} onPress={this.addToFav}>
          <Text>Agregar a favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.goBack}>
          <Text>Ir atrás</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  bookData: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    flexDirection: 'row',
    alignContent: 'flex-start',
    maxHeight: 100,
    marginVertical: 2,
  },
  button: {
    padding: 5,
    marginVertical: 15,
    backgroundColor: '#7da4ec',
  },
  isFav: {
    color: 'green',
    fontWeight: 'bold',
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

// Connect recibe dos funciones:
// La primera función recibe como parámetros state y props
// `state` es el estado global de la aplicación
// `props` son las props que se le pasan al componente cuando se renderea
// Devuelve un objeto cuyas claves van a ser el nombre de las props
// los valores son el valor de su respectiva prop
// La segunda recibe algo que se llama `dispatch`
// que está en el store de Redux que creamos
// y permite despachar acciones
// Usando bindActionCreators vamos a hacer que
// cuando llame a `this.props.addToFav` se despache
// la acción que está definida en ese action creator.
const componentCreator = connect(
  (state, props) => ({
    isAddedToFav: state.favs.favs.includes(props.id),
  }),
  dispatch => bindActionCreators(
    {
      addToFav,
    },
    dispatch,
  ),
);

// `connect` me devuelve una función
// a la que le tengo que pasar el componente
// y me devuelve un componente con todo lo definido en `connect`
export default componentCreator(BookView);
