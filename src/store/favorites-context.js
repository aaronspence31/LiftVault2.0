import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteProgram) => {},
  removeFavorite: (programId) => {},
  itemIsFavorite: (programId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteProgram) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteProgram);
    });
  }

  function removeFavoriteHandler(programId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(program => program.id !== programId);
    });
  }

  function itemIsFavoriteHandler(programId) {
    return userFavorites.some(program => program.id === programId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
