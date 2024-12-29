import React from "react";
import { View, Text } from "react-native";

export default function ResultImc(props) {
  return(
    <View>
      <Text>IMC: {props.resultImc}</Text>
      <Text>Classificação: {props.msgResultImc}</Text>
    </View>
  );
}