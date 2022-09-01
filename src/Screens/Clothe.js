import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../globalStyles";
import { layout } from "../utils";
import { ClotheBody } from "../components/ScreenSections";
import { useRoute } from "@react-navigation/native";

export const Clothe = () => {
  const route = useRoute();
  const item = route.params;

  return (
    <View style={globalStyles.rowCenter}>
      <SafeAreaView style={[globalStyles.rowCenter, styles.container]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ClotheBody item={item} />
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
