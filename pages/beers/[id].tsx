import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import FavouriteButton from "../../components/FavouriteButton/FavouriteButton";
import { beersState, selectedBeerState } from "../../store/store";
import { Beer } from "../../store/store.types";

const BeerPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const beers = useRecoilValue(beersState);
  const [selectedBeer, setSelectedBeer] = useRecoilState(selectedBeerState);

  useEffect(() => {
    const beerFromStore: Beer | undefined = beers.find((item: Beer) => String(item.id) === id);

    if (!beerFromStore) {
      if (id) {
        fetch(`https://api.punkapi.com/v2/beers/${id}`)
          .then(res => res.json())
          .then((brewdogBeer: Beer[]) => {
            console.log({ brewdogBeer })
            setSelectedBeer(brewdogBeer[0]); // Add beer to recoil state
          })
          .catch(error => {
            console.error({ error });
          });
      }
    } else {
      setSelectedBeer(beerFromStore);
    }
  }, [id, beers, setSelectedBeer]);

  const beerDetails = (beer: Beer) => (
    <>
      <h2>Name: {beer.name}</h2>
      <p>Description: {beer.description}</p>
      <FavouriteButton favouriteName="favourite_beers" itemId={beer.id} />
    </>
  )

  return (
    <div>
      <h1>Beer Page</h1>
      {selectedBeer && beerDetails(selectedBeer)}
    </div>
  )
}

export default BeerPage;
