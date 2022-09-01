import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { layout } from "../../Utils";
import { globalStyles } from "../../GlobalStyles";
import { Text } from "../common/Text";
import { BlurView } from "expo-blur";

export const Collection = () => {
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
      <ScrollView
        horizontal
        contentContainerStyle={{
          marginVertical: layout.pixelSizeVertical(15),
        }}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, index) => {
          return (
            <TouchableOpacity key={item.id} activeOpacity={0.7}>
              <ImageBackground
                resizeMode="cover"
                source={{ uri: item.uri }}
                style={[
                  globalStyles.columnEnd,
                  styles.image,
                  {
                    marginRight:
                      data.length === index + 1
                        ? 0
                        : layout.pixelSizeHorizontal(20),
                  },
                ]}
              >
                <BlurView
                  intensity={200}
                  style={[globalStyles.rowCenter, styles.blur]}
                >
                  <Text textStyle={styles.text} text={item.season} />
                </BlurView>
              </ImageBackground>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: layout.heightPixel(210),
    width: layout.widthPixel(150),
    borderRadius: layout.fontPixel(15),
  },
  text: {
    fontFamily: "Nunito_500Medium",
    fontSize: layout.size.h4,
  },
  blur: {
    height: "21%",
    width: "100%",
  },
});
