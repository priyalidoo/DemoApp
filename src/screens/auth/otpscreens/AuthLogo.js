
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AuthLogo = ({ subTitle, subTitleStyleProps, itemWrapperStyleProps }) => {
  return (
    <View style={[styles.container, itemWrapperStyleProps]}>
      <Image
        source={require('../../../assests/images/authlogo.jpg')} 
        style={styles.logo}
      />
      <Text style={[styles.subTitle, subTitleStyleProps]}>{subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
   width: 100,
   height: 100,
    resizeMode: 'contain',
  },
  subTitle: {
    marginTop: 10,
    fontSize: 18,
    color: '#000', // Customize the color as needed
    textAlign: 'center',
  },
});

export default AuthLogo;
