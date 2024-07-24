import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const OtpInput = ({ value, onChangeText, onKeyPress, index, otpRefs }) => {
  return (
    <TextInput
      style={styles.otpInput}
      value={value}
      onChangeText={(text) => onChangeText(text, index)}
      onKeyPress={(e) => onKeyPress(e, index)}
      ref={otpRefs[index]}
      maxLength={1}
      keyboardType="numeric"
    />
  );
};

const styles = StyleSheet.create({
  otpInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    fontSize: 20,
    textAlign: 'center',
    width: 40,
    height: 50,
  },
});

export default OtpInput;


