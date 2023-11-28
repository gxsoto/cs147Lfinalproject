import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Link } from "expo-router/";

// EXPORTING something we build!
export default function App() {
  //const welcomeMessage = "Welcome to CS 147L!";

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Main Screen</Text>
      <Link href={{ pathname: "/eventDescriptionView" }}>
        <Text style={styles.linkText}>
          Click on this text to go to an event's description page
        </Text>
      </Link>
      <Link href="/userProfileView">
        <Text style={styles.linkText}>
          Click on this text to go to your user's profile
        </Text>
      </Link>
    </View>
  );
}

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
