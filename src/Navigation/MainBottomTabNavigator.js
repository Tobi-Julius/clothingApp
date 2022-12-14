import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Like, Home, User, Cart } from "../screens";
import Colors from "../constants/Colors";
import { FontAwesome, Ionicons, Entypo, Feather } from "@expo/vector-icons";

const Tabs = createMaterialBottomTabNavigator();

const MainBottomTabNavigator = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      labeled={false}
      barStyle={{
        backgroundColor: Colors.primaryColorLight,
      }}
      activeColor={Colors.secondaryColor}
      inactiveColor={"B6B6B6"}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={focused ? "ios-grid-sharp" : "ios-grid-outline"}
                size={20}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return focused ? (
              <Entypo name="shopping-bag" size={20} color={color} />
            ) : (
              <Feather name="shopping-bag" size={20} color={color} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Like"
        component={Like}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={focused ? "heart-sharp" : "heart-outline"}
                size={20}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return focused ? (
              <FontAwesome name="user" size={20} color={color} />
            ) : (
              <Feather name="user" size={20} color={color} />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default MainBottomTabNavigator;
