import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import commonStyles from '../../utils/styles';
import {screenBackGround, textBlack, textMidGrey} from '../../utils/colors';
import Selector from '../../components/selection/selector';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FlightCard from '../../components/card/flightCard';
import FilterBottomSheet from '../../components/bottomSheets/filterBottomSheet';
import SortBottomSheet from '../../components/bottomSheets/sortBottomSheet';
import {getFormattedDate} from '../../utils/utils';

const FlightListView = ({
  flights,
  airlines,
  openFilterBottomSheet,
  openSortBottomSheet,
  filterBottomSheetRef,
  onChangeSelectedAirline,
  filterFlights,
  selectedAirlines,
  clearAirlinesFilter,
  sortBottomSheetRef,
  sortFlights,
  selectedSortType,
  departureDate,
  toAirport,
  fromAirport,
}) => {
  return (
    <SafeAreaView style={[commonStyles.container]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={screenBackGround} />
      <FilterBottomSheet
        airlines={airlines}
        bottomSheetRef={filterBottomSheetRef}
        onChangeSelectedAirline={onChangeSelectedAirline}
        filterFlights={filterFlights}
        selectedAirlines={selectedAirlines}
        clearAirlinesFilter={clearAirlinesFilter}
      />
      <SortBottomSheet
        bottomSheetRef={sortBottomSheetRef}
        sortFlights={sortFlights}
        selectedSortType={selectedSortType}
      />
      <View style={[commonStyles.viewContainer]}>
        <Text style={styles.subTitleText}>Your Trip</Text>

        <View
          style={[
            commonStyles.rowCenter,
            commonStyles.spaceBetween,
            commonStyles.marginTop24,
          ]}>
          {/* trip summary */}
          <View style={[commonStyles.rowCenter]}>
            <Text
              style={[styles.tripText]}>{`${fromAirport} - ${toAirport}`}</Text>
            <Selector
              title="One Way"
              isSelected={true}
              icon="arrow-right-long"
              customStyles={[commonStyles.marginStart16]}
            />
          </View>

          {/* filter and sort */}
          <View style={[commonStyles.rowCenter]}>
            <MaterialCommunityIcons
              name="filter-variant"
              size={24}
              color={textBlack}
              onPress={openFilterBottomSheet}
            />
            <MaterialCommunityIcons
              name="sort-variant"
              size={24}
              color={textBlack}
              style={[commonStyles.marginStart16]}
              onPress={openSortBottomSheet}
            />
          </View>
        </View>

        {/* date view */}
        <Text style={[styles.dateText, commonStyles.marginTop24]}>
          {getFormattedDate(departureDate)}
        </Text>

        <BodyView flights={flights} />
      </View>
    </SafeAreaView>
  );
};

const BodyView = ({flights}) => {
  if (flights === null) {
    return (
      <View
        style={[
          commonStyles.flex1,
          commonStyles.alignItemsCenter,
          commonStyles.justifyContentCenter,
        ]}>
        <ActivityIndicator size="large" color={textBlack} />
      </View>
    );
  } else if (flights?.length) {
    return (
      <FlatList
        data={flights}
        contentContainerStyle={[commonStyles.marginTop24]}
        renderItem={({item, index}) => {
          return <FlightCard flight={item} />;
        }}
      />
    );
  } else {
    return (
      <View
        style={[
          commonStyles.flex1,
          commonStyles.alignItemsCenter,
          commonStyles.justifyContentCenter,
        ]}>
        <Text style={[styles.noFlightText]}>
          No Flights please update search criteria
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  subTitleText: {
    fontSize: 14,
    fontWeight: '400',
    color: textMidGrey,
  },
  tripText: {
    fontSize: 20,
    fontWeight: '500',
    color: textBlack,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '400',
    color: textMidGrey,
    letterSpacing: 0.6,
  },
  noFlightText: {
    fontSize: 18,
    fontWeight: '400',
    color: textBlack,
  },
});

export default FlightListView;
