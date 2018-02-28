// @flow

import React, { Component } from 'react';
import { Container } from 'native-base';
import { Header } from 'nativeCountryList/src/components/Header/Header';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Header />
      </Container>
    );
  }
}
