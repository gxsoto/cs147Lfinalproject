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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const userState = () => {
  //define useState here
  const params = useLocalSearchParams();
  const [copyName, setCopyName] = useState("");
  const [copyBday, setCopyBday] = useState("");
  const [copyDescription, setCopyDes] = useState("");
  const [copyImage, setCopyImage] = useState("");

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
    const saveData = async () => {
      try {
        await AsyncStorage.setItem("userName", params.name);
        await AsyncStorage.setItem("userBday", params.birthday);
        await AsyncStorage.setItem("userInterests", params.description);
        await AsyncStorage.setItem("userImage", params.image);
        setCopyImage(params.image);
        setCopyName(params.name);
        setCopyBday(params.birthday);
        setCopyDes(params.description);
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
          headerTintColor: "#665A48", // this is how to change the color of the back arrow
          headerStyle: {
            backgroundColor: "#ECE3CE",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#665A48",
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
                <Text style={styles.nameTextName}>Name:</Text>
              </View>
            </View>
            <Text style={styles.nameText}>{copyName}</Text>
          </View>
          <View style={styles.userName}>
            <View style={styles.nameheader}>
              <FontAwesome name="birthday-cake" size={24} color="#739072" />
              <View style={styles.textContainer}>
                <Text style={styles.nameTextBirthday}>Birthday:</Text>
              </View>
            </View>
            <Text style={styles.nameText}>{copyBday}</Text>
          </View>
          <View style={styles.userName}>
            <View style={styles.nameheader}>
              <FontAwesome name="heart" size={24} color="#4F6F52" />
              <View style={styles.textContainer}>
                <Text style={styles.nameTextInterests}>Interests:</Text>
              </View>
            </View>
            <Text style={styles.nameText}>{copyDescription}</Text>
          </View>
          <View style={styles.userName}>
            <View style={styles.nameheader}>
              <FontAwesome5 name="transgender-alt" size={24} color="#3A4D39" />
              <View style={styles.textContainer}>
                <Text style={styles.nameTextIdentity}>Identity:</Text>
              </View>
            </View>
            <Text style={styles.nameText}>{copyDescription}</Text>
          </View>
        </View>
      </View>
      <Text>
        NAME: {copyName} BDAY:
        {copyBday} INTERESTS: {copyDescription}
      </Text>

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
    backgroundColor: "#EDE4E0",
    padding: 8,
    paddingHorizontal: 40,
    borderColor: "red",
    borderWidth: 5,
  },
  smallerContainer: {
    borderColor: "purple",
    borderWidth: 5,
    width: "100%",
    height: "70%",
  },
  info: {
    borderColor: "orange",
    borderWidth: 5,
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
  },
  editButton: {
    borderColor: "orange",
    borderWidth: 5,
    height: "40%",
    width: "100%",
  },
  saveText: {
    fontSize: 25,
    color: "gray",
  },
  button: {
    borderColor: "red",
    borderWidth: 5,
  },
  userHeader: {
    borderColor: "red",
    borderWidth: 5,
    height: "30%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  userCircle: {
    // borderColor: "red",
    // borderWidth: 5,
  },
  userName: {
    borderColor: "green",
    borderWidth: 5,
    backgroundColor: "#ECE3CE",
    borderRadius: 20,
    height: "25%",
    width: "100%",
    justifyContent: "center",
  },
  nameheader: {
    flexDirection: "row",
    alignItems: "center",
    // borderColor: "yellow",
    // borderWidth: 5,
    paddingHorizontal: 5,
  },
  textContainer: {
    paddingHorizontal: 10,
    // borderColor: "orange",
    // borderWidth: 5,
  },
  nameTextName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#A9B388",
  },
  nameTextBirthday: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#739072",
  },
  nameTextIdentity: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3A4D39",
  },
  nameTextInterests: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4F6F52",
  },
  nameText: {
    color: "#665A48",
    fontSize: 24,
    fontWeight: "bold",
  },
});
