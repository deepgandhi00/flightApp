import React, {useEffect, useRef, useState} from 'react';
import FlightListView from './flightListView';
import {getFlights} from '../../data/networking/flight-ws';

const FlightList = ({route}) => {
  const {departureDate, fromAirport, toAirport} = route?.params || {};
  const filterBottomSheetRef = useRef();
  const sortBottomSheetRef = useRef();

  const [flights, setFlights] = useState(null);
  const [filteredFlights, setFilteredFlights] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [selectedSort, setSelectedSort] = useState(null);

  useEffect(() => {
    getFlights()
      .then(response => {
        let res = response.data;
        let airlinesSet = new Set(res.map(flight => flight.airline));
        setSelectedAirlines(Array.from(airlinesSet));
        setFlights(res);
        setFilteredFlights(res);
      })
      .catch(error => {
        setFlights([]);
        setFilteredFlights([]);
        setErrorMsg(error.message);
      });
  }, []);

  const openFilterBottomSheet = () => {
    filterBottomSheetRef?.current?.open();
  };

  const closeFilterBottomSheet = () => {
    filterBottomSheetRef?.current?.close();
  };

  const openSortBottomSheet = () => {
    sortBottomSheetRef?.current?.open();
  };

  const closeSortBottomSheet = () => {
    sortBottomSheetRef?.current?.close();
  };

  const getAllAirlines = () => {
    if (flights?.length) {
      let airlinesSet = new Set(flights.map(flight => flight.airline));
      return Array.from(airlinesSet);
    } else {
      return [];
    }
  };

  const onChangeSelectedAirline = (value, airline) => {
    if (value) {
      let airlinesSet = [...selectedAirlines];
      airlinesSet.push(airline);
      setSelectedAirlines(airlinesSet);
    } else {
      let airlinesSet = [...selectedAirlines];
      let filteredSet = airlinesSet.filter(
        selectedAirline => selectedAirline !== airline,
      );
      setSelectedAirlines(filteredSet);
    }
  };

  const filterFlights = () => {
    let allFlights = [...flights];

    let filteredAirlines = allFlights.filter(flight =>
      selectedAirlines.includes(flight?.airline),
    );

    if (selectedSort) {
      if (selectedSort === 'price_low_high') {
        filteredAirlines.sort((a, b) => a.price - b.price);
      } else {
        filteredAirlines.sort((a, b) => b.price - a.price);
      }
    }

    closeFilterBottomSheet();
    setFilteredFlights(filteredAirlines);
  };

  const clearAirlinesFilter = () => {
    let airlines = getAllAirlines();
    setSelectedAirlines(airlines);
    setFilteredFlights(flights);
  };

  const sortFlights = type => {
    setSelectedSort(type);
    closeSortBottomSheet();

    if (type === 'price_low_high') {
      let tempFlights = [...filteredFlights];
      tempFlights.sort((a, b) => a.price - b.price);
      setFilteredFlights(tempFlights);
    } else {
      let tempFlights = [...filteredFlights];
      tempFlights.sort((a, b) => b.price - a.price);
      setFilteredFlights(tempFlights);
    }
  };

  return (
    <FlightListView
      flights={filteredFlights}
      airlines={getAllAirlines()}
      openFilterBottomSheet={openFilterBottomSheet}
      openSortBottomSheet={openSortBottomSheet}
      filterBottomSheetRef={filterBottomSheetRef}
      onChangeSelectedAirline={onChangeSelectedAirline}
      filterFlights={filterFlights}
      selectedAirlines={selectedAirlines}
      clearAirlinesFilter={clearAirlinesFilter}
      sortBottomSheetRef={sortBottomSheetRef}
      sortFlights={sortFlights}
      selectedSortType={selectedSort}
      departureDate={departureDate}
      toAirport={toAirport}
      fromAirport={fromAirport}
    />
  );
};

export default FlightList;
