import React, { Fragment, useState, useEffect } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import FavoritesService from '../../../services/favorites';

const Favorite = (props) => {
  const [stateFavor, setStateFavor] = useState(props.state_favor);

  useEffect(() => {
    setStateFavor(props.state_favor);
  }, [props.state_favor]);

  let FavoredButton;
  
  if (stateFavor) {
    FavoredButton = <FaHeart size='25px' className='has-text-white' onClick={() => disfavor()} />
  } else {
    FavoredButton = <FaRegHeart size='25px' className='has-text-white' onClick={() => favor()} />
  }

  async function disfavor() {
    await FavoritesService.delete(props.kind, props.id);
    setStateFavor(false);
  }

  async function favor() {
    await FavoritesService.create(props.kind, props.id);
    setStateFavor(true);
  }

  return (
    <Fragment>
      {FavoredButton}
    </Fragment>
  );
}
export default Favorite;