import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import FlightRequest from '../screens/flightRequest/flightRequest';
import FlightList from '../screens/flightList/flightList';
import {screenBackGround, textBlack} from '../utils/colors';
import AirportSearch from '../screens/airportSearch/airportSearch';

const Stack = createStackNavigator();

export const routes = {
  flightRequest: 'flightRequest',
  flightList: 'flightList',
  searchAirport: 'searchAirport',
};

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.flightRequest}>
        <Stack.Screen
          name={routes.flightRequest}
          component={FlightRequest}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={routes.flightList}
          component={FlightList}
          options={{
            headerTitle: 'Select Flight',
            headerTitleAlign: 'center',
            backgroundColor: screenBackGround,
            headerTitleStyle: {
              color: textBlack,
            },
            headerStyle: {
              elevation: 0,
              backgroundColor: screenBackGround,
            },
          }}
        />
        <Stack.Screen
          name={routes.searchAirport}
          component={AirportSearch}
          options={{
            headerTitle: 'Search Airport',
            headerTitleAlign: 'center',
            backgroundColor: screenBackGround,
            headerTitleStyle: {
              color: textBlack,
            },
            headerStyle: {
              elevation: 0,
              backgroundColor: screenBackGround,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
