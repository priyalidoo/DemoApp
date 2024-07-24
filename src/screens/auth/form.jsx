import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please Enter your Full Name'),
  email: Yup.string()
    .email('Invalid Email')
    .required('Please enter your email address'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Please Enter your Password')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
  confirmPassword: Yup.string()
    .min(8, 'Confirm password must be at least 8 characters long')
    .oneOf([Yup.ref('password'), null], 'Your Password Do not match')
    .required('Confirm Password is required'),
  mobile: Yup.string()
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .required('Please enter your mobile number'),
});

export default function Form() {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobile: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={values => Alert.alert(JSON.stringify(values))}
    >
      {({ values, errors, touched, handleSubmit, handleChange, setFieldTouched, isValid }) => (
        <View style={styles.wrapper}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Sign Up</Text>
            
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                placeholder='Full Name'
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
              />
              {touched.name && errors.name && (
                <Text style={styles.errorTxt}>{errors.name}</Text>
              )}
            </View>

            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                placeholder='Email Address'
                autoCapitalize='none'
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorTxt}>{errors.email}</Text>
              )}
            </View>

            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                placeholder='Password'
                secureTextEntry
                autoCapitalize='none'
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
              />
              {touched.password && errors.password && (
                <Text style={styles.errorTxt}>{errors.password}</Text>
              )}
            </View>

            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                placeholder='Confirm Password'
                secureTextEntry
                autoCapitalize='none'
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={() => setFieldTouched('confirmPassword')}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.errorTxt}>{errors.confirmPassword}</Text>
              )}
            </View>

            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                placeholder='Mobile No'
                keyboardType='phone-pad'
                value={values.mobile}
                onChangeText={handleChange('mobile')}
                onBlur={() => setFieldTouched('mobile')}
              />
              {touched.mobile && errors.mobile && (
                <Text style={styles.errorTxt}>{errors.mobile}</Text>
              )}
            </View>

            <TouchableOpacity
              onPress={handleSubmit}
              disabled={!isValid}
              style={[
                styles.submitBtn,
                { backgroundColor: isValid ? '#395864' : '#A5C9CA' }
              ]}
            >
              <Text style={styles.submitBtnText}>Submit</Text>
            </TouchableOpacity>
             
          </View>
        </View>
      )}
    </Formik>
    
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C3333',
    paddingHorizontal: 15
  },
  formContainer: {
    backgroundColor: '#F5EDDC',
    padding: 20,
    borderRadius: 20,
    color:'#000000',
    width: '100%'
  },
  title: {
    fontSize: 20,
    color: '#16213E',
    fontWeight: '400',
    marginBottom: 15
  },
  inputWrapper: {
    marginBottom: 10,
  },
  inputStyle: {
    borderColor: '#16213E',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10
  },
  errorTxt: {
    fontSize: 12,
    color: '#FF0D10'
  },
  submitBtn: {
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center'
  },
  submitBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18
  }
});