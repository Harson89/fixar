import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>Haris Hrvić</Text>
        <Text style={styles.bigblue}>Ovo je moja prva aplikacija</Text>
        <Text style={[styles.bigblue, styles.red]}>FIXAR</Text>
        <Text style={[styles.red, styles.bigblue]}>Haris Hrvić</Text>
      </View>
    );
  }
}

//proba za git