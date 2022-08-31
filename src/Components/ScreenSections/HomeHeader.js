import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { globalStyles } from "../../GlobalStyles";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { layout } from "../../Utils";
import Colors from "../../Constants/Colors";

export const HomeHeader = () => {
  return (
    <View style={[globalStyles.rowBetween, styles.container]}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          backgroundColor: Colors.primaryBg,
          padding: layout.fontPixel(10),
          borderRadius: layout.fontPixel(7),
        }}
      >
        <FontAwesome name="align-left" size={20} color="balck" />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          backgroundColor: Colors.primaryBg,
          padding: layout.fontPixel(10),
          borderRadius: layout.fontPixel(7),
        }}
      >
        <Feather name="search" size={20} color="balck" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: layout.pixelSizeVertical(17),
  },
});
