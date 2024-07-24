
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, Pressable, Alert, StyleSheet } from 'react-native';
import AuthLogo from './AuthLogo'; // Assuming AuthLogo is a custom component
import GeneralButton from './GeneralButton'; // Assuming GeneralButton is a custom component
import CustomGradientBorderView from './CustomGradientBorderView'; // Assuming CustomGradientBorderView is a custom component
import OtpInput from './OtpInput'; // Custom OTP Input component
import { GlOBAL_STYLES, COLORS, getDynamicWidth } from './styles'; // Assuming these are defined elsewhere in your project

const Otp = ({ navigation, route }) => {
  const { preferContact, contact } = route.params;
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const otpRefs = Array.from({ length: 6 }, () => useRef());

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFocusedIndex(0);
      otpRefs[0].current.focus();
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpRefs[index + 1].current.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && !otp[index]) {
      otpRefs[index - 1].current.focus();
    }
  };

  return (
    <View style={[GlOBAL_STYLES.container, styles.container]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <AuthLogo
          subTitle="Required OTP"
          subTitleStyleProps={styles.subTitleStylePropsAuth}
          itemWrapperStyleProps={styles.itemWrapperStylePropsAuth}
        />
        <Text style={styles.indicateTextStyle}>
          Please enter code sent to your {preferContact === 'mobile' ? 'phone number' : 'mail'} {contact}
        </Text>

        <View style={styles.otpWrapper}>
          {otp.map((digit, index) => (
            <OtpInput
              key={index}
              value={digit}
              onChangeText={handleOtpChange}
              onKeyPress={handleKeyPress}
              index={index}
              focusedIndex={focusedIndex}
              setFocusedIndex={setFocusedIndex}
              otpRefs={otpRefs}
            />
          ))}
        </View>

        <CustomGradientBorderView
          borderWidth={getDynamicWidth(3)}
          borderRadius={getDynamicWidth(25)}
          gradientColors={[COLORS.gradientColor2, COLORS.gradientColor1]}
          linearGradientWrapperProps={styles.linearGradientWrapperProps}
        >
          <GeneralButton
            buttonText="Proceed"
            pressEvent={() => navigation.navigate('PasswordChanged')}
          />
        </CustomGradientBorderView>
        
        <Pressable onPress={() => Alert.alert('Resend Code')}>
          <Text style={[styles.indicateTextStyle, GlOBAL_STYLES.textAlignCenter]}>
            Resend Code
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  scrollView: {
    width: '100%',
  },
  subTitleStylePropsAuth: {
    marginBottom: 20,
  },
  itemWrapperStylePropsAuth: {
    marginBottom: 30,
  },
  indicateTextStyle: {
    textAlign: 'center',
    color: COLORS.textPrimary,
    marginVertical: 10,
  },
  otpWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  linearGradientWrapperProps: {
    marginTop: 20,
    padding: 15,
    alignItems: 'center',
  },
});

export default Otp;

