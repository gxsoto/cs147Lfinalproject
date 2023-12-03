import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import { Stack, Link } from "expo-router";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const userState = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "User State",
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
      <Text>
        This is where the edited profile will show up, the text below here will
        take you to the editing page
      </Text>
      <Link
        href={{
          pathname: "/userProfileView",
        }}
      >
        <Text style={styles.linkText}>Click on this text to move</Text>
      </Link>
    </View>
  );
};
export default userState;

const styles = StyleSheet.create({
  container: {
    flex: 1, // We'll learn about "flex" and other flexbox properties in class!
    flexDirection: "column", // Try: 'row' or 'column'
    alignItems: "center", // Try: 'flex-start' or 'center' or 'flex-end'
    justifyContent: "center", // Try: 'flex-start' or 'flex-end' or 'space-between' or 'space-around' or 'space evenly'
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
