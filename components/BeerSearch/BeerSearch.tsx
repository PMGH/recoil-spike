import { useSetRecoilState } from "recoil";
import { beerFilterState } from "../../store/store";

const BeerSearch = () => {
  const setSearchTerm = useSetRecoilState(beerFilterState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  return (
    <input type="text" placeholder="Search for a beer" onChange={handleChange} />
  )
}

export default BeerSearch;
