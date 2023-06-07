import React from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";

// data
import { data } from "./data/nepaliKaKha";

export const NepaliAlphabate = ({ navigation }) => {
  return (
    <ScrollView>
      <Text style={{ fontSize: 40, marginTop: 10 }}>Nepali Alphabate</Text>
      <View style={styles.container}>
        {data.map((data, index) => {
          return (
            <View key={index} style={styles.box}>
              <Image
                style={{ width: 155, height: 155, margin: 5, marginBottom: 0 }}
                source={data.url}
              />
              <Text style={{ fontSize: 50, textAlign: "center" }}>
                {data.eng_text}
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "space-between", // ignore this - we'll come back to it
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    marginTop: 10,
    backgroundColor: "#e6e6fa",
    borderRadius: 10,
  },
});
