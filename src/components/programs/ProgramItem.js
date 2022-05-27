import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './ProgramItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function ProgramItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        days: props.days,
        spreadsheet: props.spreadsheet
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h2>{props.title}</h2>
          <p><b>{props.days} days/week</b></p>
          <p className={classes.spreadsheet}><b>Program Spreadsheet URL:</b> {props.spreadsheet}</p>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            <b>{itemIsFavorite ? 'Remove from Favorites' : 'Add To Favorites'}</b>
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ProgramItem;
