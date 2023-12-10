import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import { Stack, Link, useLocalSearchParams, router } from "expo-router";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Avatar } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Themes } from "../assets/Themes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const userState = () => {
  //define useState here
  const params = useLocalSearchParams();
  const [copyName, setCopyName] = useState("Name Here");
  const [copyBday, setCopyBday] = useState("Birthday Here");
  const [copyDescription, setCopyDes] = useState("Interests Here");
  const [copyImage, setCopyImage] = useState(
    "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk2NzY3MjA5ODc0MjY5ODI2/top-10-cutest-cat-photos-of-all-time.jpg"
  );
  const [copyIdentity, setCopyIdentity] = useState("Identity Here");
  const [copyAbout, setCopyAbout] = useState("About Me Here");

  useEffect(() => {
    const loadName = async () => {
      const name = await AsyncStorage.getItem("userName");
      setCopyName(name);
    };
    loadName();
  }, []);

  useEffect(() => {
    const loadBday = async () => {
      const birthday = await AsyncStorage.getItem("userBday");
      setCopyBday(birthday);
    };
    loadBday();
  }, []);

  useEffect(() => {
    const loadInterests = async () => {
      const interests = await AsyncStorage.getItem("userInterests");
      setCopyDes(interests);
    };
    loadInterests();
  }, []);

  useEffect(() => {
    const loadImage = async () => {
      const image = await AsyncStorage.getItem("userImage");
      setCopyImage(image);
    };
    loadImage();
  }, []);

  useEffect(() => {
    const loadIdentity = async () => {
      const identity = await AsyncStorage.getItem("userIdentity");
      setCopyIdentity(identity);
    };
    loadIdentity();
  }, []);

  useEffect(() => {
    const loadAbout = async () => {
      const about = await AsyncStorage.getItem("userAboutMe");
      setCopyAbout(about);
    };
    loadAbout();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem("userName", params.name);
        await AsyncStorage.setItem("userBday", params.birthday);
        await AsyncStorage.setItem("userInterests", params.description);
        await AsyncStorage.setItem("userImage", params.image);
        await AsyncStorage.setItem("userIdentity", params.identity);
        await AsyncStorage.setItem("userAboutMe", params.aboutMe);
        setCopyImage(params.image);
        setCopyName(params.name);
        setCopyBday(params.birthday);
        setCopyDes(params.description);
        setCopyAbout(params.aboutMe);
        setCopyIdentity(params.identity);
        console.log("save successful");
      } catch (error) {
        console.error(error);
      }
    };
    saveData();
  }, [params.name, params.birthday, params.description, params.image]);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Your Profile",
          headerTintColor: Themes.colors.darkShade, // this is how to change the color of the back arrow
          headerStyle: {
            backgroundColor: "#ECE3CE",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: Themes.colors.darkShade,
          },
        }}
      />
      <View style={styles.smallerContainer}>
        <View style={styles.userHeader}>
          <View styles={styles.userCircle}>
            <Avatar
              size="xlarge"
              rounded
              source={{
                uri: copyImage,
              }}
            ></Avatar>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.userName}>
            <View style={styles.nameheader}>
              <Ionicons name="person" size={24} color="#A9B388" />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>Name:</Text>
              </View>
            </View>
            <View style={styles.nameBottom}>
              <Text style={styles.nameText}>{copyName}</Text>
            </View>
          </View>
          <View style={styles.userName}>
            <View style={styles.nameheader}>
              <FontAwesome
                name="birthday-cake"
                size={24}
                color={Themes.colors.lightShade}
              />
              <View style={styles.textContainer}>
                <Text style={styles.nameTextBirthday}>Birthday:</Text>
              </View>
            </View>
            <View style={styles.nameBottom}>
              <Text style={styles.nameText}>{copyBday}</Text>
            </View>
          </View>
          <View style={styles.userName}>
            <View style={styles.nameheader}>
              <FontAwesome
                name="heart"
                size={24}
                color={Themes.colors.medShade}
              />
              <View style={styles.textContainer}>
                <Text style={styles.nameTextInterests}>Interests:</Text>
              </View>
            </View>
            <View style={styles.nameBottom}>
              <Text style={styles.nameText}>{copyDescription}</Text>
            </View>
          </View>
          <View style={styles.userName}>
            <View style={styles.nameheader}>
              <FontAwesome5
                name="transgender-alt"
                size={24}
                color={Themes.colors.darkShade}
              />
              <View style={styles.textContainer}>
                <Text style={styles.nameTextIdentity}>Identity:</Text>
              </View>
            </View>
            <View style={styles.nameBottom}>
              <Text style={styles.nameText}>{copyIdentity}</Text>
            </View>
          </View>

          <View style={styles.userName}>
            <View style={styles.nameheader}>
              <Ionicons name="information-circle" size={24} color="black" />
              <View style={styles.textContainer}>
                <Text style={styles.nameTextIdentity}>About Me:</Text>
              </View>
            </View>
            <View style={styles.nameBottom}>
              <Text numberOfLines={2} style={styles.aboutText}>
                {copyAbout}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View styles={styles.editButton}>
        <Pressable
          style={styles.button}
          onPress={() => {
            router.replace({
              pathname: "/userProfileView",
            });
          }}
        >
          <Text style={styles.saveText}>edit profile</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default userState;

const styles = StyleSheet.create({
  container: {
    flex: 1, // We'll learn about "flex" and other flexbox properties in class!
    flexDirection: "column", // Try: 'row' or 'column'
    alignItems: "center", // Try: 'flex-start' or 'center' or 'flex-end'
    alignContent: "center",
    justifyContent: "center", // Try: 'flex-start' or 'flex-end' or 'space-between' or 'space-around' or 'space evenly'
    backgroundColor: Themes.colors.background,
    padding: 8,
    paddingHorizontal: 40,
    //borderColor: "purple",
    //orderWidth: 5,
  },
  smallerContainer: {
    //borderColor: "green",
    //borderWidth: 5,
    width: "100%",
    height: "80%",
  },
  info: {
    //borderColor: "orange",
    //borderWidth: 5,
    //borderWidth: 5,
    //borderColor: "blue",
    width: "100%",
    justifyContent: "space-around",
    height: "70%",
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    //borderWidth: 5,
    //borderColor: "orange",
  },
  editButton: {
    //borderColor: "orange",
    //borderWidth: 5,
    height: "40%",
    width: "100%",
  },
  saveText: {
    fontSize: 23,
    color: "gray",
  },
  button: {
    //borderColor: "red",
    //borderWidth: 5,
  },
  userHeader: {
    //borderColor: "red",
    //borderWidth: 5,
    height: "30%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    //marginVertical: 10,
  },
  userCircle: {
    // borderColor: "red",
    // borderWidth: 5,
  },
  userName: {
    //borderColor: "green",
    //borderWidth: 5,
    //borderColor: "yellow",
    //borderWidth: 5,
    backgroundColor: "#ECE3CE",
    borderRadius: 20,
    height: "18%",
    width: "100%",
    justifyContent: "center",
  },
  nameheader: {
    flexDirection: "row",
    alignItems: "center",
    //borderColor: "yellow",
    //borderWidth: 5,
    paddingHorizontal: 10,
    width: "100%",
    height: "50%",
  },
  nameBottom: {
    width: "100%",
    height: "50%",
    //paddingHorizontal: 10,
    //borderColor: "yellow",
    //borderWidth: 5,
    flexDirection: "row",
    //alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 10,
    //borderColor: "orange",
    //borderWidth: 5,
  },
  nameTextName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#A9B388",
    //borderColor: "orange",
    //borderWidth: 5,
  },
  nameTextBirthday: {
    fontSize: 22,
    fontWeight: "bold",
    color: Themes.colors.lightShade,
  },
  nameTextIdentity: {
    fontSize: 22,
    fontWeight: "bold",
    color: Themes.colors.darkShade,
  },
  nameTextInterests: {
    fontSize: 22,
    fontWeight: "bold",
    color: Themes.colors.medShade,
  },
  nameText: {
    color: "#665A48",
    fontSize: 22,
    fontWeight: "bold",
    //borderColor: "orange",
    //borderWidth: 5,
    paddingHorizontal: 10,
  },
  aboutText: {
    color: "#665A48",
    fontSize: 12,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
});
