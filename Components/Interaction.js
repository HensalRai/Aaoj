import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TextInputBase,
  Button,
} from "react-native";
import { Animals } from "./Animals";
import { Fruits } from "./Fruits";
import { Pronounce } from "./Pronounce";
import { Verbs } from "./Verbs";

import * as Speech from "expo-speech";
import { Questions } from "./Questions";

export const Interaction = ({ navigation }) => {
  let [value, setValue] = React.useState("");

  const playAudio = () => {
    console.log(value);
    Speech.speak(value);
  };
  return (
    <View style={{ flex: 2, flexDirection: "column" }}>
      <TextInput
        style={{
          marginTop: 10,
          marginBottom: 10,
          marginHorizontal: 10,
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderWidth: 2,
          borderColor: "#444",
          borderRadius: 5,
        }}
        value={value}
        editable={false}
      ></TextInput>
      <View
        style={{
          marginHorizontal: 10,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View style={{ width: 60, flex: 1 }}>
          <Button
            style={{ flex: 3, fontSize: 40 }}
            onPress={() => {
              setValue("");
            }}
            title="❌"
          />
        </View>
        <View style={{ width: 80, flex: 1 }}>
          <Button style={{ flex: 3 }} onPress={playAudio} title="Play" />
        </View>
      </View>
      <ScrollView style={{ marginTop: 10 }}>
        <Questions add={setValue} />
        <Pronounce add={setValue} />
        <Verbs add={setValue} />
        <Fruits add={setValue} />
        <Animals add={setValue} />
      </ScrollView>
    </View>
  );
};
