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
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Event",
          headerTintColor: Themes.colors.header, // this is how to change the color of the back arrow
          headerStyle: {
            backgroundColor: Themes.colors.boxBackground,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: Themes.colors.header,
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
          <Ionicons name="calendar" size={24} color={Themes.colors.darkShade} />
          <Text style={styles.paragraph}> Date: {params.eventDeets}</Text>
        </View>
        <View style={styles.subHeader}>
          <Ionicons
            name="md-aperture-outline"
            size={24}
            color={Themes.colors.darkShade}
          />
          <Text style={styles.paragraph}>
            Type: {params.type} ({params.subType})
          </Text>
        </View>
        <View style={styles.subHeader}>
          <Ionicons
            name="location-sharp"
            size={24}
            color={Themes.colors.darkShade}
          />
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
            <Text style={styles.linkText}> Buy Tickets Here!</Text>
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
        <Link href={{ pathname: "/alexProfileView" }} asChild>
          <Pressable>
            <View style={styles.randomUser}>
              <Ionicons
                name="person-circle-sharp"
                size={40}
                color={Themes.colors.darkShade}
              />
              <Text style={styles.userName}> Alex Thompson</Text>
            </View>
          </Pressable>
        </Link>
        <Link href={{ pathname: "/mayaProfileView" }} asChild>
          <Pressable>
            <View style={styles.randomUser}>
              <Ionicons
                name="person-circle-sharp"
                size={40}
                color={Themes.colors.darkShade}
              />
              <Text style={styles.userName}> Maya Rodriguez</Text>
            </View>
          </Pressable>
        </Link>
        <Link href={{ pathname: "/jordanProfileView" }} asChild>
          <Pressable>
            <View style={styles.randomUser}>
              <Ionicons
                name="person-circle-sharp"
                size={40}
                color={Themes.colors.darkShade}
              />
              <Text style={styles.userName}> Jordan Taylor</Text>
            </View>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default eventDescriptionView;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column", // Try: 'row' or 'column'
    alignItems: "center", // Try: 'flex-start' or 'center' or 'flex-end'
    backgroundColor: Themes.colors.background,
    paddingHorizontal: 20,
    width: "100%",
    height: "100%",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: Themes.colors.darkShade,
  },
  descriptionContainer: {
    width: "100%",
    height: "25%",
    padding: 5,
    justifyContent: "space-around",
    borderColor: Themes.colors.lightShade,
    borderWidth: 5,
    borderRadius: 20,
    backgroundColor: Themes.colors.boxBackground,
  },
  subHeader: {
    flexDirection: "row",
  },
  paragraph: {
    fontSize: 24,
    fontWeight: "bold",
    color: Themes.colors.darkShade,
  },
  linkText: {
    fontSize: 16,
    color: "blue",
  },
  eventImageContainer: {
    height: "35%",
    width: "100%",
    alignItems: "flex-start",
    borderWidth: 8,
    borderColor: Themes.colors.lightShade,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  eventImage: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  goingContainer: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "space-around",
    borderColor: Themes.colors.lightShade,
    borderWidth: 5,
    borderRadius: 20,
    backgroundColor: Themes.colors.boxBackground,
    padding: 5,
  },
  randomUser: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  userName: {
    fontSize: 20,
    color: Themes.colors.darkShade,
  },
});
