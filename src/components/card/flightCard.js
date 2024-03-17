import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import commonStyles from '../../utils/styles';
import {
  priceBackground,
  priceText,
  textBlack,
  textLightGrey,
  textMidGrey,
  white,
} from '../../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FlightCard = ({flight}) => {
  const getTime = time => {
    let date = new Date(time || null);
    return `${addPrefix(date.getUTCHours() % 12)}:${addPrefix(
      date.getUTCMinutes(),
    )} ${date.getUTCHours() > 12 ? 'pm' : 'am'}`;
  };

  const addPrefix = val => {
    return ('0' + Number(val)).slice(-2);
  };

  const getDepartureCode = () => {
    if (flight?.origin) {
      return flight.origin.substring(0, 3);
    } else {
      return '';
    }
  };

  const getArrivalCode = () => {
    if (flight?.destination) {
      return flight.destination.substring(0, 3);
    } else {
      return '';
    }
  };
  return (
    <View style={styles.cardContainer}>
      <View style={[commonStyles.rowCenter, commonStyles.spaceBetween]}>
        <Image
          source={require('../../../assets/images/airline_logo.jpg')}
          style={styles.logo}
        />
        <Text style={[styles.flightNumberText]}>{`${flight?.airline || ''} - ${
          flight?.flightNumber || ''
        }`}</Text>
      </View>

      {/* time view */}
      <View style={[commonStyles.rowCenter, commonStyles.marginTop16]}>
        <View>
          <Text style={[styles.timeText]}>
            {getTime(flight?.departureTime)}
          </Text>
          <View style={[styles.airportView]}>
            <Text style={[styles.airportText]}>{getDepartureCode()}</Text>
          </View>
        </View>

        <View style={[commonStyles.flex1, commonStyles.alignItemsCenter]}>
          <View
            style={[
              commonStyles.flex1,
              commonStyles.paddingHorizontal16,
              commonStyles.rowCenter,
            ]}>
            <View style={[styles.indicatorOuter, styles.departureOuter]}>
              <View style={[styles.indicatorInner, styles.departureInner]} />
            </View>

            <View style={[styles.dotIndicator]}>
              <Ionicons
                name="airplane"
                size={22}
                color={textBlack}
                style={styles.flightIcon}
              />
            </View>

            <View style={[styles.indicatorOuter, styles.arrivalOuter]}>
              <View style={[styles.indicatorInner, styles.arrivalInner]} />
            </View>
          </View>

          <Text style={[styles.flightTimeText]}>{flight?.duration || ''}</Text>
        </View>

        <View>
          <Text style={[styles.timeText]}>{getTime(flight?.arrivalTime)}</Text>
          <View style={[styles.airportView]}>
            <Text style={[styles.airportText]}>{getArrivalCode()}</Text>
          </View>
        </View>
      </View>

      {/* last row */}
      <View
        style={[
          commonStyles.row,
          commonStyles.marginTop24,
          commonStyles.spaceBetween,
          commonStyles.alignItemsBaseLine,
        ]}>
        <Text style={[styles.stopsText]}>Non Stop</Text>
        <View style={[styles.priceView]}>
          <Text style={[styles.priceText]}>{`Rs. ${flight.price}`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: white,
    borderRadius: 16,
    marginBottom: 24,
  },
  logo: {
    width: 40,
    height: 40,
  },
  flightNumberText: {
    fontSize: 14,
    fontWeight: '500',
    color: textMidGrey,
  },
  timeText: {
    fontSize: 18,
    fontWeight: '500',
    color: textBlack,
  },
  timeView: {
    flex: 1,
  },
  airportView: {
    backgroundColor: textLightGrey,
    paddingHorizontal: 12,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 4,
  },
  airportText: {
    fontSize: 12,
    fontWeight: '400',
    color: textBlack,
  },
  indicatorOuter: {
    height: 12,
    width: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorInner: {
    height: 4,
    width: 4,
    borderRadius: 4,
    alignSelf: 'center',
  },
  departureOuter: {
    backgroundColor: textLightGrey,
  },
  departureInner: {
    backgroundColor: textBlack,
  },
  arrivalOuter: {
    backgroundColor: textBlack,
  },
  arrivalInner: {
    backgroundColor: textLightGrey,
  },
  dotIndicator: {
    borderStyle: 'dashed',
    borderTopWidth: 1,
    flex: 1,
  },
  flightIcon: {
    position: 'absolute',
    alignSelf: 'center',
    top: -12,
  },
  flightTimeText: {
    fontSize: 12,
    fontWeight: '400',
    color: textBlack,
  },
  stopsText: {
    fontSize: 14,
    fontWeight: '400',
    color: textMidGrey,
  },
  priceView: {
    backgroundColor: priceBackground,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8,
  },
  priceText: {
    fontSize: 18,
    fontWeight: '400',
    color: priceText,
  },
});

export default FlightCard;
