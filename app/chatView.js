import { StyleSheet, View, Dimensions, Text } from "react-native";
import * as React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const chatView = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Chat",
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
      <View style={styles.otherUser}>
        <Ionicons name="person-circle-sharp" size={30} color="black" />
        <Text style={styles.paragraph}>User Name</Text>
      </View>

      <View style={styles.leftMessage}></View>
    </View>
  );
};

export default chatView;

const styles = StyleSheet.create({
  container: {
    flex: 1, // We'll learn about "flex" and other flexbox properties in class!
    flexDirection: "column", // Try: 'row' or 'column'
    alignItems: "center", // Try: 'flex-start' or 'center' or 'flex-end'
    //justifyContent: "center", // Try: 'flex-start' or 'flex-end' or 'space-between' or 'space-around' or 'space evenly'
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    fontSize: 20,
    fontWeight: "bold",
    //textAlign: "center",
  },
  otherUser: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "plum",
    borderWidth: 5,
  },
  leftMessage: {
    //alignItems: "flex-end",
    //justifyContent: "flex-end",
    width: "60%",
    height: "10%",
    borderColor: "green",
    borderWidth: 5,
  },
});
