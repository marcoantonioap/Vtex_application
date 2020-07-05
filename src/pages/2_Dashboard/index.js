import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from'./style';
import Icon from 'react-native-vector-icons/Feather'
Icon.loadFont();

export default function Dashboard({navigation}){  
    
        return(
            <View style={styles.container}>
                <ScrollView>
                    <Text style={{color:'#fff', fontSize: 30, fontWeight:'bold'}}>Vendas</Text>
                    <Text style={{color:'#fff', marginTop:25, fontSize: 20}}>Total de vendas</Text>
                    <Text style={{color:'#fff'}}>Dos últimos 6 meses</Text>
                    <View style={{padding: 80, backgroundColor:'#fff', marginTop:20}} />
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop: 20}}>
                        <Text style={{color:'#fff'}}>Mês atual</Text>
                        <Text style={{color:'#fff'}}>Mês anterior</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:3}}>
                        <View style={{padding: 40, paddingRight:65,backgroundColor:'#6944d0',borderRadius: 8}}>
                            <Text style={{color:'#fff', fontSize: 20, fontWeight:'bold'}}>1.534</Text>
                        </View>
                        <View style={{padding: 40, alignItems:'center',paddingLeft:65,borderRadius: 8,backgroundColor:'rgba(106, 68, 207, 0.7)'}}>
                            <Text style={{color:'#fff', fontSize: 20, fontWeight:'bold'}}>1.534</Text>
                        </View>
                    </View>  
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop: 20}}>
                        <Text style={{color:'#fff'}}>Lucro do Mês</Text>    
                    </View>
                    <View style={{padding: 40,width:'47%',borderRadius: 8, backgroundColor: '#15c988', marginTop: 3}}>
                        <Text style={{color:'#fff', fontSize: 20, fontWeight:'bold'}}>R$5.670</Text>
                    </View> 
                </ScrollView>   
                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: 15}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Dashboard')}><Icon name={'bar-chart-2'} size={30} color='#5f6582'/></TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('Produtos')}><Icon name={'shopping-bag'} size={30} color='#5f6582'/></TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('Perfil')}><Icon name={'user'} size={30} color='#5f6582'/></TouchableOpacity>                 
                </View>                
            </View> 
                 
               
        )
    
}
