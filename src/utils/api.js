// @flow
import axios from 'axios';
import { type Country } from 'types/country';

const API = 'https://restcountries.eu/rest/v2/all';

export async function getCountries() {
  const countries = await axios.get(API);

  return countries;
}

function countriesHasher(countries: Array<Country>) {
  return countries.reduce((countryHash, country) => ({
    ...countryHash,
    [country.region || 'No Region']: [...countryHash[country.region], country]
  }), {});
}
