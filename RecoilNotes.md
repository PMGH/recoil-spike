# Recoil Spike

## Getting Started with Recoil

- Recoil docs: https://recoiljs.org/docs/introduction/getting-started
- Recoil sideguide (vscode extension) tutorial: https://app.sideguide.dev/recoil/tutorial/

### Atoms
Definition: a unit of state (key/value pair)

```typescript
const fontSizeState = atom({
  key: 'fontSizeState',
  default: 14,
});
```
> Note: atoms require a unique key, two atoms cannot share a key

The `useRecoilState` hook is used to read and write atoms from a component (similar to React's `useState`). This allows atom state to be shared among components.

### Selectors
Definition: derived state (pure function applied to the state to create a new piece of state)

```typescript
const fontSizeLabelState = selector({
  key: 'fontSizeLabelState',
  get: ({get}) => {
    const fontSize = get(fontSizeState);
    const unit = 'px';

    return `${fontSize}${unit}`;
  },
});
```

Selectors can be read using `useRecoilValue()`, which takes an atom or selector as an argument and returns the corresponding value


### TLDR;

If you want to setup some state create an atom for it and access it using `useRecoilState` - this can read and write state.
```typescript
type TheType = {
  name: string;
}
const someState = atom<TheType>({
  key: 'someStateUniqueKey',
  default: 'theDefaultState'
})
const [someState, setSomeState] = useRecoilState(someState)
```
If you just want to read state you can use `const someState = useRecoilValue(someState);` instead.

If you want to create derived state you can use a `selector` e.g.

```typescript
const fontSizeLabelState = selector({
  key: 'fontSizeLabelState',
  get: ({get}) => {
    const fontSize = get(fontSizeState);
    const unit = 'px';

    return `${fontSize}${unit}`;
  },
});
```
Or to filter:
```typescript
export const filteredBeersState = selector<Beer[]>({
  key: 'filteredBeersState',
  get: ({ get }) => {
    const beers: Beer[] = get(beersState);
    const searchTerm = get(beerFilterState).toLowerCase();

    return beers.length ? beers.filter((beer) => beer.name.toLowerCase().includes(searchTerm)) : [];
  }
});
```


## The GSM Spike Task

#### Pages
1. Beers index (pages/beers/index.tsx)
2. Selected Beer (pages/beers/[id].tsx)

#### Components
1. `BeersList` (includes BeerListItem)
2. `BeerSearch` - a search input that sets the search term in recoil state onChange
3. `FavouriteButton` - tried to make this generic by providing a `context` prop (e.g. Beer) but could have just called it FavouriteBeerButton to be honest
4. `Layout` - gives same page layout to all pages
5. `Navbar`

#### Getting Started with Recoil
1. I installed `recoil` as a dependency using `yarn add recoil`
2. I had to wrap the _app.tsx component in a `<RecoilRoot>` component to make recoil available throughout the app

#### Store of Recoil State
I have created a store within store/store.ts to hold all the atoms - this could be split into smaller stores but I think it makes sense to centralise atoms.

#### Beers Index Page - pages/beers/index.tsx
The beers index page checks the length of the beers in recoil state. If there are no beers then it does a `fetch` request to the PunkAPI `https://api.punkapi.com/v2/beers` endpoint to get the first page of results (25 beers) from the PunkAPI within a `useEffect`. This should be changed to handle pagination.

The beers are then rendered using the `BeersList` component.

#### Selected Beer Page - pages/beers/[id].tsx
The selected beer page pulls the ID out of the URL using next/router and checks if there is a beer in recoil state that matches that ID. If no beer is found then it makes a `fetch` request to the PunkAPI `https://api.punkapi.com/v2/beers/[id]` for that beer using the ID.

#### Filtering/Searching
Search/filtering is enabled on the Beers Index page via the `BeersSearch` and `BeersList` components.

To filter I created an `beerFilterState` atom (a string) and a `filteredBeersState` selector (probably should have called that `filteredBeersSelector`) within the store.

When the user inputs into the `BeerSearch` component the onChange triggers an update to `beerFilterState`.

I used the `get` function of the selector to filter the list of beers based on the lowercased version of the search term. This creates derived state (which I named `filteredBeersState`) from the initial beers list (`beersState`).

The flow is:
1. User inputs a search term in the `BeersSearch` component
2. Recoil `beerFilterState` is updated
3. Recoil notices that change and updates the derived `filteredBeersState`
4. `BeersList` component rerenders

#### Favouriting
I created a `FavouriteButton` component and a `useFavourites` hook to handle this. Favouriting is available on the Beers index and SelectedBeer pages.

The `FavouriteButton` accepts a `favouriteName` (the name of the key in localstorage) and `itemId` prop that allows the favouriting to be a bit more generic.

The `FavouriteButton` component uses the `isFavourite` state (boolean) and the `favourites`, `addFavouriteToLocalStorage`, and `removeFavouriteFromLocalStorage` properties returned by the `useFavourites` hook.

When the `FavouriteButton` is clicked it checks if the favourite already exists in localStorage. If it does then it runs the `removeFavouriteFromLocalStorage` function, otherwise the beer ID is added to the favourites array in localStorage by the `addFavouriteToLocalStorage` function.
