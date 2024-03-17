import React from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import commonStyles from '../../utils/styles';
import {textBlack} from '../../utils/colors';
import CheckBox from '@react-native-community/checkbox';
import PrimaryButton from '../buttons/button';

const FilterBottomSheet = ({
  airlines = [],
  bottomSheetRef,
  onChangeSelectedAirline,
  selectedAirlines,
  clearAirlinesFilter,
  filterFlights,
}) => {
  return (
    <RBSheet
      height={450}
      ref={bottomSheetRef}
      customStyles={{
        container: {borderTopEndRadius: 24, borderTopStartRadius: 24},
      }}>
      <View style={[commonStyles.flex1, commonStyles.paddingHorizontal16]}>
        <Text style={[styles.titleText, commonStyles.marginTop24]}>
          Popular Airlines
        </Text>
        <FlatList
          data={airlines}
          renderItem={({item, index}) => {
            return (
              <AirlineItem
                name={item}
                onChangeSelectedAirline={onChangeSelectedAirline}
                isSelected={selectedAirlines.includes(item)}
              />
            );
          }}
        />
        <View
          style={[
            commonStyles.rowCenter,
            commonStyles.spaceBetween,
            commonStyles.marginBottom24,
          ]}>
          <PrimaryButton
            text="Clear"
            customStyles={[styles.button]}
            onPress={clearAirlinesFilter}
          />
          <PrimaryButton
            text="Apply"
            customStyles={[styles.button]}
            onPress={filterFlights}
          />
        </View>
      </View>
    </RBSheet>
  );
};

const AirlineItem = ({name, isSelected = true, onChangeSelectedAirline}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => onChangeSelectedAirline(!isSelected, name)}>
      <View
        style={[
          commonStyles.rowCenter,
          commonStyles.spaceBetween,
          commonStyles.marginBottom16,
        ]}>
        <Text style={[styles.nameText]}>{name}</Text>
        <CheckBox
          value={isSelected}
          onCheckColor={textBlack}
          tintColors={{true: textBlack}}
          onValueChange={value => onChangeSelectedAirline(value, name)}
        />
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
  button: {
    width: Dimensions.get('screen').width / 2 - 32,
  },
});

export default FilterBottomSheet;
