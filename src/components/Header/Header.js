// @flow

import React, { Component } from 'react';
import { Text } from 'react-native';
import { Header as NativeBaseHeader, Body } from 'native-base';

type Props = {};
export class Header extends Component<Props> {
  render() {
    return (
      <NativeBaseHeader>
        <Body>
          <Text>Country List</Text>
        </Body>
      </NativeBaseHeader>
    );
  }
}
