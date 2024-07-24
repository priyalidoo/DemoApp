import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Toggle = () => {
  const [input, setInput] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateInput = (text) => {
    const regex = /^[A-Za-z\s]+$/;
    setIsValid(regex.test(text));
    setInput(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text"
        value={input}
        onChangeText={validateInput}
      />
      <Text style={styles.validationText}>
        {isValid ? 'Valid input' : 'Invalid input. Only letters and spaces are allowed.'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    padding: 10,
    marginBottom: 20,
  },
  validationText: {
    color: isValid ? 'green' : 'red',
  },
});

export default Toggle;

