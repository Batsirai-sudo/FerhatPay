import React, { forwardRef } from 'react';
import { Icon, Text } from 'react-native-elements';
import { TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const SecondButton = forwardRef((props, ref) => {
	const { colors } = useTheme();
	let backgroundColor = props.backgroundColor ? props.backgroundColor : colors.buttonBlueBackgroundColor;
	let fontColor = colors.buttonTextColor;
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
			}}
			{...props}
			ref={ref}
		>
			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
				{props.icon && <Icon name={props.icon.name} type={props.icon.type} color={props.icon.color} />}
				{props.title && (
					<Text style={{ marginHorizontal: 8, fontSize: 16, color: fontColor }}>{props.title}</Text>
				)}
			</View>
		</TouchableOpacity>
	);
});
