import {
  ImageBackground,
  StyleSheet,
  View,
  Image as IconImage,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Text } from "../Components/common/Text";
import { Image } from "../Constants/Image";
import { Icon } from "../Constants/Icon";
import { Ionicons } from "@expo/vector-icons";
import { layout } from "../Utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../GlobalStyles";
import Colors from "../Constants/Colors";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";

export const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        source={Image.onboarding}
        style={[styles.imageBackground, globalStyles.rowCenter]}
      >
        <SafeAreaView style={styles.areaView}>
          <BlurView
            intensity={150}
            style={[globalStyles.rowCenter, styles.blurBackground]}
          >
            <Text textStyle={styles.topText} text="26 new arrivals" />
            <IconImage source={Icon.fire} style={styles.fireIcon} />
          </BlurView>

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
    width: layout.width * 0.87356,
    height: layout.height,
  },
  fireIcon: {
    width: layout.widthPixel(20),
    height: layout.heightPixel(20),
    marginLeft: layout.pixelSizeHorizontal(6),
  },
  topText: {
    color: Colors.primaryBg,
    fontSize: layout.size.h2,
    fontFamily: "Nunito_700Bold",
  },
  blurBackground: {
    width: layout.widthPixel(210),
    height: layout.heightPixel(65),
    borderRadius: layout.fontPixel(10),
    marginVertical: layout.pixelSizeVertical(36),
  },
  imageBackground: {
    width: layout.width,
    height: layout.height,
    resizeMode: "contain",
  },
  bottomTextContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: layout.heightPixel(380),
  },
  midText: {
    fontFamily: "Nunito_700Bold",
    fontSize: layout.fontPixel(55),
    letterSpacing: 1,
    wordSpacing: 2,
    color: Colors.primaryBg,
  },
  skipBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: layout.pixelSizeVertical(80),
  },
  skipText: {
    color: Colors.primaryBg,
    fontFamily: "Nunito_700Bold",
    fontSize: layout.size.h2,
    padding: layout.pixelSizeHorizontal(15),
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
});
