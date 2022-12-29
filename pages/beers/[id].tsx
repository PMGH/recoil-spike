import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import FavouriteButton from "../../components/FavouriteButton/FavouriteButton";
import useFavourites from "../../hooks/useFavourites";
import { beersState } from "../../store/store";
import { Beer } from "../../store/store.types";

const BeerPage = () => {
  const router = useRouter();
  const { id } = router.query;
  let beers = useRecoilState(beersState);

  // Need to handle page refreshes - if user refreshes page, the beersState will be empty

  const beer: Beer | undefined = beers[0].find((beer: Beer) => String(beer.id) === id);

  console.log({ id, router, beers, beer });

  const beerDetails = (beer: Beer) => (
    <>
      <h2>Name: {beer.name}</h2>
      <p>Description: {beer.description}</p>
      <FavouriteButton context={beer} />
    </>
  )

  return (
    <div>
      <h1>Beer Page</h1>
      {beer && beerDetails(beer)}
    </div>
  )
}

export default BeerPage;
