import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

// data
import { data } from "./data/Pronounce";

export const Pronounce = ({ navigation, add }) => {
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
        Pronounce
      </Text>
      <ScrollView horizontal={true} style={{}}>
        {data.map((item, index) => {
          return (
            <View
              key={item.id}
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
              <Text
                style={{
                  fontSize: 30,
                  marginTop: 40,
                  marginLeft: 30,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {item.name}{" "}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
