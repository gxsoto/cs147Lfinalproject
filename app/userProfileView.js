import {
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
  Platform,
} from "react-native";
import * as React from "react";
import * as ImagePicker from "expo-image-picker";
import { router, Stack, Link } from "expo-router";
import { Avatar } from "@rneui/themed";
import { useState, useEffect } from "react";
import { TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const userProfileView = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [birthday, setBirthday] = useState("");
  const [image, setImage] = useState(
    "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk2NzY3MjA5ODc0MjY5ODI2/top-10-cutest-cat-photos-of-all-time.jpg"
  );

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    const loadName2 = async () => {
      const name = await AsyncStorage.getItem("name2");
      setName(name);
    };
    loadName2();
  }, []);

  useEffect(() => {
    const loadBday2 = async () => {
      const birthday = await AsyncStorage.getItem("birthday2");
      setBirthday(birthday);
    };
    loadBday2();
  }, []);

  useEffect(() => {
    const loadInterests2 = async () => {
      const interests = await AsyncStorage.getItem("interests2");
      setDescription(interests);
    };
    loadInterests2();
  }, []);

  useEffect(() => {
    const loadImage2 = async () => {
      const image = await AsyncStorage.getItem("image2");
      setImage(image);
    };
    loadImage2();
  }, []);

  useEffect(() => {
    const saveData2 = async () => {
      try {
        await AsyncStorage.setItem("name2", name);
        await AsyncStorage.setItem("birthday2", birthday);
        await AsyncStorage.setItem("interests2", description);
        await AsyncStorage.setItem("image2", image);
        console.log("save successful");
      } catch (error) {
        console.error(error);
      }
    };
    saveData2();
  }, [name, description, image, birthday]);

  /* Code below that reroutes to parent screen with updated state variables was implemented through the help of this StackOverflow post suggested by Peng: https://stackoverflow.com/questions/76183937/passing-params-with-router-back */
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Edit Profile",
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
      <View style={styles.userHeader}>
        <View styles={styles.userCircle}>
          <Avatar
            size="xlarge"
            rounded
            source={{
              uri: image,
            }}
          >
            <Avatar.Accessory size={35} onPress={pickImage} />
          </Avatar>
        </View>
      </View>
      <View style={styles.userName}>
        <Text style={styles.nameText}>Name: {name}</Text>

        <TextInput
          style={styles.box}
          mode="outlined"
          value={name}
          onChangeText={(newName) => setName(newName)}
          label="Input your name"
        />
      </View>

      <View style={styles.userBirthday}>
        <Text style={styles.birthdayText}>Birthday: {birthday}</Text>

        <TextInput
          style={styles.box}
          mode="outlined"
          label="Input your bday"
          value={birthday}
          onChangeText={(newbday) => setBirthday(newbday)}
        />
      </View>

      <View style={styles.userDescription}>
        <Text style={styles.descripText}>Description: {description}</Text>

        <TextInput
          style={styles.box}
          mode="outlined"
          onChangeText={(newDes) => setDescription(newDes)}
          value={description}
          label="Input a short decription of yourself"
        />
      </View>

      <View styles={styles.saveButton}>
        <Pressable
          style={styles.button}
          onPress={() => {
            router.replace({
              pathname: "/userState",
              params: {
                name: name,
                birthday: birthday,
                description: description,
                image: image,
              },
            });
          }}
        >
          <Text style={styles.saveText}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default userProfileView;

const styles = StyleSheet.create({
  container: {
    flex: 1, // We'll learn about "flex" and other flexbox properties in class!
    flexDirection: "column", // Try: 'row' or 'column'
    alignItems: "center", // Try: 'flex-start' or 'center' or 'flex-end'
    justifyContent: "flex-start", // Try: 'flex-start' or 'flex-end' or 'space-between' or 'space-around' or 'space evenly'
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
  userHeader: {
    borderColor: "red",
    borderWidth: 5,
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  userCircle: {
    borderColor: "red",
    borderWidth: 5,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    height: "60%",
    opacity: "50%",
    backgroundColor: "lightgray",

    paddingHorizontal: 8,
    justifyContent: "center",
  },
  userName: {
    borderColor: "red",
    borderWidth: 5,
    height: "10%",
    width: "100%",
  },
  userDescription: {
    borderColor: "red",
    borderWidth: 5,
    height: "15%",
    width: "100%",
  },
  descripText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userBirthday: {
    borderColor: "red",
    borderWidth: 5,
    height: "10%",
    width: "100%",
  },
  birthdayText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  saveButton: {
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
  box: {
    flex: 1,
  },
});
