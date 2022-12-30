export interface UseFavouritesProps {
  favouriteName: string;
  itemId: number;
}

const useFavourites = ({ favouriteName, itemId }: UseFavouritesProps) => {
  const getFavourites = () => {
    const favouritesAsJSON = localStorage.getItem(favouriteName) || '[]';
    return JSON.parse(favouritesAsJSON);
  }

  const addFavouriteToLocalStorage = () => {
    const favourites = getFavourites();
    const newFavourites = [...favourites, itemId];
    localStorage.setItem(favouriteName, JSON.stringify(newFavourites));
  }

  const removeFavouriteFromLocalStorage = () => {
    const favourites = getFavourites();
    const newFavourites = favourites.filter((favourite: number) => favourite !== itemId);
    localStorage.setItem(favouriteName, JSON.stringify(newFavourites));
  }

  return { getFavourites, addFavouriteToLocalStorage, removeFavouriteFromLocalStorage };
}

export default useFavourites;
