import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#930707',
        alignItems: 'center',
    },
    LoginCaixa: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
    },

    voltar:{
        display:"flex",
        padding:'10px',
        alignSelf:'flex-start',
        alignItems:"flex-start",
        justifyContent:"flex-start",
      },
  
      voltarImg:{
        width: '45px',
        height: '45px',
      },

    imagemPipoca: {
        width: '169px',
        height: '169px',
    },

    LoginTitlulo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '20px',
    },
    titulo: {
        fontFamily: 'Oswald_600SemiBold',
        color: '#F2F2F2',
        fontSize: '40px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
    },
    tituloPonto: {
        fontFamily: 'Oswald_600SemiBold',
        color: '#black',
        fontSize: '40px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
    },

    imagem: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: '30px',
    },
    imagemEntrar: {
        width: '21px',
        height: '21px',
    },
    LoginBotao: {
        padding: '50px',
        gap: '30px',
    },
    botaoLogin: {
        display: 'flex',
        padding: '15px',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        width: '250px',
        height: '41px',
        flexShrink: 0,
    },
    textbotaoLogin: {
        paddingLeft: '45px',
        width: '150px',
        color: '#FFF',
        fontFamily: 'Oswald_600SemiBold',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
    },
    botaoLoginCadastreSe: {
        display: 'flex',

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '250px',
        height: '50px',
        flexShrink: 0,
        borderRadius: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    },

    viwLoginCadastreSe: {

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textbotaoLoginCadastreSe: {
        paddingLeft: '30px',
        width: '200px',
        color: '#FFF',
        fontFamly: 'Oswald_600SemiBold',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
    },

    textbotaoNaoLoginCadastreSe: {
        paddingTop: '5px',
        paddingRight: '20px',
        color: '#FFF',
        fontFamily: 'Oswald_300Light',
        fontSize: '13px',
        fontStyle: 'normal',
        lineWeight: 'normal',
    },
    imagemCadastrar: {
        width: '27px',
        height: '27px',
        flexShrink: 0,
    },

})