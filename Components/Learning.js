import React from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";

export default function Learning({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "#e6e6fa" }}>
      <View style={styles.container}>
        <View style={styles.contain}>
          <Text style={{ fontSize: 40 }}>Learning</Text>
        </View>
        <View
          style={styles.container2}
          onTouchEnd={() => navigation.navigate("EnglishAlphabets")}
        >
          <Image
            source={require("../assets/eng.jpg")}
            style={{
              width: 300,
              height: 200,
              top: 20,
              borderRadius: 10,
              marginLeft: 25,
            }}
          />
          <Text style={styles.text1}>English alphabets</Text>
        </View>

        <View
          style={styles.container2}
          onTouchEnd={() => navigation.navigate("NepaliAlphabate")}
        >
          <Image
            source={require("../assets/nep1.jpg")}
            style={{
              width: 300,
              height: 200,
              top: 20,
              borderRadius: 10,
              marginLeft: 25,
            }}
          />
          <Text style={styles.text1}>Nepali Alphabets</Text>
        </View>

        <View
          style={styles.container3}
          onTouchEnd={() => navigation.navigate("NeplaiNumbers")}
        >
          <Image
            source={require("../assets/num.jpg")}
            style={{
              width: 300,
              height: 200,
              top: 20,
              borderRadius: 10,
              marginLeft: 25,
            }}
          />
          <Text style={styles.text1}>Numbers</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 16,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    // height: 1500,
  },

  text1: {
    fontSize: 35,
    fontStyle: "roboto",
    top: 25,
    marginBottom: 20,
    alignSelf: "center",
  },

  text2: {
    fontSize: 30,
    fontStyle: "roboto",
    // top: 15,
    alignSelf: "center",
    // marginLeft: 10,
  },

  container2: {
    flex: 1,
    backgroundColor: "#E5D2C4",
    // alignItems: 'center',
    // justifyContent: 'center',
    height: 300,
    width: 350,
    marginTop: 30,
    borderRadius: 20,
  },

  container3: {
    flex: 1,
    backgroundColor: "#E5D2C4",
    // alignItems: 'center',
    // justifyContent: 'center',
    height: 300,
    width: 350,
    marginTop: 30,
    borderRadius: 20,
    marginBottom: 20,
  },

  contain: {
    flex: 1,
  },
});
