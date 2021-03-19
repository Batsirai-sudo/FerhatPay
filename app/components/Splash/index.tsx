import React from 'react';
import {  Image, View } from 'react-native';
import styles from './styles';

 const Splash =()=> {
  

    return (
      <View style={styles.animationContainer}>
           <Image
          style={{width: 200, height: 200,}}
          source={require('./splash.gif')} /> 
      
      </View>
    )
}

export default Splash
