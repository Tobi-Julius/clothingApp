import {
  ImageBackground,
  StyleSheet,
  View,
  Image as IconImage,
} from "react-native";
import React from "react";
import { Text } from "../Components/common/Text";
import { Image } from "../Constants/Image";
import { Icon } from "../Constants/Icon";
import { layout } from "../Utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../GlobalStyles";
import Colors from "../Constants/Colors";
import { BlurView } from "expo-blur";

export const Onboarding = () => {
  return (
    <View>
      <ImageBackground source={Image.onboarding} style={styles.imageBackground}>
        <SafeAreaView>
          <BlurView
            intensity={100}
            style={[globalStyles.rowCenter, styles.blurBackground]}
          >
            <Text textStyle={styles.topText} text="26 new arrivals" />
            <IconImage source={Icon.fire} style={styles.fireIcon} />
          </BlurView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
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
    height: layout.heightPixel(70),
    marginLeft: layout.pixelSizeHorizontal(30),
    marginTop: layout.pixelSizeVertical(30),
    borderWidth: 1,
    borderColor: "red",
  },
  imageBackground: {
    width: layout.width,
    height: layout.height,
    resizeMode: "contain",
  },
});
