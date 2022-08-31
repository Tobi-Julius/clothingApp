import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ClotheColor = () => {
  const colorsData = [
    {
      id: "1",
      color: "#FCCFA5",
      active: true,
    },
    {
      id: "2",
      color: "#D2D4DD",
      active: false,
    },
    {
      id: "3",
      color: "#E0D6CA",
      active: false,
    },
    {
      id: "4",
      color: "#F8A3A3",
      active: false,
    },
  ];
  return (
    <View>
      <Text>ClotheColor</Text>
    </View>
  );
};

export default ClotheColor;

const styles = StyleSheet.create({});
