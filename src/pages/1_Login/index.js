import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from './style';

import Icon from 'react-native-vector-icons/Feather'
Icon.loadFont();

export default function Login({navigation}){
  return (     
    
          <View style={styles.container}>
            <Text style={styles.txtTitle}>Login</Text>
            <Text style={styles.txtSubTitle}>Código de acesso</Text>
            <View style={styles.containerLogin}>
              <TextInput style={styles.inputCod}>
                <Icon name={'user'} size={20} color='#5A49DF'/>
              </TextInput>
              <TextInput style={[styles.inputCod, {marginTop: 20}]}>
                <Icon name={'lock'} size={20} color='#5A49DF'/>
              </TextInput>
              <TouchableOpacity onPress={()=> navigation.navigate('Dashboard')} style={styles.btnEntrar}>
                <Text style={styles.txtBtn}>Entrar</Text>     
              </TouchableOpacity>
            </View>
          </View>               
  );
};