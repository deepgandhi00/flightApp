import React, {useEffect, useState} from 'react';
import AirportSearchView from './airportSearchView';
import {useNavigation} from '@react-navigation/native';

const AirportSearch = ({route}) => {
  const {onSelectCallBack, isDeparture} = route?.params || {};
  const navigation = useNavigation();
  const airportData = require('../../data/local/airports.json');

  const [searchText, setSearchText] = useState(null);
  const [filteredAirports, setFilteredAirports] = useState([]);

  useEffect(() => {
    if (searchText && searchText.trim() !== '') {
      let lowerSearchText = searchText.toLowerCase();
      let searchedAirports = airportData.filter(
        airport =>
          airport.IATA_code.toLowerCase() === lowerSearchText ||
          airport.IATA_code.toLowerCase().includes(lowerSearchText) ||
          airport.airport_name.toLowerCase().includes(lowerSearchText) ||
          airport.city_name.toLowerCase().includes(lowerSearchText),
      );
      setFilteredAirports(searchedAirports);
    } else {
      setFilteredAirports(airportData.slice(0, 10));
    }
  }, [searchText]);

  const onSelectAirport = airport => {
    onSelectCallBack(airport);
    navigation.goBack();
  };

  return (
    <AirportSearchView
      searchText={searchText}
      setSearchText={setSearchText}
      isDeparture={isDeparture}
      filteredAirports={filteredAirports}
      onSelectAirport={onSelectAirport}
    />
  );
};

export default AirportSearch;
