/* eslint react/prop-types: "off", react-native/no-inline-styles: "off" */
import React from 'react';
import { Icon, Text } from 'react-native-elements';
import { TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const BlueButton = (props: any) => {
	const { colors } = useTheme();

	let backgroundColor = props.backgroundColor ? props.backgroundColor : colors.mainColor;
	// let backgroundColor = props.backgroundColor ? props.backgroundColor : colors.mainColor || BlueCurrentTheme.colors.mainColor;
	let fontColor = props.buttonTextColor || colors.buttonTextColor;
	if (props.disabled === true) {
		backgroundColor = colors.buttonDisabledBackgroundColor;
		fontColor = colors.buttonDisabledTextColor;
	}

	return (
		<TouchableOpacity
			style={{
				flex: 1,
				borderWidth: 0.7,
				borderColor: 'transparent',
				backgroundColor: backgroundColor,
				minHeight: 45,
				height: 45,
				maxHeight: 45,
				borderRadius: 25,
				justifyContent: 'center',
				alignItems: 'center',
				paddingHorizontal: 16,
			}}
			{...props}
		>
			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
				{props.icon && <Icon name={props.icon.name} type={props.icon.type} color={props.icon.color} />}
				{props.title && (
					<Text style={{ marginHorizontal: 8, fontSize: 16, color: fontColor, fontWeight: '500' }}>
						{props.title}
					</Text>
				)}
			</View>
		</TouchableOpacity>
	);
};
