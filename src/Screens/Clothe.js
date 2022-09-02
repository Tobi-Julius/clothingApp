import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../globalStyles";
import { layout } from "../utils";
import { useRoute } from "@react-navigation/native";
import { Text } from "../components/common/Text";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { SharedElement } from "react-navigation-shared-element";
import { Sizes, ClotheColor } from "../components/ScreenSections";

export const Clothe = () => {
  const route = useRoute();

  const { id, uri, title, category, price } = route.params;

  return (
    <SafeAreaView
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: layout.pixelSizeVertical(55),
      }}
    >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          globalStyles.rowCenter,
          {
            width: layout.width * 0.93,
          },
        ]}
      >
        <View style={styles.bodyContainer}>
          <View style={styles.textContainer}>
            <SharedElement id={`item.${title}.title`}>
              <Text textStyle={styles.headerText} text={title} />
            </SharedElement>
            <SharedElement id={`item.${category}.category`}>
              <Text textStyle={styles.headerSubText} text={category} />
            </SharedElement>
          </View>
          <View style={[globalStyles.rowBetween, styles.imageSizeContainer]}>
            <SharedElement style={styles.image} id={`item.${uri}.image`}>
              <Image
                source={{ uri }}
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: layout.fontPixel(10),
                }}
              />
            </SharedElement>
            <Sizes />
          </View>
          <ClotheColor id={id} price={price} />
          <View
            style={[
              globalStyles.rowBetween,
              { marginVertical: layout.pixelSizeVertical(20) },
            ]}
          >
            <View style={[, styles.priceContainer]}>
              <View>
                <Text textStyle={styles.price} text="Price" />
              </View>
              <SharedElement id={`item.${price}.price`}>
                <Text
                  textStyle={styles.price$}
                  text={`$${parseInt(price).toFixed(2)}`}
                />
              </SharedElement>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              style={[globalStyles.rowCenter, styles.btn]}
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: layout.size.h1,
    fontFamily: "Nunito_700Bold",
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
    width: "80%",
    height: "100%",
  },
  footerContainer: {
    // marginVertical: layout.pixelSizeVertical(70),
  },
  btnText: {
    color: Colors.primaryBg,
    fontSize: layout.size.h2,
    fontFamily: "Nunito_700Bold",
  },
  btn: {
    backgroundColor: Colors.secondaryColor,
    paddingVertical: layout.pixelSizeVertical(10),
    paddingHorizontal: layout.pixelSizeHorizontal(15),
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
    fontSize: layout.size.h3,
    letterSpacing: 1,
  },
  price$: {
    fontSize: layout.size.h3,
    fontFamily: "Nunito_600SemiBold",
  },
});
