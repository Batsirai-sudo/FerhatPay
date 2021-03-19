// import * as React from 'react';
// import { StyleSheet } from 'react-native';
// import EditScreenInfo from '../../components/EditScreenInfo';
// import { Text, View } from '../../components/Themed';
// import {Splash} from '@components'
// import {ROUTES} from '@config'
// import {useNavigation} from '@react-navigation/native'

// export default function Loading() {
//   const {navigate} = useNavigation()
//   React.useEffect(()=>{
//     setTimeout(()=>{
//       navigate(ROUTES.SelectLanguage)
//     },4000)

//   })
//   return (
//     <>
//       <Splash/>

// </>  );
// }

import React, { useEffect, useState } from 'react';
import { View, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text } from '@components';
import styles from './styles';
import { Images, BaseSetting, ROUTES } from '@config';
import { useTranslation } from 'react-i18next';
import { ApplicationActions } from '@actions';
import { util } from '@utils';
import { useDispatch } from 'react-redux';

interface SelectLanguageProps {}

const index = (props: SelectLanguageProps) => {
	const { navigate } = useNavigation();
	const { t, i18n } = useTranslation();

	useEffect(() => {
		setTimeout(() => {
			navigate(ROUTES.SelectLanguage);
		}, 4000);
	});

	return (
		<View style={{ height: '100%' }}>
			<StatusBar translucent={true} barStyle="light-content" />
			<ImageBackground
				source={Images.background1}
				resizeMode="cover"
				style={{ width: '100%', height: '100%' }}
			></ImageBackground>
		</View>
	);
};

export default index;
