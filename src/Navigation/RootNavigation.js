import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Onboarding, Clothe } from "../Screens";
import MainBottomTabNavigator from "./MainBottomTabNavigator";
import { TouchableOpacity } from "react-native";
import { globalStyles } from "../GlobalStyles";
import { layout } from "../Utils";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../Constants/Colors";

const MainStack = createSharedElementStackNavigator();

const RootNavigation = () => {
  const navigation = useNavigation();
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Onboarding" component={Onboarding} />
      <MainStack.Screen
        name="MainBottomTabNavigator"
        component={MainBottomTabNavigator}
      />
      <MainStack.Screen
        name="Clothe"
        component={Clothe}
        sharedElements={(route) => {
          const { id } = route.params;
          return [
            {
              id: `item.${id}.image`,
              animation: "fade-in",
              resize: "clip",
              align: "left-center",
            },
          ];
        }}
        options={{
          headerTransparent: true,
          backgroundColor: "red",
          headerShown: true,
          
          animation: "slide_from_right",
          animationDuration: 400,
          animationTypeForReplace: "push",
          customAnimationOnGesture: true,
          title: "",
          presentation: "card",
          cardStyleInterpolator: ({ current, next }) => {
            const opacity = current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: "clamp",
            });
            next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                  extrapolate: "clamp",
                })
              : 0;
            return {
              cardStyle: {
                opacity,
              },
            };
          },
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
              style={[
                globalStyles.rowCenter,
                {
                  marginLeft: layout.pixelSizeVertical(15),
                  backgroundColor: Colors.primaryColorLight,
                  padding: layout.pixelSizeVertical(10),
                  borderRadius: layout.fontPixel(7),
                },
              ]}
            >
              <Ionicons name="arrow-back" size={20} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
              style={[
                globalStyles.rowCenter,
                {
                  marginRight: layout.pixelSizeVertical(15),
                  backgroundColor: Colors.primaryColorLight,
                  padding: layout.pixelSizeVertical(10),
                  borderRadius: layout.fontPixel(7),
                },
              ]}
            >
              <Ionicons name="ios-cart-outline" size={20} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </MainStack.Navigator>
  );
};

export default RootNavigation;
