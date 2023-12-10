import { StyleSheet, View, Dimensions, Text, SafeAreaView } from "react-native";
import * as React from "react";
import { Stack, Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Themes } from "../assets/Themes";
const otherUserProfileView = () => {
  return (
    <SafeAreaView style={styles.container}>
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
        <Ionicons
          name="person-circle-sharp"
          size={200}
          color={Themes.colors.darkShade}
        />
        <Text style={styles.header}> User Name</Text>
      </View>
      <Text style={styles.header}> User Info</Text>
      <View style={styles.userInfo}>
        <View style={styles.userDetails}>
          <FontAwesome
            name="birthday-cake"
            size={24}
            color={Themes.colors.darkShade}
          />
          <Text style={styles.paragraph}>Birthday: </Text>
        </View>
        <View style={styles.userDetails}>
          <FontAwesome5
            name="transgender-alt"
            size={24}
            color={Themes.colors.darkShade}
          />
          <Text style={styles.paragraph}>Identity: </Text>
        </View>
        <View style={styles.userDetails}>
          <Ionicons
            name="location-sharp"
            size={24}
            color={Themes.colors.darkShade}
          />
          <Text style={styles.paragraph}>Distance: </Text>
        </View>
        <View style={styles.userDetails}>
          <FontAwesome name="heart" size={24} color={Themes.colors.darkShade} />
          <Text style={styles.paragraph}>Interests: </Text>
        </View>
      </View>
      <Text style={styles.header}> About Me</Text>

      <View style={styles.aboutMeContainer}>
        <Text style={styles.paragraph}>
          Some bio info that the user put for themselves{" "}
        </Text>
      </View>

      <View style={styles.messageBox}>
        <Link href="/chatView">
          <Ionicons
            name="chatbox-ellipses"
            size={24}
            color={Themes.colors.darkShade}
          />
          <Text style={styles.linkText}>Chat with User</Text>
        </Link>
      </View>
    </SafeAreaView>
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
    color: Themes.colors.darkShade,
  },
  userPicContainer: {
    width: "100%",
    height: "30%",
    backgroundColor: Themes.colors.boxBackground,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
    borderColor: Themes.colors.lightShade,
    borderWidth: 5,
    padding: 5,
  },
  paragraph: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: Themes.colors.darkShade,
  },
  linkText: {
    fontSize: 16,
    textAlign: "center",
    color: Themes.colors.darkShade,
  },
  userInfo: {
    height: "25%",
    width: "100%",
    justifyContent: "space-around",
    borderWidth: 5,
    borderColor: Themes.colors.lightShade,
    backgroundColor: Themes.colors.boxBackground,
    borderRadius: 10,
    padding: 5,
  },
  userDetails: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    //borderWidth: 2,
    //borderColor: "red",
    //paddingHorizontal: 5,
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
    alignItems: "center",
  },
});
