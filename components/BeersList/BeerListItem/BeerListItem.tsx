import Link from "next/link";
import { BeerListItemProps } from "./BeerListItem.types";
import styles from "./BeerListItem.module.css";
import FavouriteButton from "../../FavouriteButton/FavouriteButton";

const BeerListItem = ({ beer }: BeerListItemProps) => (
  <li className={styles.beerlistitem}>
    <Link href={`/beers/${beer.id}`} className={styles.beerlistitemlink}>{beer.id}: {beer.name}</Link>
    <FavouriteButton favouriteName="favourite_beers" itemId={beer.id} />
  </li>
)

export default BeerListItem;
