import { StyleSheet, View, Dimensions, Text } from "react-native";
import * as React from "react";
import { Stack, Link } from "expo-router";

const eventDescriptionView = () => {
  return (
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
      <Text style={styles.paragraph}>
        Here will be the event, description, who's going, and a link to it's
        actual website
      </Text>
      <Link href={{ pathname: "/eventWebView" }}>
        <Text style={styles.linkText}>
          Click on this text to go to an event's actual website, will be a
          random one for now
        </Text>
      </Link>

      <Text style={styles.linkText}>
        Click on the seal to view a person's profile
      </Text>
      <Link href={{ pathname: "/otherUserProfileView" }}>
        <Text style={styles.seal}>🦭</Text>
      </Link>
    </View>
  );
};

export default eventDescriptionView;

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
  seal: {
    fontSize: 40,
  },
});
