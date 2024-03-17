import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  textBlack,
  textDarkGrey,
  textLightGrey,
  white,
} from '../../utils/colors';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome6';

const TextInputField = ({
  customStyles = [],
  icon,
  label,
  isDisabled = false,
  onClickCallback = () => {},
  onChangeText,
  text,
}) => {
  return (
    <View style={[styles.container, ...customStyles]}>
      <FontAwesomeIcons name={icon} size={16} color={textLightGrey} />
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>{label}</Text>
        <TouchableWithoutFeedback onPress={onClickCallback}>
          <View>
            <TextInput
              style={styles.textInput}
              editable={!isDisabled}
              caretHidden={true}
              onChangeText={onChangeText}
              value={text}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  inputContainer: {
    marginStart: 16,
    flex: 1,
  },
  labelText: {
    fontSize: 16,
    fontWeight: '400',
    color: textDarkGrey,
  },
  textInput: {
    fontSize: 16,
    fontWeight: '500',
    color: textBlack,
  },
});

export default TextInputField;
