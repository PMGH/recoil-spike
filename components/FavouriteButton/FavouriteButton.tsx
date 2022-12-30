import { useEffect, useState } from "react";
import useFavourites from "../../hooks/useFavourites";
import { FavouriteButtonProps } from "./FavouriteButton.types";
import styles from './FavouriteButton.module.css';

const FavouriteButton = ({ favouriteName, itemId }: FavouriteButtonProps) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const { getFavourites, addFavouriteToLocalStorage, removeFavouriteFromLocalStorage } = useFavourites({ favouriteName, itemId });

  useEffect(() => {
    const favourites = getFavourites();
    favourites.includes(itemId) ? setIsFavourite(true) : setIsFavourite(false);
  }, [itemId, getFavourites])

  const toggleFavourite = () => {
    const favourites = getFavourites();
    favourites.includes(itemId) ? removeFavouriteFromLocalStorage(): addFavouriteToLocalStorage();
    setIsFavourite(!isFavourite);
  };

  const isFavouriteClassName = isFavourite ? styles.favouritebutton__active : styles.favouritebutton__inactive;

  const title = isFavourite ? "Remove from favourites" : "Add to favourites";

  return (
    <button
      type="button"
      onClick={toggleFavourite}
      className={`${styles.favouritebutton} ${isFavouriteClassName}`}
      title={title}>
      {isFavourite ? "💔" : "💛" }
    </button>
  );
};

export default FavouriteButton;
