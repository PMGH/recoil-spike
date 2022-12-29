import { Beer } from "../store/store.types";

type UseFavouritesProps = {
  context: Beer;
}

const useFavourites = ({ context }: UseFavouritesProps) => {
  const favouritesAsJSON = localStorage.getItem('favourites') || '[]';
  const favourites = JSON.parse(favouritesAsJSON);

  const addFavouriteToLocalStorage = () => {
    const newFavourites = [...favourites, context.id];
    localStorage.setItem('favourites', JSON.stringify(newFavourites));
  }

  const removeFavouriteFromLocalStorage = () => {
    const newFavourites = favourites.filter((favourite: number) => favourite !== context.id);
    localStorage.setItem('favourites', JSON.stringify(newFavourites));
  }

  return { favourites, addFavouriteToLocalStorage, removeFavouriteFromLocalStorage };
}

export default useFavourites;
