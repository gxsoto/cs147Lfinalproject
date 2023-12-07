import { StyleSheet, View, Dimensions, Text } from "react-native";
import * as React from "react";
import { Stack, Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Themes } from "../assets/Themes";
const otherUserProfileView = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Another User's Profile",
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
      <View style={styles.userPicContainer}>
        <Ionicons name="person-circle-sharp" size={200} color="black" />
        <Text style={styles.header}> User Name</Text>
      </View>
      <Text style={styles.header}> User Info</Text>
      <View style={styles.userDetails}>
        <FontAwesome name="birthday-cake" size={24} color="black" />
        <Text style={styles.paragraph}>Birthday: </Text>
      </View>
      <View style={styles.userDetails}>
        <FontAwesome5 name="transgender-alt" size={24} color="black" />
        <Text style={styles.paragraph}>Identity: </Text>
      </View>
      <View style={styles.userDetails}>
        <Ionicons name="location-sharp" size={24} color="black" />
        <Text style={styles.paragraph}>Distance: </Text>
      </View>
      <View style={styles.userDetails}>
        <FontAwesome name="heart" size={24} color="black" />
        <Text style={styles.paragraph}>Interests: </Text>
      </View>
      <Text style={styles.header}> About Me</Text>

      <View style={styles.aboutMeContainer}>
        <Text style={styles.paragraph}>
          Some bio info that the user put for themselves{" "}
        </Text>
      </View>

      <View style={styles.messageBox}>
        <Link href="/chatView">
          <Ionicons name="chatbox-ellipses" size={24} color="black" />
          <Text style={styles.linkText}>Chat with User</Text>
        </Link>
      </View>
    </View>
  );
};

export default otherUserProfileView;

const styles = StyleSheet.create({
  container: {
    flex: 1, // We'll learn about "flex" and other flexbox properties in class!
    flexDirection: "column", // Try: 'row' or 'column'
    alignItems: "center", // Try: 'flex-start' or 'center' or 'flex-end'
    justifyContent: "space-around", // Try: 'flex-start' or 'flex-end' or 'space-between' or 'space-around' or 'space evenly'
    backgroundColor: Themes.colors.background,
    padding: 8,
    borderColor: "green",
    borderWidth: 5,
  },
  /*
  smallerContainer: {
    flexDirection: "column", // Try: 'row' or 'column'
    alignItems: "center",
    borderColor: "red",
    borderWidth: 5,
  },
  */
  header: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  userPicContainer: {
    width: "100%",
    height: "30%",
    backgroundColor: Themes.colors.purple,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 20,
  },
  paragraph: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  linkText: {
    fontSize: 16,
    textAlign: "center",
  },
  userDetails: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  aboutMeContainer: {
    width: "100%",
    height: "25%",
    borderColor: "yellow",
    borderWidth: 5,
  },
  messageBox: {
    //justifyContent: "flex-end",
    borderColor: "yellow",
    borderWidth: 5,
  },
});
