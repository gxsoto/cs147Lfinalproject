import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const EventItem = ({ item, index }) => {
  const pic = item.images[0].url;
  return (
    <View style={styles.componentContainer}>
      <View style={styles.right}>
        <View style={styles.eventImageContainer}>
          <Image style={styles.eventImage} source={{ uri: pic }} />
        </View>
      </View>
      <View style={styles.left}>
        <View style={styles.eventNameContainer}>
          <Text numberOfLines={2} style={styles.eventName}>
            {item.name}
          </Text>
        </View>
        <View style={styles.eventLocatonContainer}>
          <Ionicons name="ios-location-sharp" size={18} color="black" />
          <Text style={styles.text}>{item._embedded.venues[0].name}</Text>
        </View>
        <View style={styles.day}>
          <Ionicons name="md-calendar-sharp" size={18} color="black" />
          <Text style={styles.text}>{item.dates.start.localDate}</Text>
        </View>
        <View style={styles.time}>
          <Ionicons name="time-sharp" size={18} color="black" />
          <Text style={styles.text}>{item.dates.start.localTime}</Text>
        </View>
      </View>
    </View>
  );
};
export default EventItem;

const styles = StyleSheet.create({
  componentContainer: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: windowHeight * 0.12,
    width: "100%",
    marginBottom: 15,
    borderWidth: 5,
    borderColor: "#DDA0DD",
    borderRadius: 20,
    backgroundColor: "#AFEEEE",
  },
  text: {
    paddingHorizontal: 7,
  },
  right: {
    flex: 1,
  },
  left: {
    flex: 1,
    // borderWidth: 5,
    // borderColor: "orange",
    //height: "100%",
    alignContent: "space-around",
  },
  eventImageContainer: {
    height: "100%",
    width: "100%",
  },
  eventImage: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderWidth: 5,
    borderColor: "yellow",
  },
  eventName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  eventNameContainer: {
    width: "100%",
    paddingHorizontal: 5,
    // borderWidth: 5,
    // borderColor: "yellow",
  },
  eventLocatonContainer: {
    // borderWidth: 5,
    // borderColor: "red",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  day: {
    // borderWidth: 5,
    // borderColor: "red",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  time: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },
});
