import React from 'react';
import { Linking, Text, TouchableOpacity } from 'react-native';

const colors = {
  red: '#FF0A05',
  green: '#00B95B',
  blue: '#1E95F3',
  orange: '#DFA100',
  gray: '#E1E1E1',
};


const Button = ({ onPress, url, color, children }) => {
  const { buttonStyle, textStyle } = styles;

  const href = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity
      onPress={onPress || href}
      style={[
        buttonStyle,
        {
          backgroundColor: colors[color],
          borderColor: colors[color],
        },
      ]}
    >
      <Text
        style={[
          textStyle,
          { color: color === 'gray' ? '#4A5667' : '#FFFFFF' },
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};


const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    justifyContent: 'center',
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
  },
};

export { Button };
