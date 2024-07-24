import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import GLOBAL_STYLES from './global_styles';

const GeneralButton = ({ buttonText, pressEvent }) => {
  return (
    <Pressable style={GLOBAL_STYLES.button} onPress={pressEvent}>
      <Text style={GLOBAL_STYLES.buttonText}>{buttonText}</Text>
    </Pressable>
  );
};

export default GeneralButton;
