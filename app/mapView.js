import { StyleSheet, View } from "react-native";
import { Stack, Link } from "expo-router";
import MapView from "react-native-maps";
import React, { useState, useEffect } from "react";
import { PROVIDER_GOOGLE } from "react-native-maps";

const mapView = () => {
  /* code below genereated from the ExpoGo MapView Docs to locate a user found here: https://github.com/react-native-maps/react-native-maps 
    and here (props list): https://github.com/react-native-maps/react-native-maps/blob/master/docs/mapview.md  */
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
      />
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
