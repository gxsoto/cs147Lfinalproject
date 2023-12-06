import { StyleSheet, View, Dimensions, Text } from "react-native";
import * as React from "react";
import { Stack, Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
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
        <Ionicons name="person-circle-sharp" size={200} color="#ecf0f1" />
        <Text style={styles.paragraph}> User Name</Text>
      </View>
      <Link href="/chatView">
        <Text style={styles.linkText}>
          Click on this text to send the user a message
        </Text>
      </Link>
    </View>
  );
};

export default otherUserProfileView;

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
    textAlign: "center",
  },
  userPicContainer: {
    width: "100%",
    height: "30%",
    backgroundColor: "plum",
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
});
