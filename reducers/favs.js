const initialState = { favs: [] };

// Un reducer es una función recibe estado y acción
// Y devuelve un estado nuevo.
// El reducer NUNCA debe modificar el estado que recibe
export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAV':
      if (state.favs.includes(action.id)) {
        return state;
      }
      return {
        ...state,
        favs: [...state.favs, action.id],
      };
    default:
      return state;
  }
};
