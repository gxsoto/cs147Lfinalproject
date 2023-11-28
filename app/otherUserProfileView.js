import { StyleSheet, View, Dimensions, Text } from "react-native";
import * as React from "react";
import { Stack, Link } from "expo-router";

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
      <Text style={styles.paragraph}>
        Here will be a user's profile with their info, interests, etc + can send
        user a message
      </Text>
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
    justifyContent: "center", // Try: 'flex-start' or 'flex-end' or 'space-between' or 'space-around' or 'space evenly'
    backgroundColor: "#ecf0f1",
    padding: 8,
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
