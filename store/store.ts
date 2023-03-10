import { atom, selector } from "recoil";
import { Beer } from "./store.types";

export const beersState = atom<Beer[]>({
  key: 'beersState',
  default: []
});

export const selectedBeerState = atom<Beer>({
  key: 'selectedBeerState',
  default: undefined
});

export const beerFilterState = atom<string>({
  key: 'beerFilterState',
  default: ''
});

// Can only filter the beers in recoil state which might just be one page worth of beers (25 beers)
// Could filter in recoil state while sending a request to the API with the searchTerm so the user gets quick feedback (and might find the beer they're looking for) until the API returns the full list of filtered beers
export const filteredBeersState = selector<Beer[]>({
  key: 'filteredBeersState',
  get: ({ get }) => {
    const beers: Beer[] = get(beersState);
    const searchTerm = get(beerFilterState).toLowerCase();

    return beers.length ? beers.filter((beer) => beer.name.toLowerCase().includes(searchTerm)) : [];
  }
});
