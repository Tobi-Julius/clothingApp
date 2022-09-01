import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "../common/Text";
import { globalStyles } from "../../globalStyles";
import { layout } from "../../utils";
import Colors from "../../constants/Colors";

export const CommonSection = ({ leftText }) => {
  return (
    <View style={[globalStyles.rowBetween, styles.container]}>
      <Text textStyle={styles.leftText} text={leftText} />
      <Text textStyle={styles.RightText} text="See all" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: layout.pixelSizeVertical(8),
  },
  leftText: {
    fontSize: layout.size.h1,
    fontFamily: "Nunito_600SemiBold",
    letterSpacing: 1,
    wordSpacing: 2,
  },
  RightText: {
    color: Colors.lightColor,
    fontSize: layout.size.h5,
    fontFamily: "Nunito_700Bold",
    letterSpacing: 1,
    wordSpacing: 2,
  },
});
