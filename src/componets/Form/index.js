import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o Peso e a Altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    const heightValue = parseFloat(height.replace(",", "."));
    const weightValue = parseFloat(weight.replace(",", "."));
    return setImc((weightValue / (heightValue * heightValue)).toFixed(2));
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é: ");
      setTextButton("Calcular Novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o Peso e a Altura");
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex: 1.75"
          keyboardType="numeric"
        />
        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex: 65.30"
          keyboardType="numeric"
        />
        <Button onPress={validationImc} title={textButton} />
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
