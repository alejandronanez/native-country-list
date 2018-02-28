// @flow

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hey there</Text>
        <Text style={styles.text}>Hey there</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100
  },
  text: {
    fontSize: 25
  }
});
