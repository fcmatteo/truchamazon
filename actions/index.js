// Un action creator es una función
// que devuelve un action
// Un action es un objeto con type
// que puede tener más datos

export const addToFav = id => ({
  type: 'ADD_TO_FAV',
  id,
});
