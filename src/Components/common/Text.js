import { Text as MainText } from "react-native";
import React from "react";

export const Text = ({ text, textStyle }) => {
  return <MainText style={[textStyle]}>{text}</MainText>;
};
