import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { layout } from "../../utils";
import Colors from "../../constants/Colors";
import { Text } from "../common/Text";

export const Sizes = () => {
  const [isItemId, setIsItemId] = React.useState("1");
  const sizesData = [
    {
      id: "1",
      size: "S",
      active: true,
    },
    {
      id: "2",
      size: "M",
      active: false,
    },
    {
      id: "3",
      size: "L",
      active: false,
    },
    {
      id: "4",
      size: "XL",
      active: false,
    },
  ];
  const handlePress = (id) => {
    setIsItemId(id);
  };
  return (
    <View style={[styles.container]}>
      {sizesData.map((item, index) => {
        return (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => handlePress(item.id)}
            key={item.id}
          >
            <Text
              textStyle={[
                styles.text,
                {
                  backgroundColor:
                    item.id === isItemId
                      ? Colors.secondaryColor
                      : Colors.primaryColorLight,
                },
              ]}
              text={item.size}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: layout.heightPixel(280),
    backgroundColor: Colors.primaryBg,
    width: layout.widthPixel(60),
    borderRadius: layout.fontPixel(45),
    justifyContent: "space-between",
  },
  text: {
    color: Colors.lightColor,
    fontSize: layout.size.h3,
    fontFamily: "Nunito_700Bold",
    padding: layout.pixelSizeHorizontal(20),
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: layout.fontPixel(60),
    shadowColor: Colors.lightColor,
    shadowOffset: {
      width: layout.widthPixel(40),
      height: layout.heightPixel(40),
    },
    shadowOpacity: 0.1,
    shadowRadius: layout.fontPixel(2),
    elevation: 10,
  },
});
