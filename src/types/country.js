// @flow
type Currency = {
  code: string,
  name: string,
  symbol: string
};

type Language = {
  iso639_1: string,
  iso639_2: string,
  name: string,
  nativeName: string
};

type Translations = {
  [key: string]: string
};

type RegionalBlock = {
  acronym: string,
  name: string,
  otherAcronyms: Array<any>,
  otherNames: Array<any>
};

export type Country = {
  name: string,
  topLevelDomain: Array<string>,
  alpha2Code: string,
  alpha3Code: string,
  callingCodes: Array<string>,
  capital: string,
  altSpellings: Array<string>,
  region: string,
  subregion: string,
  population: number,
  latlng: Array<number>,
  demonym: string,
  area: number,
  gini: number,
  timezones: Array<string>,
  borders: Array<string>,
  nativeName: string,
  numericCode: string,
  currencies: Array<Currency>,
  languages: Array<Language>,
  translations: Array<Translations>,
  flag: string,
  regionalBlocks: Array<RegionalBlock>
};
