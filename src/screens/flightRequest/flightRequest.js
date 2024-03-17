import React, {useState} from 'react';
import FlightRequestView from './flightRequestView';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../navigators/mainStackNavigator';

const FlightRequest = () => {
  const navigation = useNavigation();

  const [fromAirport, setFromAirport] = useState(null);
  const [toAirport, setToAirport] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const hideDatePicker = () => setIsDatePickerVisible(false);

  const bookFlight = () => {
    navigation.navigate(routes.flightList, {
      departureDate: selectedDate,
      fromAirport: fromAirport,
      toAirport: toAirport,
    });
  };

  const onDepartureAirportSelect = val => setFromAirport(val);

  const onArrivalAirportSelect = val => setToAirport(val);

  const onFromTextInputClick = () => {
    navigation.navigate(routes.searchAirport, {
      onSelectCallBack: onDepartureAirportSelect,
      isDeparture: true,
    });
  };

  const onToTextInputClick = () => {
    navigation.navigate(routes.searchAirport, {
      onSelectCallBack: onArrivalAirportSelect,
      isDeparture: false,
    });
  };

  const onDateSelect = date => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const onDateClick = () => {
    setIsDatePickerVisible(true);
  };

  return (
    <FlightRequestView
      bookFlight={bookFlight}
      onToTextInputClick={onToTextInputClick}
      onFromTextInputClick={onFromTextInputClick}
      fromAirport={fromAirport}
      toAirport={toAirport}
      onDateClick={onDateClick}
      isDatePickerVisible={isDatePickerVisible}
      hideDatePicker={hideDatePicker}
      onDateSelect={onDateSelect}
      selectedDate={selectedDate}
    />
  );
};

export default FlightRequest;
