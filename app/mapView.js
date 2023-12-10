import { StyleSheet, View, Alert, Image, Text } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import MapView, { Marker, Callout } from "react-native-maps";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { Themes } from "../assets/Themes";

const mapView = () => {
  /* code below genereated from the ExpoGo MapView Docs to locate a user found here: https://github.com/react-native-maps/react-native-maps 
    and here (props list): https://github.com/react-native-maps/react-native-maps/blob/master/docs/mapview.md 
    This guide was also helpful to getting started with working with the callout component: https://blog.spirokit.com/maps-in-react-native-adding-interactive-markers  */
  const markers = [];
  const params = useLocalSearchParams();
  console.log("this is in map view");
  console.log(params.string);

  const makeMarkers = () => {
    let parsedPortions = params.string.split(";");
    console.log(parsedPortions);

    for (let i = 0; i < parsedPortions.length - 1; i++) {
      let info = parsedPortions[i].split("$");
      const lat = info[1];
      const long = info[0];
      const eventName = info[2];
      const eventPic = info[3];
      const eventDate = info[4];
      const eventTime = info[5];
      const marker = (
        <Marker key={i} coordinate={{ latitude: lat, longitude: long }}>
          <Callout tooltip={true}>
            <View style={styles.info}>
              <View style={styles.top}>
                <Image style={styles.eventImage} source={{ uri: eventPic }} />
              </View>
              <View style={styles.bottom}>
                <View style={styles.bottomTop}>
                  <Text style={styles.text} numberOfLines={2}>
                    {eventName}
                  </Text>
                </View>
                <View style={styles.bottomBottom}>
                  <View style={styles.time}>
                    <Ionicons name="time-sharp" size={10} color="black" />
                    <Text style={styles.descriptionText}>{eventTime}</Text>
                  </View>
                  <View style={styles.date}>
                    <Ionicons name="today" size={10} color="black" />
                    <Text style={styles.descriptionText}>{eventDate}</Text>
                  </View>
                </View>
              </View>
            </View>
          </Callout>
        </Marker>
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
          headerTintColor: Themes.colors.darkShade, // this is how to change the color of the back arrow
          headerStyle: {
            backgroundColor: "#ECE3CE",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: Themes.colors.darkShade,
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
  info: {
    padding: 5,
    backgroundColor: Themes.colors.background,
    width: 150,
    height: 150,
    flexDirection: "column",
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
    //borderColor: "orange",
    //borderWidth: 5,
  },
  top: {
    height: "50%",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  bottom: {
    height: "45%",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    //borderColor: "red",
    //borderWidth: 5,
  },
  eventImage: {
    //resizeMode: "contain",
    height: "100%",
    width: "100%",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: Themes.colors.medShade,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 12,
    color: Themes.colors.medShade,
  },
  bottomBottom: {
    flex: 1,
    //borderColor: "yellow",
    //borderWidth: 5,
  },
  bottomTop: {
    flex: 1,
    //borderColor: "green",
    //borderWidth: 5,
  },
  descriptionText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 10,
    color: Themes.colors.medShade,
  },
  time: {
    justifyContent: "center",
    flexDirection: "row",
  },
  date: {
    justifyContent: "center",
    flexDirection: "row",
  },
});
