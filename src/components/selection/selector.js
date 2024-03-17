import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome6';
import {
  screenBackGround,
  textBlack,
  textDarkGrey,
  textLightGrey,
} from '../../utils/colors';

const Selector = ({isSelected = false, icon, title, customStyles = []}) => {
  return (
    <View
      style={
        isSelected
          ? [styles.tripTypeItem, styles.tripTypeItemSelected, customStyles]
          : [styles.tripTypeItem, customStyles]
      }>
      <FontAwesomeIcons
        name={icon}
        size={18}
        color={isSelected ? textLightGrey : textDarkGrey}
      />
      <Text
        style={
          isSelected
            ? [styles.tripTypeItemText, styles.tripTypeItemSelectedText]
            : [styles.tripTypeItemText]
        }>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tripTypeItem: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: screenBackGround,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tripTypeItemText: {
    color: textDarkGrey,
    fontSize: 16,
    marginStart: 8,
  },
  tripTypeItemSelected: {
    backgroundColor: textBlack,
  },
  tripTypeItemSelectedText: {
    color: textLightGrey,
  },
});

export default Selector;
