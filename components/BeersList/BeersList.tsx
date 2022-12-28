import { useRecoilState } from "recoil";
import { beersState } from "../../store/store";
import { Beer } from "../../store/store.types";
import BeerListItem from "./BeerListItem/BeerListItem";
import styles from "./BeersList.module.css";

const BeersList = () => {
  const [beers] = useRecoilState(beersState);

  return (
    <ul className={styles.beerslist}>
      {beers.map((beer: Beer) => (
        <BeerListItem key={beer.id} beer={beer} />
      ))}
    </ul>
  )
}

export default BeersList;
