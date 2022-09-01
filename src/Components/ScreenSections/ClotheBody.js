import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "../common/Text";
import { layout } from "../../Utils";
import Colors from "../../Constants/Colors";
import { globalStyles } from "../../GlobalStyles";
import { Sizes } from "./Sizes";
import { ClotheColor } from "./ClotheColor";
import { Footer } from "./Footer";

export const ClotheBody = ({ item }) => {
    
  const { id, uri, title, category, price } = item;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text textStyle={styles.headerText} text={title} />
        <Text textStyle={styles.headerSubText} text={category} />
      </View>
      <View style={[globalStyles.rowBetween, styles.imageSizeContainer]}>
        <Image source={{ uri }} resizeMode="cover" style={styles.image} />
        <Sizes />
      </View>
      <ClotheColor id={id} price={price} />
      <Footer price={price} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: layout.pixelSizeVertical(55),
  },
  headerText: {
    fontSize: layout.size.h1,
    fontFamily: "Nunito_700Bold",
    letterSpacing: 1,
  },
  headerSubText: {
    fontFamily: "Nunito_500Medium",
    fontSize: layout.size.h2,
    color: Colors.lightColor,
    letterSpacing: 1,
  },
  textContainer: {
    marginVertical: layout.pixelSizeVertical(25),
    flexDirection: "column",
    alignItems: "center",
  },
  imageSizeContainer: {
    height: layout.heightPixel(400),
  },
  image: {
    width: "78%",
    height: "100%",
    borderRadius: layout.fontPixel(7),
  },
});
