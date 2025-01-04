//Aula 4-2
import React, { useState } from "react";
import { 
  View,
  Vibration,
  Text, 
  TextInput, 
  TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {

  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o Peso e a Altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);

  function verificationImc() {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessage("Campo obrigatório*");
    }}

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
      setErrorMessage(null);
      return;
    }
    verificationImc();
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o Peso e a Altura");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        < Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput 
          style={styles.formInput}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex: 1.75"
          keyboardType="numeric"
        />
        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput 
          style={styles.formInput}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex: 65.30"
          keyboardType="numeric"
        />
       <TouchableOpacity style={styles.ButtonCalculator}
        onPress={()=>{validationImc()
        }}>
        <Text style={styles.textButtonCalculator}>{textButton}</Text>
       </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
