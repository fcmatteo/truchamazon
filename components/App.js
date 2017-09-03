import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  FlatList,
  Text,
  View,
  TextInput,
  Switch,
} from 'react-native';
import { Stack, Scene, Router, Tabs } from 'react-native-router-flux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Book from './Book';
import BookView from './BookView';
import Favs from './Favs';
import reducer from '../reducers';
import firebase from '../config/firebase';

// El store se crea pasándole un único reducer
// a `createStore`, y se pasa como prop a `Provider`
const store = createStore(reducer);

export default class Books extends Component {
  state = {
    books: [],
    loading: true,
    lastSearch: 'javascript',
    spanish: false,
  }

  async componentDidMount() {
    try {
      // await firebase.auth().createUserWithEmailAndPassword('mail@gmail.com', 'password');
      const user = await firebase.auth().signInWithEmailAndPassword('mail@gmail.com', 'password');
      console.warn('user', user);

      // Puedo acceder desde cualquier lugar al usuario logueado con esta linea:
      // firebase.auth().currentUser;

      // Puedo actualizar los datos del usuario:
      // await user.updateProfile({ displayName: "Nombre" })

      // Enviar mail de verificación:
      // await user.sendEmailVerification()
    } catch (e) {
      console.warn('error', e);
    }
    this.search();
  }

  search = async () => {
    const term = this.state.lastSearch;
    const lang = this.state.spanish ? 'es' : 'en';
    const uri = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(term)}&langRestrict=${lang}&maxResults=40`;
    const response = await fetch(uri);
    const data = await response.json();
    this.setState({ books: data.items, loading: false });
  }

  submitSearch = (event) => {
    this.setState(
      { loading: true, lastSearch: event.nativeEvent.text },
      () => this.search(),
    );
  }

  extractKey = item => item.id;
  changeLanguage = () => this.setState({ spanish: !this.state.spanish })
  renderBook = book => (
    <Book
      title={book.item.volumeInfo.title}
      desc={book.item.volumeInfo.description}
      image={book.item.volumeInfo.imageLinks && book.item.volumeInfo.imageLinks.smallThumbnail}
      id={book.item.id}
    />
  );
  renderFooter = () => <Text>No hay más libros</Text>
  render() {
    const list = this.state.loading ? <Text>Cargando...</Text>
      : (
        <FlatList
          data={this.state.books}
          renderItem={this.renderBook}
          keyExtractor={this.extractKey}
        />
      );
    return (
      <View style={styles.container}>
        <StatusBar />
        <TextInput
          style={styles.searchBox}
          placeholder={'Ingrese el libro a buscar'}
          onSubmitEditing={this.submitSearch}
        />
        <View style={styles.langContainer}>
          <Text style={styles.langText}>Buscar en español</Text>
          <Switch value={this.state.spanish} onValueChange={this.changeLanguage} />
        </View>
        { list }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3c3c3',
  },
  searchBox: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    fontSize: 18,
    paddingVertical: 5,
  },
  langContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: 10,
  },
  langText: {
    fontSize: 20,
    marginRight: 20,
  },
  tabStyle: {
    fontSize: 20,
    marginBottom: 15,
  },
  realTabStyle: {
    backgroundColor: 'blue',
  },
});

// Provider tiene que contener toda la aplicación adentro
const App = () => (
  <Provider store={store}>
    <Router>
      <Stack key="root">
        <Tabs key="tabbar" labelStyle={styles.tabStyle} hideNavBar tabBarPosition={'bottom'} >
          <Scene tabBarLabel={'Buscar'} key="search" component={Books} title={'Buscar'} />
          <Scene key="favs" component={Favs} title={'Favoritos'} />
        </Tabs>
        <Scene key="book" component={BookView} />
      </Stack>
    </Router>
  </Provider>
);

AppRegistry.registerComponent('Books', () => App);
