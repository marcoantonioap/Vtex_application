import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from'./style';
import Icon from 'react-native-vector-icons/Feather'
Icon.loadFont();

export default function Perfil({navigation}){  
        return(
            <View style={styles.container}>
                <ScrollView>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{color:'#fff', fontSize: 30, fontWeight:'bold'}}>Perfil</Text>
                        <Icon name={'power'} size={30} color='#EA2323'/>
                    </View>                   
                    
                    <View style={{ justifyContent:'space-between',marginTop:40}}>
                        <Text style={{color:'#653EE1', fontSize:25, fontWeight:'bold'}}>Admnistrador</Text>
                        <Text style={{color:'#fff', fontSize: 20}}>Alexandra Moreira Gonçalves</Text>
                    </View>

                    <View style={{justifyContent:'space-between',marginTop:40}}>
                        <Text style={{color:'#fff', fontSize: 20}}>Email</Text>
                        <Text style={{color:'#BCBCBC', fontSize: 15}}>modas.ju@hotmail.com</Text>
                    </View>

                    <View style={{justifyContent:'space-between',marginTop:40}}>
                        <Text style={{color:'#fff', fontSize: 20}}>Telefone</Text>
                        <Text style={{color:'#BCBCBC', fontSize: 15}}>(11)94567-2374</Text>
                    </View>       
                </ScrollView>   
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Dashboard')}><Icon name={'bar-chart-2'} size={30} color='#5f6582'/></TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('Produtos')}><Icon name={'shopping-bag'} size={30} color='#5f6582'/></TouchableOpacity>
                    <TouchableOpacity><Icon name={'user'} size={30} color='#5f6582'/></TouchableOpacity>                 
                </View>                
            </View> 
                 
               
        )   
    
}
