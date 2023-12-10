import { StyleSheet, View, Dimensions, Text, SafeAreaView } from "react-native";
import * as React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Themes } from "../assets/Themes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const chatView = () => {
  return (
    <SafeAreaView style={styles.container}>
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
        <Ionicons
          name="person-circle-sharp"
          size={30}
          color={Themes.colors.background}
        />
        <Text style={styles.paragraph}>User Name</Text>
      </View>
      <View style={styles.leftContainer}>
        <View style={styles.leftMessage}>
          <Text style={styles.leftParagraph}>Test</Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightMessage}>
          <Text style={styles.rightParagraph}> Test</Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.leftContainer}>
        <View style={styles.leftMessage}>
          <Text style={styles.leftParagraph}>Test</Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightMessage}>
          <Text style={styles.rightParagraph}> Test</Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.leftContainer}>
        <View style={styles.leftMessage}>
          <Text style={styles.leftParagraph}>Test</Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightMessage}>
          <Text style={styles.rightParagraph}> Test</Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.leftContainer}>
        <View style={styles.leftMessage}>
          <Text style={styles.leftParagraph}>Test</Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightMessage}>
          <Text style={styles.rightParagraph}> Test</Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default chatView;

const styles = StyleSheet.create({
  container: {
    flex: 1, // We'll learn about "flex" and other flexbox properties in class!
    flexDirection: "column", // Try: 'row' or 'column'
    alignItems: "center", // Try: 'flex-start' or 'center' or 'flex-end'
    //justifyContent: "center", // Try: 'flex-start' or 'flex-end' or 'space-between' or 'space-around' or 'space evenly'
    backgroundColor: Themes.colors.background,
    padding: 8,
    borderColor: "red",
    borderWidth: 5,
    padding: 5,
    width: "100%",
  },
  leftParagraph: {
    fontSize: 20,
    fontWeight: "bold",
    color: Themes.colors.darkShade,
    //textAlign: "center",
  },
  rightParagraph: {
    fontSize: 20,
    fontWeight: "bold",
    color: Themes.colors.background,
    //textAlign: "center",
  },
  otherUser: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: Themes.colors.purple,
    borderWidth: 5,
    backgroundColor: Themes.colors.lightShade,
  },
  leftContainer: {
    width: "100%",
    height: 90,
    //borderColor: "yellow",
    //borderWidth: 5,
    marginTop: 5,
    //justifyContent: "flex-end",
    //alignItems: "flex-end",
  },
  leftMessage: {
    flexDirection: "row",
    //marginRight: windowWidth * 0.3,
    width: "70%",
    //marginTop: 10,
    backgroundColor: Themes.colors.boxBackground,
    borderRadius: 10,
  },
  rightContainer: {
    width: "100%",
    height: 90,
    //borderColor: "yellow",
    //borderWidth: 5,
    marginTop: 5,
    //justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  rightMessage: {
    flexDirection: "row",
    //marginLeft: windowWidth * 0.3,
    width: "70%",
    //marginTop: 10,
    backgroundColor: Themes.colors.medShade,
    borderRadius: 10,
  },
  messageBox: {
    //alignItems: "flex-end",
    //justifyContent: "flex-end",
    width: "100%",
    height: 80,
    //borderColor: "green",
    //borderWidth: 5,
    //borderRadius: 10,
  },
});
