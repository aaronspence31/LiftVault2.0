import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import ProgramList from '../components/programs/ProgramList';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You have not added any favourite workouts yet, would you like to add some?</p>;
  } else {
    content = <ProgramList programs={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorite Workout Programs</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
