import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {screenBackGround, textBlack} from '../../utils/colors';
import Selector from '../../components/selection/selector';
import TextInputField from '../../components/textInput/textInputField';
import PrimaryButton from '../../components/buttons/button';
import commonStyles from '../../utils/styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {getFormattedDate} from '../../utils/utils';

const FlightRequestView = ({
  bookFlight,
  onToTextInputClick,
  onFromTextInputClick,
  fromAirport,
  toAirport,
  onDateClick,
  isDatePickerVisible,
  onDateSelect,
  hideDatePicker,
  selectedDate,
}) => {
  return (
    <SafeAreaView style={[commonStyles.container]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={screenBackGround} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={onDateSelect}
        onCancel={hideDatePicker}
        minimumDate={new Date()}
      />
      <View style={[commonStyles.viewContainer]}>
        <ScrollView>
          <Text style={styles.titleText}>Let's Plan your trip</Text>
          <View style={[commonStyles.row, commonStyles.marginTop24]}>
            <Selector
              title={'One Way'}
              icon={'arrow-right-long'}
              isSelected={true}
            />
          </View>

          <TextInputField
            icon="plane-departure"
            label="From"
            customStyles={[commonStyles.marginTop24]}
            isDisabled={true}
            onClickCallback={onFromTextInputClick}
            text={fromAirport}
          />

          <TextInputField
            icon="location-pin"
            label="To"
            customStyles={[commonStyles.marginTop24]}
            isDisabled={true}
            onClickCallback={onToTextInputClick}
            text={toAirport}
          />

          <TextInputField
            icon="calendar"
            label="Departure"
            isDisabled={true}
            onClickCallback={onDateClick}
            customStyles={[commonStyles.marginTop24]}
            text={selectedDate ? getFormattedDate(selectedDate) : null}
          />
        </ScrollView>
        <PrimaryButton
          text="Book Flight"
          customStyles={[commonStyles.marginBottom24]}
          onPress={bookFlight}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: '500',
    color: textBlack,
    marginTop: 24,
  },
});

export default FlightRequestView;
