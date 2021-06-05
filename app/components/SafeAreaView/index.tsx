import React from 'react';
import { SafeAreaView } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const SafeArea = (props: any) => {
	const { style, ...nonStyleProps } = props;
	const { colors } = useTheme();
	const baseStyle = { flex: 1, backgroundColor: colors.background };
	return <SafeAreaView forceInset={{ horizontal: 'always' }} style={[baseStyle, style]} {...nonStyleProps} />;
};
