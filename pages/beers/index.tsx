import { useEffect } from "react";
import { useRecoilState } from "recoil";
import BeerSearch from "../../components/BeerSearch/BeerSearch";
import BeersList from "../../components/BeersList/BeersList";
import { beersState } from "../../store/store";

const BeersPage = () => {
  const [beers, setBeers] = useRecoilState(beersState);

  useEffect(() => {
    // https://punkapi.com/documentation/v2
    // limited to 25 items by default (without pagination)
    console.log("useEffect", { recoilStateBeers: beers})
    if(!beers.length) {
      fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(brewdogBeers => {
          console.log({ brewdogBeers });
          setBeers(brewdogBeers); // Add beers to recoil state
        })
        .catch(error => {
          console.error({ error });
        });
    }
  }, [beers, setBeers]);

  return (
    <div>
      <h1>Beers Index</h1>
      <BeerSearch />
      <BeersList />
    </div>
  )
}

export default BeersPage;
