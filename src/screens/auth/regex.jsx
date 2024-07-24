import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Regex = () => {
  const sampleText = "Hello, Example of Test, Match and Search in React Native! match";
  const regex = /Match/gi;


  const isMatch = regex.test(sampleText);
const match = sampleText.match(regex);

  const searchIndex = sampleText.search(regex);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sample Text: {sampleText}</Text>
      <Text style={styles.text}>Regex: /Match and Search/</Text>
      <Text style={styles.text}>Is Match: {isMatch.toString()}</Text>
      <Text style={styles.text}>Match: {match ? match[0] : 'No match'}</Text>
      <Text style={styles.text}>Search Index: {searchIndex}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
});

export default Regex;