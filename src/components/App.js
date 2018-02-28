// @flow

import React, { Component } from 'react';
import { Container } from 'native-base';
import { Header } from 'nativeCountryList/src/components/Header/Header';
import type { CountryHashMap } from 'nativeCountryList/src/types/country';
import { getCountries } from 'nativeCountryList/src/utils/api';

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
      </Container>
    );
  }
}
