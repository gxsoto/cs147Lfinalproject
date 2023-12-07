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
import TryAgain from "../assets/TryAgain";
import EventSquare from "../assets/EventSquare";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Themes } from "../assets/Themes";
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
        console.log(response.data);
        if (response.data.page.totalElements == "0") {
          setEvent(null);
          console.log(events);
        } else {
          setEvent(response.data._embedded.events);
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

  useEffect(() => {
    //console.log(cityName);
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
  } else {
    contentDisplayed = <TryAgain />;
  }

  return (
    //<SafeAreaView style={styles.bigContainer}>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Link href={{ pathname: "/userState" }}>
            <Ionicons
              name="person-circle-sharp"
              size={40}
              color={Themes.colors.purple}
            />
          </Link>
          <View style={styles.search}>
            <TextInput
              style={styles.input}
              onChangeText={(newText) => setTyped(newText)}
              placeholder="Input a city name"
            />
            <Pressable onPress={() => setCityName(typed)}>
              <View>
                <Ionicons name="search" size={24} color="#AFEEEE" />
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.locateContainer}>
          <Link href={{ pathname: "/mapView" }}>
            <MaterialCommunityIcons
              name="map-marker-question"
              size={20}
              color="#3876BF"
            />
            <Text style={styles.locateText}>
              Click here to locate yourself and see major cities around!
            </Text>
          </Link>
        </View>
      </View>

      <View style={styles.content}>{contentDisplayed}</View>
    </View>
    //</SafeAreaView>
  );
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
    //backgroundColor: "#FFFAF0",
    //backgroundColor: "#696969",
    backgroundColor: Themes.colors.background,
    padding: 10,
    //width: "100%",
  },
  header: {
    height: "10%",
    width: "100%",
    flexDirection: "column",
    alignContent: "center",
  },
  headerTop: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locateContainer: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: "red",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "flex-start",
  },
  search: {
    //marginVertical: 15,
    height: "85%",
    //width: "90%",
    borderWidth: 10,
    borderColor: Themes.colors.purple,
    borderRadius: 10,
    backgroundColor: Themes.colors.purple,
    //justifyContent: "space-around",
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
  locateText: {
    fontSize: 14,
    color: "#3876BF",
    //marginHorizontal: 8,
    //paddingHorizontal: 8,
    // borderWidth: 2,
    // borderColor: "red",
  },
});
