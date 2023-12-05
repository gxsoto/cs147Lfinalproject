import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import * as React from "react";
import { Stack, Link, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const eventDescriptionView = () => {
  const params = useLocalSearchParams();
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Event Description",
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
      <View style={styles.eventImageContainer}>
        <Image style={styles.eventImage} source={{ uri: params.eventPic }} />
      </View>

      <Text style={styles.header}> Event Details</Text>
      <Ionicons name="calendar" size={24} color="black" />
      <Text style={styles.paragraph}> Date: {params.eventDeets}</Text>
      <Text style={styles.paragraph}>
        {" "}
        Type: {params.type} ({params.subType})
      </Text>
      <Text style={styles.paragraph}> Venue: {params.venue}</Text>
      <Text style={styles.paragraph}>
        {params.promoter}
        {params.ticketPriceMin}
        {params.ticketPriceMax}
      </Text>
      <Link
        href={{ pathname: "/eventWebView", params: { url: params.website } }}
      >
        <Text style={styles.linkText}>Buy Tickets</Text>
      </Link>

      <Text style={styles.linkText}>
        Click on the seal to view a person's profile
      </Text>
      <Link href={{ pathname: "/otherUserProfileView" }}>
        <Text style={styles.seal}>🦭</Text>
      </Link>
    </View>
    // </SafeAreaView>
  );
};

export default eventDescriptionView;

const styles = StyleSheet.create({
  container: {
    flex: 1, // We'll learn about "flex" and other flexbox properties in class!
    flexDirection: "column", // Try: 'row' or 'column'
    alignItems: "center", // Try: 'flex-start' or 'center' or 'flex-end'
    //justifyContent: "center", // Try: 'flex-start' or 'flex-end' or 'space-between' or 'space-around' or 'space evenly'
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    //flexDirection: "column",
  },
  linkText: {
    fontSize: 16,
    textAlign: "center",
    color: "blue",
  },
  seal: {
    fontSize: 40,
  },
  eventImageContainer: {
    height: "20%",
    width: "100%",
    //justifyContent: "flex-start",
    alignItems: "flex-start",
    borderWidth: 10,
    borderColor: "#DDA0DD",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  eventImage: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    //borderTopLeftRadius: 15,
    //borderBottomLeftRadius: 15,
  },
});
