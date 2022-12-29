import { useEffect, useState } from "react";
import useFavourites from "../../hooks/useFavourites";
import { FavouriteButtonProps } from "./FavouriteButton.types";

const FavouriteButton = ({ favouriteName, itemId }: FavouriteButtonProps) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const { favourites, addFavouriteToLocalStorage, removeFavouriteFromLocalStorage } = useFavourites({ favouriteName, itemId });

  useEffect(() => {
    console.log({ favourites, itemId, fave: favourites.includes(itemId) })
    favourites.includes(itemId) ? setIsFavourite(true) : setIsFavourite(false);
  }, [favourites, itemId])

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
    isFavourite ? removeFavouriteFromLocalStorage(): addFavouriteToLocalStorage();
  };

  return (
    <button type="button" onClick={toggleFavourite}>
      {isFavourite ? "💔" : "💛" }
    </button>
  );
};

export default FavouriteButton;
