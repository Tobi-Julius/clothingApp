import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { layout } from "../../utils";
import { globalStyles } from "../../globalStyles";
import Colors from "../../constants/Colors";
import { Text } from "../common/Text";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const Arrivals = () => {
  const data = [
    {
      id: "1",
      uri: "https://images.unsplash.com/photo-1603252109303-2751441dd157?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800",
      title: "Long Sleeve T Shirt",
      price: "100",
      category: "Shirt",
    },
    {
      id: "2",
      uri: "https://images.unsplash.com/photo-1562157873-818bc0726f68?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927",
      title: "Sleeve T Shirt",
      price: "250",
      category: "Short Shirt",
    },
    {
      id: "3",
      uri: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800",
      title: "Short Sleeve T Shirt",
      price: "180",
      category: "Sweater",
    },
    {
      id: "4",
      uri: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015",
      title: "Plain Short Sleeve T Shirt",
      price: "470",
      category: "Short Shirt",
    },
  ];

  const navigation = useNavigation();
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginVertical: layout.pixelSizeVertical(15),
        }}
      >
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Clothe", { ...item })}
              activeOpacity={0.7}
              key={item.id}
              style={[
                styles.clotheBox,
                {
                  marginRight:
                    data.length === index + 1
                      ? 0
                      : layout.pixelSizeHorizontal(30),
                },
              ]}
            >
              <Image
                resizeMode="cover"
                source={{ uri: item.uri }}
                style={[globalStyles.rowStart, styles.image]}
              />
              <View
                style={[globalStyles.rowBetween, styles.iconPriceContainer]}
              >
                <View style={[globalStyles.rowBetween, { width: "100%" }]}>
                  <View>
                    <Text textStyle={styles.title} text={item.title} />
                    <Text textStyle={styles.price} text={`$${item.price}`} />
                  </View>
                  <View>
                    <AntDesign
                      name="heart"
                      style={styles.icon}
                      size={20}
                      color={Colors.primaryColorLight}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  clotheBox: {
    height: layout.heightPixel(380),
    width: layout.widthPixel(250),
    backgroundColor: Colors.primaryBg,
    borderRadius: layout.fontPixel(10),
    alignItems: "center",
  },
  image: {
    height: layout.heightPixel(300),
    width: layout.widthPixel(232),
    marginVertical: layout.pixelSizeVertical(10),
    borderRadius: layout.fontPixel(10),
  },
  iconPriceContainer: {
    width: layout.widthPixel(232),
    height: layout.heightPixel(50),
  },
  title: {
    fontFamily: "Nunito_700Bold",
    fontSize: layout.size.h5,
  },
  price: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: layout.size.h5,
    color: Colors.lightColor,
    marginVertical: layout.pixelSizeVertical(5),
  },
  icon: {
    backgroundColor: "red",
    padding: layout.fontPixel(9),
    borderRadius: 100 / 2,
    shadowColor: "red",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: layout.fontPixel(2),
    elevation: 10,
  },
});
