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
        <Text style={styles.paragraph}>Maya</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightMessage}>
          <Text style={styles.rightParagraph}>
            {" "}
            Hey I heard about this new exhibit at the museum. Would you be
            interested in going?
          </Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.leftContainer}>
        <View style={styles.leftMessage}>
          <Text style={styles.leftParagraph}>
            Hi! I'm doing great, thanks. The museum sounds like a fantastic
            idea! What's the exhibit called?
          </Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightMessage}>
          <Text style={styles.rightParagraph}>
            {" "}
            It's called "Metamorphosis." Thinking of going on Saturday
            afternoon. What do you think?
          </Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.leftContainer}>
        <View style={styles.leftMessage}>
          <Text style={styles.leftParagraph}>
            Saturday works for me. What time are you thinking, and should we
            grab lunch before?
          </Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightMessage}>
          <Text style={styles.rightParagraph}>
            {" "}
            Awesome! Let's meet at the museum around 2 PM. And, lunch before
            sounds good!
          </Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.leftContainer}>
        <View style={styles.leftMessage}>
          <Text style={styles.leftParagraph}>
            Perfect! How about trying that new vegetarian place downtown?
          </Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightMessage}>
          <Text style={styles.rightParagraph}>
            {" "}
            Love the idea! The vegetarian spot it is. Looking forward to the art
            and good company!
          </Text>
          <View style={styles.messageBox}></View>
        </View>
      </View>
      <View style={styles.leftContainer}>
        <View style={styles.leftMessage}>
          <Text style={styles.leftParagraph}>
            Likewise! Can't wait. Hope you have a geat day and I'll see you on
            Saturday! 🎨✨
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
