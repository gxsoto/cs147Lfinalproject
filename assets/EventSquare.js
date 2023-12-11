import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Themes } from "./Themes";

import { Link } from "expo-router";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const EventItem = ({ item, index }) => {
  const eventName = item.name;
  const pic = item.images[0].url;
  //const eventPromoter = item._embedded.promoter.name;
  const eventType = item.classifications[0].segment.name;
  const eventSubType = item.classifications[0].genre.name;
  const eventDate = item.dates.start.localDate;
  //const priceMin = item._embedded.priceRanges[0].min;
  //const priceMax = item.priceRanges[0].max;
  const eventVenue = item._embedded.venues[0].name;
  const eventWebsite = item.url;
  //console.log(item);
  //console.log(item.description);
  return (
    <SafeAreaView>
      <Link
        href={{
          pathname: "/eventDescriptionView",
          params: {
            name: eventName,
            eventPic: pic,
            eventDeets: eventDate,
            type: eventType,
            subType: eventSubType,
            //promoter: eventPromoter,
            //ticketPriceMin: priceMin,
            //ticketPriceMax: priceMax,
            venue: eventVenue,
            website: eventWebsite,
          },
        }}
        asChild
      >
        <Pressable>
          <View style={styles.componentContainer}>
            <View style={styles.eventImageContainer}>
              <Image style={styles.eventImage} source={{ uri: pic }} />
            </View>
            <View style={styles.eventNameContainer}>
              <Text numberOfLines={2} style={styles.eventName}>
                {item.name}
              </Text>
            </View>
          </View>
        </Pressable>
      </Link>
    </SafeAreaView>
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
    borderColor: Themes.colors.lightShade,
    borderRadius: 20,
    backgroundColor: Themes.colors.boxBackground,
  },
  text: {
    paddingHorizontal: 7,
    color: "#4F6F52",
  },
  right: {
    flex: 1,
  },
  left: {
    flex: 1,
    alignContent: "space-around",
  },
  eventImageContainer: {
    height: "100%",
    width: "40%",
  },
  eventImage: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  eventName: {
    fontSize: 16,
    fontWeight: "bold",
    color: Themes.colors.darkShade,
  },
  eventNameContainer: {
    width: "60%",
    paddingHorizontal: 5,
  },
  eventLocatonContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  day: {
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
