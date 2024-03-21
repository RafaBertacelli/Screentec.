import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#292929',
        alignItems: 'center',
        position: 'relative'    
    },      
    LoginPipoca:{
        flex:1,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    imagemPipoca:{
        width:100,
        height:100,
    },
    nav: {
        backgroundColor: '#930707',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '7%',   
        justifyContent: 'space-between'
    },
    textoCard:{
        flex:1,
        color:'#ffffff',
        fontSize: 20,
        paddingTop: 1,
        zIndex: 1,
        position: 'absolute',
        marginTop: 10
    },
    imgCard:{
        width: 300,
        height: 170,
        marginTop: 50,
        alignSelf: 'flex-end' 
    },
    carrosel:{
        marginTop: '10%',
        width: 330,
        borderRadius: 10,
        
    },
    carroselHolder:{
        width: 330,
        height: 15,
        marginTop: 4
    },
    setaEsq: {
        position:  'absolute',
        width: 25,
        height: 25,
        marginTop: 60,
        zIndex: 1
    },
    setaDir: {
        position:  'absolute',
        width: 25,
        height: 25,
        marginTop: 60,
        zIndex: 1,
        alignSelf: 'flex-end'
    },
    icon:{
        
    },
    cards: {
        marginTop: 40,
        backgroundColor: '#161617',
        width: 300,
        height: 170,
        borderRadius: 10,
    },
    imgFilme:{
      width: 100,
      height: 170,
      borderRadius: 10,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0
    },
    card:{
        
    },
    tituloCards: {
        marginTop: 4,
        color:'#fff',
        fontSize: 12,
        position: 'absolute',
        alignSelf: 'center',
        fontFamily: 'League Spartan'
    },
    sinopse: {
        textAlign: 'right',
        position: 'absolute',
        alignSelf: 'center',
        color: '#fff'
    }
})