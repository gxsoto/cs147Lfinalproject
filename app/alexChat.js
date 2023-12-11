import { StyleSheet, View, Dimensions, Text, SafeAreaView } from "react-native";
import * as React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Themes } from "../assets/Themes";
import { FontAwesome } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const chatView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "Chat",
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
      <View style={styles.otherUser}>
        <Ionicons
          name="person-circle-sharp"
          size={30}
          color={Themes.colors.background}
        />
        <Text style={styles.paragraph}>Alex</Text>
      </View>
      <View style={styles.leftContainer}>
        <View style={styles.leftMessage}>
          <Text style={styles.leftParagraph}>
            {" "}
            No yea I've been trying to go out more often. It's why I've been
            trying to find stuff I like lol
          </Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightMessage}>
          <Text style={styles.rightParagraph}>
            {" "}
            Omg no same! What's something you're really passionate about right
            now?
          </Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.leftContainer}>
        <View style={styles.leftMessage}>
          <Text style={styles.leftParagraph}>
            Lately, I've been diving into sustainable living practices. It's
            been a journey, but I love it
          </Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightMessage}>
          <Text style={styles.rightParagraph}>
            {" "}
            That's awesome! Any specific changes you've made that you found
            particularly rewarding?
          </Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.leftContainer}>
        <View style={styles.leftMessage}>
          <Text style={styles.leftParagraph}>
            I've started composting, and it's surprisingly satisfying to see
            less waste in the trash!
          </Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightMessage}>
          <Text style={styles.rightParagraph}>
            {" "}
            Composting is a great step! Also, do you have a favorite subgenre of
            jazz?
          </Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.leftContainer}>
        <View style={styles.leftMessage}>
          <Text style={styles.leftParagraph}>
            Jazz is a big part of my life and lately I've been exploring more
            contemporary artists. Hbu?
          </Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightMessage}>
          <Text style={styles.rightParagraph}>
            {" "}
            I'm into contemporary jazz too! We should swap playlists sometime!
          </Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.writeMessage}>
        <Text> Write a Message!</Text>
        <FontAwesome
          name="arrow-circle-up"
          size={24}
          color={Themes.colors.medShade}
        />
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
    justifyContent: "space-around", // Try: 'flex-start' or 'flex-end' or 'space-between' or 'space-around' or 'space evenly'
    backgroundColor: Themes.colors.background,
    padding: 8,
    padding: 5,
    width: "100%",
  },
  leftParagraph: {
    fontSize: 20,
    fontWeight: "bold",
    color: Themes.colors.darkShade,
  },
  rightParagraph: {
    fontSize: 20,
    fontWeight: "bold",
    color: Themes.colors.background,
  },
  otherUser: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Themes.colors.lightShade,
  },
  leftContainer: {
    width: "100%",
    height: 85,
    marginTop: 5,
  },
  leftMessage: {
    flexDirection: "row",
    width: "70%",
    backgroundColor: Themes.colors.boxBackground,
    borderRadius: 10,
  },
  rightContainer: {
    width: "100%",
    height: 85,
    marginTop: 5,
    alignItems: "flex-end",
  },
  rightMessage: {
    flexDirection: "row",
    width: "70%",
    backgroundColor: Themes.colors.medShade,
    borderRadius: 10,
  },
  messageBox: {
    width: "100%",
    height: 80,
  },
  writeMessage: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: Themes.colors.lightShade,
    borderWidth: 2,
    borderRadius: 10,
    width: "100%",
    height: "5%",
  },
  paragraph: {
    fontSize: 14,
    color: Themes.colors.background,
  },
});
