// @flow
import axios from 'axios';
import type { Country } from 'types/country';

const API = 'https://restcountries.eu/rest/v2/all';

export async function getCountries() {
  const result = await axios.get(API);

  return countriesHasher(result.data);
}

export function countriesHasher(countries: Array<Country>) {
  return countries.reduce(
    (countryHash, country) => ({
      ...countryHash,
      [country.region || 'No Region']: countryHash[country.region]
        ? [...countryHash[country.region], country]
        : [country]
    }),
    {}
  );
}
