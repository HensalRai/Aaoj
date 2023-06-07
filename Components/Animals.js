import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import DropShadow from "react-native-drop-shadow";

// data
import { data } from "./data/Animals";

export const Animals = ({ navigation, add }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <Text
        style={{
          marginLeft: 10,
          fontWeight: "600",
          fontSize: 20,
          marginBottom: 10,
        }}
      >
        Animals
      </Text>
      <ScrollView horizontal={true} style={{}}>
        {data.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: "#D3C1D2",
                borderRadius: 20,
                width: 120,
                marginLeft: 5,
                marginRight: 5,
                flexWrap: "wrap",
                height: 140,
                padding: 10,
                alignItems: "center",
              }}
              onTouchEnd={() => {
                add((value) => value + item.name + " ");
              }}
            >
              <Image
                style={{ width: 100, height: 100 }}
                source={{ uri: item.image }}
              />
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
