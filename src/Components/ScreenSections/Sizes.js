import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Sizes = () => {
    const sizesData = [
      {
        id: "1",
        size: "S",
        active: true,
      },
      {
        id: "2",
        size: "M",
        active: false,
      },
      {
        id: "3",
        size: "L",
        active: false,
      },
      {
        id: "4",
        size: "XL",
        active: false,
      },
    ];
  return (
    <View>
      <Text>Sizes</Text>
    </View>
  )
}

export default Sizes

const styles = StyleSheet.create({})