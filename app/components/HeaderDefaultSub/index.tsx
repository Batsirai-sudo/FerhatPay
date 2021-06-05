/* eslint react/prop-types: "off", react-native/no-inline-styles: "off" */
import React from 'react';
import { Header, Avatar } from 'react-native-elements';
import { Text, SafeAreaView } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const HeaderDefaultSub = (props: any) => {
	const { colors } = useTheme();

	return (
		<SafeAreaView>
			<Header
				backgroundColor={colors.background}
				leftContainerStyle={{ minWidth: '100%' }}
				outerContainerStyles={{
					borderBottomColor: 'transparent',
					borderBottomWidth: 0,
				}}
				leftComponent={
					<Text
						adjustsFontSizeToFit
						style={[
							{
								fontWeight: 'bold',
								fontSize: 30,
								color: colors.foregroundColor,
							},
							props.leftTextStyle,
						]}
					>
						{props.leftText}
					</Text>
				}
				{...props}
			/>
		</SafeAreaView>
	);
};
