import React from 'react';
import { TextInput } from 'react-native';

const styles = {
  inputStyle: {
    color: '#4A5667',
    backgroundColor: '#FFF',
    flex: 1,
    borderColor: '#4A5667',
    borderRadius: 4,
    borderWidth: 1,
    padding: 10,
    paddingBottom: 7,
    paddingTop: 7,
    height: 50,
    lineHeight: 50,
  }
};

const Input = ({ value, onChangeText, placeholder, secureTextEntry, keyboardType, style }) => {
  const { inputStyle } = styles;

  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      placeholderTextColor='#4A5667'
      keyboardType={keyboardType}
      autoCorrect={false}
      style={[inputStyle, style]}
      value={value}
      underlineColorAndroid='white'
      onChangeText={onChangeText}
    />
  );
};

export { Input };
