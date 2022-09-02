import {
  ImageBackground,
  StyleSheet,
  View,
  Image as IconImage,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Text } from "../components/common/Text";
import { Image } from "../constants/Image";
import { Icon } from "../constants/Icon";
import { Ionicons } from "@expo/vector-icons";
import { layout } from "../utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../globalStyles";
import Colors from "../constants/Colors";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";

export const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <View style={[{ flex: 1 }]}>
      <ImageBackground
        resizeMode="cover"
        source={Image.onboarding}
        style={[globalStyles.rowCenter, { width: "100%", height: "100%" }]}
      >
        <SafeAreaView style={styles.areaView}>
          <View
            style={{
              height: layout.height * 0.45,
            }}
          >
            <BlurView
              intensity={150}
              style={[globalStyles.rowCenter, styles.blurBackground]}
            >
              <Text textStyle={styles.topText} text="26 new arrivals" />
              <IconImage source={Icon.fire} style={styles.fireIcon} />
            </BlurView>
          </View>

          <View style={styles.bottomTextContainer}>
            <Text textStyle={styles.midText} text="With old new clothes" />
            <View style={[styles.skipBtn, globalStyles.rowBetween]}>
              <Text textStyle={styles.skipText} text="Skip" />
              <TouchableOpacity
                activeOpacity={0.7}
                style={[globalStyles.rowBetween, styles.btn]}
                onPress={() => navigation.navigate("MainBottomTabNavigator")}
              >
                <Ionicons
                  name="arrow-forward-sharp"
                  size={20}
                  style={styles.btnIcon}
                  color="white"
                />
                <Text text="Get Started" textStyle={styles.btnText} />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  areaView: {
    width: layout.width * 0.92,
    height: layout.height,
  },
  fireIcon: {
    width: layout.widthPixel(20),
    height: layout.heightPixel(20),
    marginLeft: layout.pixelSizeHorizontal(6),
  },
  topText: {
    color: Colors.primaryBg,
    fontSize: layout.size.h3,
    fontFamily: "Nunito_700Bold",
  },
  blurBackground: {
    paddingVertical: layout.pixelSizeVertical(18),
    maxWidth: layout.widthPixel(210),
    borderRadius: layout.fontPixel(10),
    marginVertical: layout.pixelSizeVertical(46),
  },
  bottomTextContainer: {
    height: layout.height * 0.5,
    justifyContent: "flex-end",
  },
  midText: {
    fontFamily: "Nunito_700Bold",
    fontSize: layout.fontPixel(39),
    letterSpacing: 1,
    wordSpacing: 2,
    color: Colors.primaryBg,
  },
  skipBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: layout.pixelSizeVertical(50),
  },
  skipText: {
    color: Colors.primaryBg,
    fontFamily: "Nunito_700Bold",
    fontSize: layout.size.h2,
    // padding: layout.pixelSizeHorizontal(15),
  },
  btnText: {
    color: Colors.primaryBg,
    fontSize: layout.size.h2,
    fontFamily: "Nunito_700Bold",
  },
  btn: {
    backgroundColor: Colors.secondaryColor,
    paddingVertical: layout.pixelSizeVertical(15),
    paddingHorizontal: layout.pixelSizeHorizontal(15),
    borderRadius: layout.fontPixel(15),
  },
  btnIcon: {
    backgroundColor: Colors.lightColor,
    padding: 8,
    borderRadius: 100 / 2,
    marginRight: layout.pixelSizeHorizontal(15),
  },
});
