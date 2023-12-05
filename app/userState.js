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
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const userState = () => {
  //define useState here
  const params = useLocalSearchParams();
  const [copyName, setCopyName] = useState();

  useEffect(() => {
    const loadName = async () => {
      const name = await AsyncStorage.getItem(userName);
      console.log(name);
      setCopyName(copyName);
    };
    loadName();
  }, []);

  useEffect(() => {
    const loadBday = async () => {
      const birthday = await AsyncStorage.getItem(userBday);
      console.log(birthday);
      //setCart(JSON.parse(data));
    };
    loadBday();
  }, []);

  useEffect(() => {
    const loadInterests = async () => {
      const interests = await AsyncStorage.getItem(userInterests);
      console.log(interests);
      //setCart(JSON.parse(data));
    };
    loadInterests();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem(userName, params.name);
        await AsyncStorage.setItem(userBday, params.birthday);
        await AsyncStorage.setItem(userInterests, params.description);
        console.log("save successful");
      } catch (error) {
        console.error(error);
      }
    };
    saveData();
  }, [params.name, params.birthday, params.description]);

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
        take you to the editing page Name: {params.name} Bday: {params.birthday}{" "}
        Description: {params.description}
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
});
