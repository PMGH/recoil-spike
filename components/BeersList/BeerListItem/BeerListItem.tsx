import Link from "next/link";
import { BeerListItemProps } from "./BeerListItem.types";
import styles from "./BeerListItem.module.css";

const BeerListItem = ({ beer }: BeerListItemProps) => (
  <li className={styles.beerlistitem}>
    <Link href={`/beers/${beer.id}`} className={styles.beerlistitemlink}>{beer.id}: {beer.name}</Link>
  </li>
)

export default BeerListItem;
