import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 50,
        backgroundColor:'#262938',
        justifyContent:'center'
      },
      containerLogin:{
        marginTop: 10,
        width: '100%'
      },
    
      //childrens
      txtTitle:{
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold'
      },
      txtSubTitle:{
        color: '#fff',
        fontSize: 20,
        marginTop: 20
      },
      inputCod:{
        padding: 20,
        backgroundColor:'#35394e',
        borderRadius: 3
      },
      btnEntrar:{
        marginTop: 20,
        padding: 20,
        backgroundColor:'#5A49DF',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 3
      },
      txtBtn:{
        color:'#fff',
        fontSize: 20,
        fontWeight: 'bold'
      },
});