import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultImc(props) {

  const onShare = async () => {
    const result = await Share.share({
      message: `Meu IMC hoje é: ${props.resultImc}`
    });
  };  
  
  return (
    
    <View style={styles.contextImc}>

      <View style={styles.boxSharedButton}>

      <Text style={styles.information}>{props.messageResultImc}</Text>
      <Text style={styles.numberImc}>{props.resultImc}</Text>
    

      {props.resultImc != null ?
  
      <TouchableOpacity onPress={onShare} style={styles.buttonShare}>
        <Text style={styles.sharedText}>Compartilhar?</Text>
      </TouchableOpacity>
      :
      <View/>
      }
      </View>
     
    </View>
    
  );
 
};
