import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {textBlack, white} from '../../utils/colors';

const PrimaryButton = ({text, customStyles = [], onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.buttonContainer, ...customStyles]}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: textBlack,
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: white,
  },
});

export default PrimaryButton;
