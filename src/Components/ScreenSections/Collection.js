import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Collection = () => {
  const data = [
    {
      id: "1",
      season: "Spring",
      uri: "https://images.unsplash.com/photo-1593955808003-93f6151e6028?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nJTIwc2Vhc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800",
    },
    {
      id: "2",
      season: "Winter",
      uri: "https://images.unsplash.com/photo-1547580134-a523397c723c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyJTIwc2Vhc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800",
    },
    {
      id: "3",
      season: "Summer",
      uri: "https://images.unsplash.com/photo-1554871037-99938249e220?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VtbWVyJTIwc2Vhc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800",
    },
  ];
  return (
    <View>
      <Text>Collection</Text>
    </View>
  );
};

export default Collection;

const styles = StyleSheet.create({});
