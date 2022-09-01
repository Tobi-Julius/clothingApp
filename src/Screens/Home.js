import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import {
  CommonSection,
  HomeHeader,
  Arrivals,
  Collection,
} from "../components/ScreenSections";
import { layout } from "../utils";
import { globalStyles } from "../globalStyles";

export const Home = () => {
  return (
    <View style={[globalStyles.rowCenter]}>
      <SafeAreaView
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        <ScrollView>
          <HomeHeader />
          <CommonSection leftText="New Arrival" />
          <Arrivals />
          <CommonSection leftText="Collection" />
          <Collection />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: layout.width * 0.92,
  },
});
