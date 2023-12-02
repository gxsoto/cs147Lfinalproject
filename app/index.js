import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { Link } from "expo-router/";
import { useState, useEffect } from "react";
import axios from "axios";
import EventSquare from "../assets/EventSquare";
import SampleComp from "../assets/SampleComp";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native";
export default function App() {
  const [events, setEvent] = useState(null);
  const [cityName, setCityName] = useState("San Francisco");
  const [typed, setTyped] = useState("");

  const getEvents = () => {
    axios
      .get(
        "https://app.ticketmaster.com/discovery/v2/events.json?&apikey=0Q3pmWZ89wGOA7q25AdnFk7CGmkuZ0iA",
        { params: { city: cityName } }
      )
      .then((response) => {
        // handle success
        setEvent(response.data._embedded.events);
        console.log(events);
        console.log(cityName);
        // console.log(response.data._embedded.events);
        copyEvents = response.data._embedded.events;
        for (i in copyEvents) {
          console.log(copyEvents[i].images[0].url);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  //console.log(typedCity);
  // useEffect(() => {
  //   console.log(typed);
  // }, [typed]);

  useEffect(() => {
    console.log(cityName);
    getEvents();
  }, [cityName]);

  let contentDisplayed = null;

  if (events !== null) {
    contentDisplayed = (
      <FlatList
        data={events}
        renderItem={({ item, index }) => (
          <EventSquare item={item} index={index} />
        )}
      />
    );
  }

  return (
    //<SafeAreaView style={styles.bigContainer}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="person-circle-sharp" size={40} color="plum" />
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            onChangeText={(newText) => setTyped(newText)}
            placeholder="Input a city name"
            keyboardType="numeric"
          />
          <Pressable onPress={() => setCityName(typed)}>
            <View>
              <Ionicons name="search" size={24} color="#AFEEEE" />
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.content}>{contentDisplayed}</View>
    </View>
    //</SafeAreaView>
  );
}

{
  /* <View style={styles.container}>
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
      <TextInput
        style={styles.input}
        onChangeText={(newText) => setTyped(newText)}
        placeholder="Input a city name"
        keyboardType="numeric"
      />
      <Button
        onPress={() => setCityName(typed)}
        title="Submit"
        color="#841584"
      />
</View> */
}

const styles = StyleSheet.create({
  bigContainer: {
    width: "100%",
  },
  container: {
    flex: 1, // We'll learn about "flex" and other flexbox properties in class!
    flexDirection: "column", // Try: 'row' or 'column'
    alignItems: "center", // Try: 'flex-start' or 'center' or 'flex-end'
    justifyContent: "center", // Try: 'flex-start' or 'flex-end' or 'space-between' or 'space-around' or 'space evenly'
    backgroundColor: "#FFFAF0",
    //backgroundColor: "#696969",
    padding: 8,
    //width: "100%",
  },
  header: {
    height: "7%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 15,
  },
  search: {
    //marginVertical: 15,
    height: "85%",
    //width: "90%",
    borderWidth: 10,
    borderColor: "#DDA0DD",
    borderRadius: 10,
    backgroundColor: "#DDA0DD",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    height: "80%",
    width: "100%",
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
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    height: 40,
    width: 200,
  },
});
