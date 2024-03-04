import { StatusBar } from "expo-status-bar";
import { Text, View, Button, Image, TextInput, TouchableOpacity } from "react-native";
import styles from './styles.js';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import pipoca from './../../../images/pipoca.png';
import entrar from './../../../images/entrar.png';
import cadastrar from './../../../images/cadastro.png';
import { useFonts, Oswald_600SemiBold, Oswald_200ExtraLight, Oswald_300Light} from '@expo-google-fonts/oswald';


export default function Login() {

  const [fonteLoaded] = useFonts({
    Oswald_600SemiBold,
    Oswald_200ExtraLight,
    Oswald_300Light,
  })

  if (!fonteLoaded) {

    return null;

  }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.LoginCaixa}>
        <View style={styles.LoginTitlulo}>
          <Text style={styles.titulo}>
            SCREENTEC
          </Text>
          <Text style={styles.tituloPonto}>
            .
          </Text>
        </View>
        <View style={styles.imagem}>
          <Image
            style={styles.imagemPipoca}
            source={pipoca}
          />
        </View>
        <View style={styles.LoginBotao}>
          <TouchableOpacity style={styles.botaoLogin}>
            <Image
              style={styles.imagemEntrar}
              source={entrar}
            />
            
            <Text style={styles.textbotaoLogin}>FAÇA LOGIN</Text>

          </TouchableOpacity>
          
          <TouchableOpacity style={styles.botaoLoginCadastreSe}>

              <Image
                  style={styles.imagemCadastrar}
                  source={cadastrar}
                />

            <View style={styles.viwLoginCadastreSe}> 
                <Text style={styles.textbotaoNaoLoginCadastreSe}> NÃO TEM LOGIN?</Text>
                <Text style={styles.textbotaoLoginCadastreSe}>CADASTRE-SE</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );

}