import { StatusBar } from "expo-status-bar";
import { Text, View, Button, Image, TextInput, TouchableOpacity } from "react-native";
import styles from './styles.js';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import loginDeUsuario from './../../../images/loginDeUsuario.png';
import entrarLogin from './../../../images/entrarLogin.png';


import { useFonts, Oswald_600SemiBold, Oswald_200ExtraLight, Oswald_300Light } from '@expo-google-fonts/oswald';


export default function facaLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const hadleSair = () => {
        navigation.navigate('Home');
    };

    const [fonteLoaded] = useFonts({
        Oswald_600SemiBold,
        Oswald_200ExtraLight,
        Oswald_300Light,
    })

    if (!fonteLoaded) {

        return null;

    }

    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.voltar}>
                <TouchableOpacity onPress={hadleSair}>
                    <Image
                        style={styles.voltarImg}
                        source={require('./../../../assets/voltar.png')}
                    />
                </TouchableOpacity>
            </View>
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
                        source={loginDeUsuario}
                    />
                </View>
                <View style={styles.senha}>
                    <TextInput style={styles.textsenha}
                        placeholder="SEU EMAIL"
                        onChangeText={setEmail}
                        keyboardType="email-address"

                    />
                </View>
                <View style={styles.senha}>
                    <TextInput style={styles.textsenha}
                        placeholder="SUA SENHA"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.entrarLoginV} onPress={handleLogin}>
                        <Image
                            style={styles.entrarLogin}
                            source={entrarLogin}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );

}