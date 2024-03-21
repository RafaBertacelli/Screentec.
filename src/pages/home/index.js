import { StatusBar } from "expo-status-bar";
import { Text, View, Button, Image, TextInput, TouchableOpacity } from "react-native";
import styles from './styles.js';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View>
          <TouchableOpacity>
            <Image
              source={require('./../../../images/Menu.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.icon}>
          <Image
            style={styles.icon}
            source={require('./../../../images/screentec.png')}
          />
        </View>
        <View style={styles.icon}>
          <TouchableOpacity>
            <Image
              source={require('./../../../images/User.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity>
            <Image
              source={require('./../../../images/Search.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.setaDir}>
          <Image
            style={styles.setaDir}
            source={require('./../../../images/setaDir.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.setaEsq}>
          <Image
            style={styles.setaEsq}
            source={require('./../../../images/setaEsq.png')}         
          />
        </TouchableOpacity>
        <Image
          style={styles.carrosel}
          source={require('./../../../images/wakanda.png')}          
        />
        <Image
          style={styles.carroselHolder}
          source={require('./../../../images/carrosel_placeholder.png')}
        />
      </View>
      <View style={styles.card}>
        <View>
          <Text style={styles.textoCard}>Em alta</Text>
        </View>
        <View style={styles.cards}>
          <View>
            <Image
              style={styles.imgFilme}
              source={require('./../../../images/kungFuPanda4.jpg')}
            />
            <Text style={styles.tituloCards}>
              Kung Fu Panda 4 
            </Text>
          </View>
        </View>
        <View style={styles.cards}>
          <View>
            <Image
              style={styles.imgFilme}
              source={require('./../../../images/bobMarley.jpg')}
            />
            <Text style={styles.tituloCards}>
              Bob Marley
            </Text>
            <Text>
              SINOPSE
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
