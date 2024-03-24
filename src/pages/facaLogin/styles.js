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

    voltar: {
        display: "flex",
        padding: '10px',
        alignSelf: 'flex-start',
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },

    voltarImg: {
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
    senha: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: '30px',
    },
    textsenha: {
        textAlign: 'center',
        width: 250,
        height: 41,
        boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        position: 'relative',
        marginTop: 0,
        marginRight: 'auto',
        marginBottom: 0,
        marginLeft: 'auto',
        fontFamily: 'Oswald_200ExtraLight',
        fontSize: 19,
        fontWeight: '700',
        lineHeight: 23,
        color: '#ffffff',
    },
    entrarLogin: {
        width: "200px",
        height: "40px",
    },
    entrarLoginV: {
        padding: "90px",
    }
})