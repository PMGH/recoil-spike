import { useRecoilValue } from "recoil";
import { beersState, filteredBeersState } from "../../store/store";
import { Beer } from "../../store/store.types";
import BeerListItem from "./BeerListItem/BeerListItem";
import styles from "./BeersList.module.css";

const BeersList = () => {
  const beers = useRecoilValue(beersState);
  const filteredBeers = useRecoilValue(filteredBeersState);

  return (
    <ul className={styles.beerslist}>
      {filteredBeers.map((beer: Beer) => (
        <BeerListItem key={beer.id} beer={beer} />
      ))}
    </ul>
  )
}

export default BeersList;
