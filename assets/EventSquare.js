import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const EventItem = ({ item, index }) => {
  const currEventName = item.name;
  const pic = item.images[0].url;
  return (
    <View style={styles.componentContainer}>
      <View style={styles.eventImageContainer}>
        <Image style={styles.eventImage} source={{ uri: pic }} />
      </View>
      <Text style={styles.eventName}> {item.name} </Text>
    </View>
  );
};
export default EventItem;

const styles = StyleSheet.create({
  componentContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: windowHeight * 0.1,
    width: windowWidth,
    marginBottom: 15,
    borderWidth: 5,
    borderColor: "red",
  },
  eventImageContainer: {
    height: "100%",
    width: "40%",
  },
  eventImage: {
    height: "100%",
    width: "100%",
  },
  eventName: {
    fontSize: 12,
  },
});
