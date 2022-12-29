import { useEffect, useState } from "react";
import useFavourites from "../../hooks/useFavourites";
import { FavouriteButtonProps } from "./FavouriteButton.types";

const FavouriteButton = ({ context }: FavouriteButtonProps) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const { favourites, addFavouriteToLocalStorage, removeFavouriteFromLocalStorage } = useFavourites({context});

  useEffect(() => {
    if (favourites.includes(context.id)) {
      setIsFavourite(true);
    }
  }, [favourites, context.id])

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
