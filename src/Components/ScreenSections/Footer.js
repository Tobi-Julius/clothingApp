import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Text } from "../common/Text";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../globalStyles";
import { layout } from "../../utils";
import Colors from "../../constants/Colors";
import { SharedElement } from "react-native-shared-element";

export const Footer = ({ price }) => {
  return (
    <View style={[styles.container, globalStyles.rowBetween]}>
      <SharedElement id={`item.${price}.$price`}>
        <Text textStyle={styles.price} text="Price" />
        <Text textStyle={styles.price$} text={`$${price}`} />
      </SharedElement>

      <TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[globalStyles.rowBetween, styles.btn]}
          onPress={() => {}}
        >
          <Ionicons
            name="cart"
            size={20}
            style={styles.btnIcon}
            color="white"
          />
          <Text text="Add to cart" textStyle={styles.btnText} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: layout.pixelSizeVertical(25),
  },
  btnText: {
    color: Colors.primaryBg,
    fontSize: layout.size.h2,
    fontFamily: "Nunito_700Bold",
  },
  btn: {
    backgroundColor: Colors.secondaryColor,
    paddingVertical: layout.pixelSizeVertical(15),
    paddingHorizontal: layout.pixelSizeHorizontal(25),
    borderRadius: layout.fontPixel(15),
  },
  btnIcon: {
    backgroundColor: Colors.lightColor,
    padding: 8,
    borderRadius: 100 / 2,
    marginRight: layout.pixelSizeHorizontal(15),
  },
  price: {
    color: Colors.lightColor,
    fontFamily: "Nunito_700Bold",
    fontSize: layout.size.h2,
    letterSpacing: 1,
  },
  price$: {
    fontSize: layout.size.h2,
    fontFamily: "Nunito_700Bold",
    letterSpacing: 1,
  },
});
