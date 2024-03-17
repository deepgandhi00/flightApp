import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import commonStyles from '../../utils/styles';
import {textBlack, textDarkGrey} from '../../utils/colors';

const SortBottomSheet = ({bottomSheetRef, selectedSortType, sortFlights}) => {
  return (
    <RBSheet
      height={350}
      ref={bottomSheetRef}
      customStyles={{
        container: {borderTopEndRadius: 24, borderTopStartRadius: 24},
      }}>
      <View style={[commonStyles.flex1, commonStyles.paddingHorizontal16]}>
        <Text style={[styles.titleText, commonStyles.marginTop24]}>
          Sort By
        </Text>

        <SortItem
          name={'Price'}
          type={'price_low_high'}
          selectedSortType={selectedSortType}
          subText={'Low to High'}
          onPress={sortFlights}
        />

        <SortItem
          name={'Price'}
          type={'price_high_low'}
          selectedSortType={selectedSortType}
          subText={'High to Low'}
          onPress={sortFlights}
        />
      </View>
    </RBSheet>
  );
};

const SortItem = ({selectedSortType, name, type, subText, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onPress(type)}>
      <View style={[commonStyles.row, commonStyles.marginBottom16]}>
        <View style={[styles.radioButton]}>
          {selectedSortType === type ? (
            <View style={[styles.selectedRadioButton]} />
          ) : null}
        </View>

        <View style={[commonStyles.flex1, commonStyles.marginStart16]}>
          <Text style={[styles.radioButtonText]}>{name}</Text>
          <Text style={[styles.radioButtonSubText]}>{subText}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    color: textBlack,
    marginBottom: 24,
  },
  nameText: {
    fontSize: 16,
    fontWeight: '400',
    color: textBlack,
  },
  radioButton: {
    height: 18,
    width: 18,
    borderRadius: 24,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: textBlack,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    marginTop: 4,
  },
  selectedRadioButton: {
    height: 9,
    width: 9,
    borderRadius: 9,
    backgroundColor: textBlack,
  },
  radioButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: textBlack,
  },
  radioButtonSubText: {
    fontSize: 14,
    fontWeight: '400',
    color: textDarkGrey,
  },
});

export default SortBottomSheet;
