/* eslint react/prop-types: "off", react-native/no-inline-styles: "off" */
import React from 'react';
import { Header, Avatar } from 'react-native-elements';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const BlueHeaderDefaultMain = (props: any) => {
	const { colors } = useTheme();
	const { isDrawerList } = props;
	return (
		<Header
			leftComponent={{
				text: props.leftText,
				style: {
					fontWeight: 'bold',
					fontSize: 30,
					color: colors.foregroundColor,
					paddingHorizontal: 4,
					// lineHeight: -20,
				},
			}}
			placement="left"
			containerStyle={{
				borderTopColor: isDrawerList ? colors.elevated : colors.background,
				borderBottomColor: isDrawerList ? colors.elevated : colors.background,
				maxHeight: 44,
				height: 44,
				paddingTop: 0,
				marginBottom: 8,
			}}
			bottomDivider={false}
			topDivider={false}
			backgroundColor={isDrawerList ? colors.elevated : colors.background}
			rightComponent={<ChatBubbleIcon onPress={props.onNewWalletPress} Component={TouchableOpacity} />}
		/>
	);
};

export const BluePlusIcon = (props: any) => {
	const { colors } = useTheme();
	const stylesBlueIconHooks = StyleSheet.create({
		ball: {
			backgroundColor: colors.buttonBackgroundColor,
		},
	});
	return (
		<Avatar
			rounded
			containerStyle={[stylesBlueIcon.ball, stylesBlueIconHooks.ball]}
			icon={{ name: 'add', size: 22, type: 'ionicons', color: colors.foregroundColor }}
			{...props}
		/>
	);
};
export const ChatBubbleIcon = (props: any) => {
	const { colors } = useTheme();
	const stylesBlueIconHooks = StyleSheet.create({
		ball: {
			backgroundColor: colors.buttonBackgroundColor,
		},
	});
	return (
		<Avatar
			rounded
			containerStyle={[stylesBlueIcon.chat, stylesBlueIconHooks.ball]}
			icon={{ name: 'wechat', size: 22, type: 'antdesign', color: colors.foregroundColor }}
			{...props}
		/>
	);
};

const stylesBlueIcon = StyleSheet.create({
	container: {
		flex: 1,
	},
	box1: {
		position: 'relative',
		top: 15,
	},
	box: {
		alignSelf: 'flex-end',
		paddingHorizontal: 14,
		paddingTop: 8,
	},
	boxIncoming: {
		position: 'relative',
	},
	ball: {
		width: 30,
		height: 30,
		borderRadius: 15,
	},
	chat: {
		width: 35,
		height: 35,
		borderRadius: 25,
	},
	ballIncoming: {
		width: 30,
		height: 30,
		borderRadius: 15,
		transform: [{ rotate: '-45deg' }],
		justifyContent: 'center',
	},
	ballIncomingWithoutRotate: {
		width: 30,
		height: 30,
		borderRadius: 15,
	},
	ballReceive: {
		width: 30,
		height: 30,
		borderBottomLeftRadius: 15,
		transform: [{ rotate: '-45deg' }],
	},
	ballOutgoing: {
		width: 30,
		height: 30,
		borderRadius: 15,
		transform: [{ rotate: '225deg' }],
		justifyContent: 'center',
	},
	ballOutgoingWithoutRotate: {
		width: 30,
		height: 30,
		borderRadius: 15,
	},
	ballOutgoingExpired: {
		width: 30,
		height: 30,
		borderRadius: 15,
		justifyContent: 'center',
	},
	ballTransparrent: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: 'transparent',
	},
	ballDimmed: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: 'gray',
	},
});
