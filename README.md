<!-- Title -->
<h1 align="center">
  Flight Booking React Native App
</h1>

<p>
    The app is build using container view architecture separating logic and view
</p>

<!-- Body -->

```sh
git clone https://github.com/deepgandhi00/flightApp.git
cd flightApp
npx react-native run-android
```

## Folder Structure

- src (root folder for project)
  - components (contains base components like textinputs, button and also common components like cards)
  - data (contains data layer files for network calls and also local storage access files)
  - navigator (all the navigators like stack navigator used in application are stored here)
  - screens (all the screens for the app)
  - utils (contains utils files like common styles, colors and utility functions)
- assets (contains assets like images and screenshots)

## Library Used

- react-navigation
- axios
- react-native-raw-bottom-sheet
- react-native-vector-icons
- react-native-modal-datetime-picker

## Screens

<h3>Flight Request</h3>

<img height="350px" width="200px" src="whatever.jpg" alt="Flight Request" src="https://github.com/deepgandhi00/flightApp/blob/master/assets/screenshots/flightRequest.jpeg?raw=true" />

<p>
    Here user can select From which city to which city he/she wants to travel and also date of travel.
</p>


<h3>Select Airport</h3>

![alt Select Airport](https://github.com/deepgandhi00/flightApp/blob/master/assets/screenshots/selectAirport.jpeg?raw=true)

<p>
    Here user can select airport. He/she can filter list based on code, city or airport name.
</p>


<h3>Flight Lis</h3>

![alt Flight List](https://github.com/deepgandhi00/flightApp/blob/master/assets/screenshots/flightList.jpeg?raw=true)

<p>
    Here user can view all the available flights with all the info regarding the flight and also filter the airlines in which he/she wants to travel and sort them by price
</p>
