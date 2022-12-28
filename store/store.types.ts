// https://punkapi.com/documentation/v2
type Volume = {
  value: number;
  unit: string;
}

type Malt = {
  name: string;
  amount: Volume;
}

type Hop = {
  name: string;
  amount: Volume;
  add: string;
  attribute: string;
}

type Ingredients = {
  malt: Malt[];
  hops: Hop[];
  yeast: string;
}

type MashTemp = {
  duration: number;
  temp: Volume;
}

type Fermentation = {
  temp: Volume;
}

type Method = {
  mash_temp: MashTemp[];
  fermentation: Fermentation;
  twist: string;
}

export type Beer = {
  abv: number;
  attenuation_level: number;
  boil_volume: Volume;
  brewers_tips: string;
  contributed_by: string;
  description: string;
  ebc: number;
  first_brewed: string;
  food_pairing: string[];
  ibu: number;
  id: number;
  image_url: string;
  ingredients: Ingredients;
  method: Method;
  name: string;
  ph: number;
  srm: number;
  tagline: string;
  target_fg: number;
  target_og: number;
  volume: Volume;
}
