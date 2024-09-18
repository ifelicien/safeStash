import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { defaultStyles } from "../constants/Styles";

const index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/safeStash-bkg.png")}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.header1}>Safe Stash</Text>
          </View>

          <View style={styles.button}>
            <Link
              href={"./app"}
              style={[
                defaultStyles.pillButtonSmall,
                { fontSize: 22, fontWeight: "500", backgroundColor: "gray" },
              ]}
              asChild
            >
              <TouchableOpacity>
                <Text>Enter Here</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    marginTop:90,
    justifyContent: 'center',
  },
  header1: {
    fontSize: 30,
    fontWeight: "800",
    textTransform: "uppercase",
    textAlign: "center",
    color: "black",
  },
  button: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});

export default index;
