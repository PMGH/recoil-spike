export interface UseFavouritesProps {
  favouriteName: string;
  itemId: number;
}

const useFavourites = ({ favouriteName, itemId }: UseFavouritesProps) => {
  const favouritesAsJSON = localStorage.getItem(favouriteName) || '[]';
  const favourites = JSON.parse(favouritesAsJSON);

  const addFavouriteToLocalStorage = () => {
    const newFavourites = [...favourites, itemId];
    localStorage.setItem(favouriteName, JSON.stringify(newFavourites));
  }

  const removeFavouriteFromLocalStorage = () => {
    const newFavourites = favourites.filter((favourite: number) => favourite !== itemId);
    localStorage.setItem(favouriteName, JSON.stringify(newFavourites));
  }

  return { favourites, addFavouriteToLocalStorage, removeFavouriteFromLocalStorage };
}

export default useFavourites;
