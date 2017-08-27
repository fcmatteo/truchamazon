import { combineReducers } from 'redux';
import favs from './favs';

// Esta función es para crear un único reducer
// basado en todos los reducers que creamos
export default combineReducers({
  favs,
});
