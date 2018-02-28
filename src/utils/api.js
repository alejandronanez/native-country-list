// @flow
import axios from 'axios';
import { type Country } from 'types/country';

const API = 'https://restcountries.eu/rest/v2/all';

export async function getCountries() {
  return await axios.get(API);
}

function countriesHasher(countries: Array<Country>) {
  return countries.reduce(
    (countryHash, country) => ({
      ...countryHash,
      [country.region || 'No Region']: countryHash[country.region]
        ? [...countryHash[country.region], country]
        : []
    }),
    {}
  );
}
