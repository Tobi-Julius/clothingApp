import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { layout } from "../../utils";
import Colors from "../../constants/Colors";

export const ClotheColor = () => {
  const [colorId, setColorId] = React.useState("1");

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

  const handlePress = (id) => {
    setColorId(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        {colorsData.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => handlePress(item.id)}
              activeOpacity={0.6}
              style={styles.colorContainer}
              key={item.id}
            >
              <View
                style={[
                  styles.circle,
                  {
                    borderColor: item.color,
                    backgroundColor:
                      colorId === item.id ? item.color : "transparent",
                  },
                ]}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: layout.pixelSizeVertical(60),
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    width: "85%",
    height: layout.heightPixel(50),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circle: {
    borderWidth: 10,
    borderRadius: layout.fontPixel(25),
    padding: layout.pixelSizeHorizontal(12),
  },
  colorContainer: {
    borderRadius: layout.fontPixel(10),
    justifyContent: "center",
    backgroundColor: Colors.primaryColorLight,
    paddingVertical: layout.pixelSizeVertical(30),
    paddingHorizontal: layout.pixelSizeHorizontal(10),
  },
});
