import React from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";

export function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container0}>
          <Image
            source={require("../assets/home.jpg")}
            style={{ width: 395, height: 900, right: 2 }}
          />
        </View>

        <View
          style={styles.container1}
          onTouchEnd={() => navigation.navigate("Interaction")}
        >
          <Image
            source={require("../assets/Interaction.jpg")}
            style={{ width: 450, left: 10, height: 300 }}
          />
        </View>
        <View
          style={styles.container2}
          onTouchEnd={() => navigation.navigate("Learning")}
        >
          <Image
            source={require("../assets/learning.jpg")}
            style={{
              width: 450,
              left: 10,
              left: 29,
              marginBottom: 10,
              height: 300,
            }}
          />
        </View>
        <View
          style={styles.container3}
          onTouchEnd={() => navigation.navigate("Helpline")}
        >
          <Image
            source={require("../assets/Helpline.jpg")}
            style={{ width: 400, marginBottom: 20, height: 300 }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // logo: {
  //   uri: 'https://reactnative.dev/img/tiny_logo.png',
  //   width: 64,
  //   height: 64
  // },

  container: {
    flex: 16,
    // backgroundColor: "red",
    alignItems: "center",
    //justifyContent: "center",
    // height: 200,
  },

  text: {
    fontSize: 50,
    fontStyle: "roboto",
  },

  text1: {
    position: "absolute",
    fontSize: 40,
    fontStyle: "roboto",
    paddingLeft: 10,
    paddingRight: 20,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 20,
    opacity: 80,
  },

  container1: {
    flex: 1,
    // backgroundColor: "brown",
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    width: 500,
  },

  container2: {
    flex: 1,
    // backgroundColor: '#EED6C2',
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 500,
  },

  container3: {
    flex: 1,
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    width: 500,
  },

  container0: {
    flex: 3,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: 900,
  },
});
