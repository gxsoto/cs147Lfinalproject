import { StyleSheet, View, Alert } from "react-native";
import { Stack, Link, useLocalSearchParams } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import React, { useState, useEffect } from "react";
import { PROVIDER_GOOGLE } from "react-native-maps";

const mapView = () => {
  /* code below genereated from the ExpoGo MapView Docs to locate a user found here: https://github.com/react-native-maps/react-native-maps 
    and here (props list): https://github.com/react-native-maps/react-native-maps/blob/master/docs/mapview.md  */
  const markers = [];
  const params = useLocalSearchParams();
  console.log("this is in map view");
  console.log(params.string);

  const makeMarkers = () => {
    let parsedPortions = params.string.split(";");
    console.log(parsedPortions);

    for (let i = 0; i < parsedPortions.length - 1; i++) {
      let info = parsedPortions[i].split(",");
      const lat = info[1];
      const long = info[0];
      const eventName = info[2];
      const marker = (
        <Marker
          key={i}
          coordinate={{ latitude: lat, longitude: long }}
          title={eventName}
        />
      );
      markers.push(marker);
    }
    console.log(markers);
  };

  const alertMessage = () => {
    Alert.alert(
      "Uh Oh!",
      "Looks like the city you inputted has some funky data, we were not able to create event markers, sorry!",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
  };

  // let parsedPortions = params.string.split(";");
  // console.log(parsedPortions);

  // for (let i = 0; i < parsedPortions.length - 1; i++) {
  //   let info = parsedPortions[i].split(",");
  //   const lat = info[1];
  //   const long = info[0];
  //   const eventName = info[2];
  //   const marker = (
  //     <Marker
  //       key={i}
  //       coordinate={{ latitude: lat, longitude: long }}
  //       title={eventName}
  //     />
  //   );
  //   markers.push(marker);
  // }
  // console.log(markers);

  if (params.string) {
    makeMarkers();
  } else {
    alertMessage();
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Map View",
          headerTintColor: "red", // this is how to change the color of the back arrow
          headerStyle: {
            backgroundColor: "white",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "red",
          },
        }}
      />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followUserLocation={true}
        zoomEnabled={true}
        zoomTapEnabled={true}
        loadingEnabled={true}
      >
        {markers}
      </MapView>
    </View>
  );
};
export default mapView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
