import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { CommonSection, HomeHeader } from "../Components/ScreenSections";
import { layout } from "../Utils";
import { globalStyles } from "../GlobalStyles";

export const Home = () => {
  return (
    <View style={[globalStyles.rowCenter]}>
      <SafeAreaView style={[globalStyles.rowCenter, styles.container]}>
        <ScrollView>
          <HomeHeader />
          <CommonSection leftText="New Arrival" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: layout.width * 0.87356,
  },
});
