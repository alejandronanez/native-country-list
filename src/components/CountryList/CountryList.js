// @flow
import React, { Component } from 'react';
import { Content, List, ListItem, Text } from 'native-base';
import type {
  CountryHashMap,
  Country
} from 'nativeCountryList/src/types/country';

type Props = {
  countries: CountryHashMap
};

export class CountryList extends Component<Props> {
  getCountryList = () => {
    const { countries } = this.props;

    return Object.entries(countries).map((continents: [string, any]) => {
      const [continent, countriesInContinent] = continents;

      const continentHeader = (
        <ListItem itemDivider>
          <Text>{continent}</Text>
        </ListItem>
      );

      const continentCountries = countriesInContinent.map(
        (country: Country, index) => (
          <ListItem keyof={index}>
            <Text>{country.name}</Text>
          </ListItem>
        )
      );

      return [continentHeader, continentCountries];
    });
  };

  render() {
    return (
      <Content>
        <List>{this.getCountryList()}</List>
      </Content>
    );
  }
}
