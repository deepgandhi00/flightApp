import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyles from '../../utils/styles';
import TextInputField from '../../components/textInput/textInputField';
import {
  textBlack,
  textDarkGrey,
  textLightGrey,
  white,
} from '../../utils/colors';

const AirportSearchView = ({
  searchText,
  setSearchText,
  isDeparture,
  filteredAirports,
  onSelectAirport,
}) => {
  return (
    <SafeAreaView style={[commonStyles.container]}>
      <View style={[commonStyles.viewContainer]}>
        <TextInputField
          icon={isDeparture ? 'plane-departure' : 'location-pin'}
          label={isDeparture ? 'From' : 'To'}
          onChangeText={setSearchText}
          text={searchText}
        />

        <FlatList
          data={filteredAirports}
          ItemSeparatorComponent={() => <View style={[styles.separator]} />}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={() => onSelectAirport(item.IATA_code)}>
                <View
                  style={[
                    commonStyles.rowCenter,
                    commonStyles.paddingVertical8,
                  ]}>
                  <View style={styles.symbolView}>
                    <Text style={[styles.symbolText]}>{item.IATA_code}</Text>
                  </View>
                  <View style={[commonStyles.marginStart16]}>
                    <Text style={[styles.cityNameText]}>{item.city_name}</Text>
                    <Text style={[styles.airportNameText]}>
                      {item.airport_name}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  symbolView: {
    height: 56,
    width: 56,
    borderRadius: 16,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  symbolText: {
    fontSize: 14,
    fontWeight: '400',
    color: textBlack,
  },
  cityNameText: {
    fontSize: 14,
    fontWeight: '300',
    color: textBlack,
  },
  airportNameText: {
    fontSize: 12,
    fontWeight: '400',
    color: textDarkGrey,
  },
  separator: {
    height: 1,
    backgroundColor: textLightGrey,
  },
});

export default AirportSearchView;
