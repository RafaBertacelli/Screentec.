import { StatusBar } from "expo-status-bar";
import { Text, View, Button, Image, TextInput, TouchableOpacity } from "react-native";
import styles from './styles.js';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";



export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.LoginCaixa}>
        <View style={styles.LoginTitlulo}>
          <Text style={styles.titulo}>
            HOME
          </Text>
        </View>
        <View style={styles.LoginBotao}>
          <TouchableOpacity style={styles.botaoLogin}>
            <Text style={styles.textbotaoLogin}>FAÇA LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoLoginCadastreSe}>
            <Text style={styles.textbotaoLoginCadastreSe}>CADASTRE-SE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

}