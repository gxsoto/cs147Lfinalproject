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
import { Themes } from "../assets/Themes";

const userProfileView = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [birthday, setBirthday] = useState("");
  const [image, setImage] = useState(
    "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk2NzY3MjA5ODc0MjY5ODI2/top-10-cutest-cat-photos-of-all-time.jpg"
  );
  const [identity, setIdentity] = useState("");
  const [aboutMe, setAboutMe] = useState("");

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
    const loadIdentity2 = async () => {
      const identity = await AsyncStorage.getItem("identity2");
      setIdentity(identity);
    };
    loadIdentity2();
  }, []);

  useEffect(() => {
    const loadAbout2 = async () => {
      const about = await AsyncStorage.getItem("about2");
      setAboutMe(about);
    };
    loadAbout2();
  }, []);

  useEffect(() => {
    const saveData2 = async () => {
      try {
        if (name) {
          await AsyncStorage.setItem("name2", name);
        }
        if (birthday) {
          await AsyncStorage.setItem("birthday2", birthday);
        }
        if (description) {
          await AsyncStorage.setItem("interests2", description);
        }
        if (image) {
          await AsyncStorage.setItem("image2", image);
        }
        if (aboutMe) {
          await AsyncStorage.setItem("about2", aboutMe);
        }
        if (identity) {
          await AsyncStorage.setItem("identity2", identity);
        }
        //await AsyncStorage.setItem("name2", name);
        //await AsyncStorage.setItem("birthday2", birthday);
        //await AsyncStorage.setItem("interests2", description);
        //await AsyncStorage.setItem("image2", image);
        //await AsyncStorage.setItem("about2", aboutMe);
        await AsyncStorage.setItem("identity2", identity);
        console.log("save successful");
      } catch (error) {
        console.error(error);
      }
    };
    saveData2();
  }, [name, description, image, birthday, aboutMe, identity]);

  /* Code below that reroutes to parent screen with updated state variables was implemented through the help of this StackOverflow post suggested by Peng: https://stackoverflow.com/questions/76183937/passing-params-with-router-back */
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Edit Profile",
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
        <Text style={styles.nameText}>Name:</Text>

        <TextInput
          style={styles.box}
          mode="outlined"
          value={name}
          onChangeText={(newName) => setName(newName)}
          label="Input Your Name!"
        />
      </View>

      <View style={styles.userBirthday}>
        <Text style={styles.birthdayText}>Birthday:</Text>

        <TextInput
          style={styles.box}
          mode="outlined"
          label="Input Your Birthday!"
          value={birthday}
          onChangeText={(newbday) => setBirthday(newbday)}
        />
      </View>

      <View style={styles.userDescription}>
        <Text style={styles.descripText}>Interests:</Text>

        <TextInput
          style={styles.box}
          mode="outlined"
          onChangeText={(newDes) => setDescription(newDes)}
          value={description}
          label="Input 3-4 Interests!"
        />
      </View>

      <View style={styles.userName}>
        <Text style={styles.birthdayText}>Identity:</Text>

        <TextInput
          style={styles.box}
          mode="outlined"
          label="Input An Identity You Align With!"
          value={identity}
          onChangeText={(newIdentity) => setIdentity(newIdentity)}
        />
      </View>

      <View style={styles.userAboutMe}>
        <Text style={styles.descripText}>About Me:</Text>

        <TextInput
          style={styles.box}
          mode="outlined"
          onChangeText={(newAbout) => setAboutMe(newAbout)}
          value={aboutMe}
          label="Input a short Description ABout Yourself"
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
                identity: identity,
                aboutMe: aboutMe,
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
    backgroundColor: Themes.colors.background,
    paddingHorizontal: 10,
    //borderWidth: 5,
    //borderColor: "red",
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
    //borderColor: "red",
    //borderWidth: 5,
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    //borderWidth: 5,
    //borderColor: "red",
  },
  userCircle: {
    //borderColor: "red",
    //borderWidth: 5,
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
    //borderColor: "red",
    //borderWidth: 5,
    height: "10%",
    width: "100%",
  },
  userDescription: {
    //borderColor: "red",
    //borderWidth: 5,
    height: "15%",
    width: "100%",
  },
  descripText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userBirthday: {
    //borderColor: "red",
    //borderWidth: 5,
    height: "10%",
    width: "100%",
  },
  birthdayText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  saveButton: {
    //borderColor: "orange",
    //borderWidth: 5,
    height: "40%",
    width: "100%",
  },
  saveText: {
    fontSize: 22,
    color: "gray",
  },
  button: {
    paddingTop: 5,
    //borderColor: "red",
    // borderWidth: 5,
  },
  box: {
    flex: 1,
  },
  userAboutMe: {
    //borderColor: "red",
    //orderWidth: 5,
    height: "15%",
    width: "100%",
  },
  userIdentity: {
    //borderColor: "red",
    //borderWidth: 5,
    height: "15%",
    width: "100%",
  },
});
