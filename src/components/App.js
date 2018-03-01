// @flow

import React, { Component } from 'react';
import { Container } from 'native-base';
import type { CountryHashMap } from 'nativeCountryList/src/types/country';
import { getCountries } from 'nativeCountryList/src/utils/api';
import { Header } from 'nativeCountryList/src/components/Header/Header';
import { CountryList } from 'nativeCountryList/src/components/CountryList/CountryList';

type Props = {};
type State = {
  countries: CountryHashMap
};
export default class App extends Component<Props, State> {
  state: State = {
    countries: {}
  };

  async componentDidMount() {
    const result = await getCountries();
    this.setState(() => ({
      countries: result
    }));
  }

  render() {
    return (
      <Container>
        <Header />
        <CountryList countries={this.state.countries} />
      </Container>
    );
  }
}
