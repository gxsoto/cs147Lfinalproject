import { StyleSheet, View, Dimensions, Text } from "react-native";
import * as React from "react";
import { WebView } from "react-native-webview";
import { Stack } from "expo-router";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const eventWebView = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Event's Website",
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
      <WebView
        style={styles.webCont}
        source={{ uri: "https://hci.cs.stanford.edu/courses/cs147l/2023/au/" }}
      />
    </View>
  );
};

export default eventWebView;

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
  },
  webCont: {
    height: windowHeight,
    width: windowWidth,
  },
});
