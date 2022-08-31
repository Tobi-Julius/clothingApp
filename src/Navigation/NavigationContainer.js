import React from "react";
import { NavigationContainer as MainNavigatorContainer } from "@react-navigation/native";
import RootNavigation from "./RootNavigation";

const NavigationContainer = () => {
  return (
    <MainNavigatorContainer>
      <RootNavigation />
    </MainNavigatorContainer>
  );
};

export default NavigationContainer;
