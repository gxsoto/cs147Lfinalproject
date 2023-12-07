import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import * as React from "react";
import { Stack, Link, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Themes } from "../assets/Themes";

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
      <Text style={styles.header}> {params.name}</Text>
      <View style={styles.eventImageContainer}>
        <Image style={styles.eventImage} source={{ uri: params.eventPic }} />
      </View>

      <Text style={styles.header}> Event Details</Text>
      <View style={styles.descriptionContainer}>
        <View style={styles.subHeader}>
          <Ionicons name="calendar" size={24} color="black" />
          <Text style={styles.paragraph}> Date: {params.eventDeets}</Text>
        </View>
        <View style={styles.subHeader}>
          <Ionicons name="md-aperture-outline" size={24} color="black" />
          <Text style={styles.paragraph}>
            Type: {params.type} ({params.subType})
          </Text>
        </View>
        <View style={styles.subHeader}>
          <Ionicons name="location-sharp" size={24} color="black" />
          <Text style={styles.paragraph}> Venue: {params.venue}</Text>
        </View>
        <Link
          href={{
            pathname: "/eventWebView",
            params: { url: params.website },
          }}
        >
          <View style={styles.subHeader}>
            <Entypo name="ticket" size={24} color="blue" />
            <Text style={styles.linkText}> Buy Tickets</Text>
          </View>
        </Link>
      </View>
      <Text style={styles.paragraph}>
        {params.promoter}
        {params.ticketPriceMin}
        {params.ticketPriceMax}
      </Text>
      <Text style={styles.header}> People Going:</Text>
      <View style={styles.goingContainer}>
        <Link href={{ pathname: "/otherUserProfileView" }} asChild>
          <Pressable>
            <View style={styles.randomUser}>
              <Ionicons
                name="person-circle-sharp"
                size={40}
                color={Themes.colors.purple}
              />
              <Text style={styles.userName}> User 1</Text>
            </View>
          </Pressable>
        </Link>
        <Link href={{ pathname: "/otherUserProfileView" }}>
          <Pressable>
            <View style={styles.randomUser}>
              <Ionicons
                name="person-circle-sharp"
                size={40}
                color={Themes.colors.purple}
              />
              <Text style={styles.userName}> User 2</Text>
            </View>
          </Pressable>
        </Link>
        <Pressable>
          <View style={styles.randomUser}>
            <Ionicons
              name="person-circle-sharp"
              size={40}
              color={Themes.colors.purple}
            />
            <Text style={styles.userName}> User 3</Text>
          </View>
        </Pressable>
      </View>
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
    backgroundColor: Themes.colors.background,
    padding: 8,
  },
  /*
  biggerContainer: {
    width: "100%",
    height: "100%",
    borderWidth: 10,
    borderColor: "#DDA0DD",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    backgroundColor: "#DDA0DD",
  },
  */
  header: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  descriptionContainer: {
    width: "100%",
    height: "25%",
    padding: 20,
    justifyContent: "space-between",
    borderColor: "red",
    borderWidth: 2,
  },
  subHeader: {
    flexDirection: "row",
  },
  paragraph: {
    fontSize: 24,
    fontWeight: "bold",
    //textAlign: "center",
    //flexDirection: "column",
  },
  linkText: {
    fontSize: 16,
    //textAlign: "center",
    color: "blue",
  },
  seal: {
    fontSize: 40,
  },
  eventImageContainer: {
    height: "35%",
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
  goingContainer: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderColor: "green",
    borderWidth: 5,
  },
  randomUser: {
    width: "100%",
    alignItems: "center",
    //justifyContent: "flex-start",
    borderColor: "yellow",
    borderWidth: 5,
    flexDirection: "row",
    //textAlign: "center",
  },
  userName: {
    fontSize: 20,
  },
});
