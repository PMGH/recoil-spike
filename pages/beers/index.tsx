import { useEffect } from "react";

const BeersPage = () => {
  useEffect(() => {
    // https://punkapi.com/documentation/v2
    // limited to 25 items by default (without pagination)
    fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then(beers => {
        console.log({ beers });
      })
      .catch(error => {
        console.error({ error });
      });
  });

  return (
    <div>
      Beers Page
    </div>
  )
}

export default BeersPage;
