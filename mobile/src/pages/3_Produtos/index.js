import React, {useRef} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from'./style';
import { Modalize } from 'react-native-modalize';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();

export default function Produtos({navigation}){  
    const modalizeRef = useRef(null);
    function onOpen(){
        modalizeRef.current?.open();
    }
    function onOpen2(){
        modalizeRef.current?.open();
    }
    function onOpen3(){
        modalizeRef.current?.open();
    }
    function onOpen4(){
        modalizeRef.current?.open();
    }
    return(
            <View style={styles.container}>
                <ScrollView>
                    <Text style={{color:'#fff', fontSize: 30, fontWeight:'bold'}}>Produtos</Text>
                    
                    <View style={{flexDirection:'row', justifyContent:'space-between',padding: 40, borderRadius:8,backgroundColor:'#6944d0', marginTop:40, alignItems:'center'}}>
                        <View style={{paddingRight: 10}}>
                            <Text style={{color:'#fff', fontSize: 20}}>Produtos</Text>
                            <Text style={{color:'#fff', fontSize: 15}}>154</Text>
                        </View>
                        <View style={{paddingLeft: 10}}>
                            <Text style={{color:'#fff', fontSize: 20}}>Em estoque</Text>
                            <Text style={{color:'#fff', fontSize: 15}}>504</Text>
                        </View>
                    </View>    
                    <View style={{marginTop: 30}}>
                    <Text style={{color:'#fff', fontSize: 20,}}>Categorias</Text>             
                    </View>  
                    <View style={{marginTop: 10}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between',padding: 20, backgroundColor: '#35394E'}}>
                            <Text style={{color:'#fff'}}>Feminino</Text>
                            <TouchableOpacity onPress={onOpen}><Icon name={'arrow-down'} size={20} color='#898D9E'/></TouchableOpacity>
                        </View>

                        <View style={{marginTop: 10,flexDirection:'row', justifyContent:'space-between',padding: 20, backgroundColor: '#35394E'}}>
                            <Text style={{color:'#fff'}}>Masculino</Text>
                            <TouchableOpacity onPress={onOpen2}><Icon name={'arrow-down'} size={20} color='#898D9E'/></TouchableOpacity>
                        </View>

                        <View style={{marginTop: 10,flexDirection:'row', justifyContent:'space-between',padding: 20, backgroundColor: '#35394E'}}>
                            <Text style={{color:'#fff'}}>Infantil</Text>
                            <TouchableOpacity onPress={onOpen3}><Icon name={'arrow-down'} size={20} color='#898D9E'/></TouchableOpacity>
                            
                        </View>                      
                        <View style={{marginTop: 10,flexDirection:'row', justifyContent:'space-between',padding: 20, backgroundColor: '#35394E'}}>
                            <Text style={{color:'#fff'}}>Jeans</Text>
                            <TouchableOpacity onPress={onOpen}><Icon name={'arrow-down'} size={20} color='#898D9E'/></TouchableOpacity>                            
                        </View> 
                    </View>     
                    <Modalize ref={modalizeRef} snapPoint={180}>
                    
                    <View 
                                style={{
                                    flex:1,
                                    height: 180,
                                    justifyContent:'center', 
                                    paddingHorizontal:20,
                                    backgroundColor:'#1F212d'
                                    }}> 
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <Icon name={'star'} color='#4BFFBE' size={30} />
                                        <Text style={{color:'#4BFFBE'}}>Json:'produto mais vendido'<Text>     </Text>
                                        <Text style={{color:'#fff'}}>Json:'produtos em estoque'</Text></Text>
                                    </View>                                       
                                    
                                    <View>
                                    <View style={{flexDirection:'row', alignItems:'center', marginTop: 10}}>
                                        <Icon name={'star'} color='#1F212d' size={30} />
                                        <Text style={{color:'#fff'}}>Json:'outros produtos'</Text>                                      
                                    </View>  
                                    <View style={{paddingHorizontal:31}}>
                                        <Text style={{color:'#fff'}}>Json:'produtos em estoque'</Text>
                                    </View>
                                    </View>

                                    <View>
                                    <View style={{flexDirection:'row', alignItems:'center', marginTop: 10}}>
                                        <Icon name={'star'} color='#1F212d' size={30} />
                                        <Text style={{color:'#fff'}}>Json:'outros produtos'</Text>                                      
                                    </View>  
                                    <View style={{paddingHorizontal:31}}>
                                        <Text style={{color:'#fff'}}>Json:'produtos em estoque'</Text>
                                    </View>
                                    </View>                                                                
                                </View>
                    
                    </Modalize>  
                </ScrollView>   
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Dashboard')}><Icon name={'bar-chart-2'} size={30} color='#5f6582'/></TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('Produtos')}><Icon name={'shopping-bag'} size={30} color='#5f6582'/></TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('Perfil')}><Icon name={'user'} size={30} color='#5f6582'/></TouchableOpacity>                 
                </View>                
            </View> 
                 
               
        )   
    
}
