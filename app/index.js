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
  const [string, setString] = useState("");
  let stringOfCoords = "";

  /* Axios resources that helped us understand AP calls: https://www.geeksforgeeks.org/axios-in-react-a-guide-for-beginners/ ;
  https://blog.logrocket.com/understanding-axios-get-requests/  */
  const getEvents = () => {
    axios
      .get(
        "https://app.ticketmaster.com/discovery/v2/events.json?&apikey=0Q3pmWZ89wGOA7q25AdnFk7CGmkuZ0iA&locale=*&size=30",
        { params: { city: cityName } }
      )
      .then((response) => {
        // handle success
        console.log(response.data);
        if (response.data.page.totalElements == "0") {
          setEvent(null);
          //console.log(events);
        } else {
          setEvent(response.data._embedded.events);
          stringOfCoords = "";
          copyEvents = response.data._embedded.events;
          for (i in copyEvents) {
            stringOfCoords +=
              copyEvents[i]._embedded.venues[0].location.longitude;
            stringOfCoords += "$";
            stringOfCoords +=
              copyEvents[i]._embedded.venues[0].location.latitude;
            stringOfCoords += "$";
            stringOfCoords += copyEvents[i].name;
            stringOfCoords += "$";
            stringOfCoords += copyEvents[i].images[0].url;
            stringOfCoords += "$";
            stringOfCoords += copyEvents[i].dates.start.localDate;
            stringOfCoords += "$";
            stringOfCoords += copyEvents[i].dates.start.localTime;
            stringOfCoords += ";";
            //console.log(stringOfCoords);
          }
          setString(stringOfCoords);
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
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Link href={{ pathname: "/userState" }}>
            <Ionicons
              name="person-circle-sharp"
              size={53}
              color={Themes.colors.darkShade}
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
                <Ionicons
                  name="search"
                  size={25}
                  color={Themes.colors.darkShade}
                />
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.locateContainer}>
          <Link href={{ pathname: "/mapView", params: { string: string } }}>
            <MaterialCommunityIcons
              name="map-marker-question"
              size={20}
              color="#3876BF"
            />
            <Text numberOfLines={2} style={styles.locateText}>
              Click here to see major cities or events in a city searched!
            </Text>
          </Link>
        </View>
      </View>
      <View style={styles.content}>{contentDisplayed}</View>
    </View>
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
    backgroundColor: Themes.colors.background,
    padding: 10,
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
    paddingHorizontal: 10,
  },
  locateContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  search: {
    resizeMode: "contain",
    height: "85%",
    width: "85%",
    borderRadius: 10,
    backgroundColor: Themes.colors.boxBackground,
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
    height: "100%",
    width: "85%",
    margin: 7,
    padding: 15,
  },
  button: {
    height: 40,
    width: 200,
  },
  locateText: {
    fontSize: 14,
    color: "#3876BF",
  },
});
