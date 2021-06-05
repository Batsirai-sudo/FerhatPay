/* eslint react/prop-types: "off", react-native/no-inline-styles: "off" */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const SafeBlueArea = (props: any) => {
	const { style, ...nonStyleProps } = props;
	const { colors } = useTheme();
	const baseStyle = { flex: 1, backgroundColor: colors.background };
	return <SafeAreaView forceInset={{ horizontal: 'always' }} style={[baseStyle, style]} {...nonStyleProps} />;
};
