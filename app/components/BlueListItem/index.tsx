import React from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import { ActivityIndicator, Switch, TouchableOpacity, I18nManager } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Text from '../Text';
export const BlueListItem = React.memo((props) => {
	const { colors } = useTheme();

	return (
		<ListItem
			containerStyle={props.containerStyle ?? { backgroundColor: 'transparent' }}
			Component={props.Component ?? TouchableOpacity}
			bottomDivider={props.bottomDivider !== undefined ? props.bottomDivider : true}
			topDivider={props.topDivider !== undefined ? props.topDivider : false}
			testID={props.testID}
			onPress={props.onPress}
			onLongPress={props.onLongPress}
			disabled={props.disabled}
			accessible={props.switch === undefined}
		>
			{props.leftAvatar && <Avatar>{props.leftAvatar}</Avatar>}
			{props.leftIcon && <Avatar icon={props.leftIcon} />}
			<ListItem.Content>
				<ListItem.Title
					style={{
						color: props.disabled ? colors.buttonDisabledTextColor : colors.foregroundColor,
						fontSize: 16,
						fontWeight: '500',
					}}
					numberOfLines={0}
					accessible={props.switch === undefined}
				>
					<Text whiteColor>{props.title}</Text>
				</ListItem.Title>
				{props.subtitle && (
					<ListItem.Subtitle
						numberOfLines={props.subtitleNumberOfLines ?? 1}
						accessible={props.switch === undefined}
						style={{
							flexWrap: 'wrap',
							color: colors.alternativeTextColor,
							fontWeight: '400',
							fontSize: 14,
						}}
					>
						{props.subtitle}
					</ListItem.Subtitle>
				)}
			</ListItem.Content>
			<ListItem.Content right>
				{props.rightTitle && (
					<ListItem.Title style={props.rightTitleStyle} numberOfLines={0} right>
						{props.rightTitle}
					</ListItem.Title>
				)}
			</ListItem.Content>
			{props.isLoading ? (
				<ActivityIndicator />
			) : (
				<>
					{props.chevron && (
						<ListItem.Chevron iconStyle={{ transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }] }} />
					)}
					{props.rightIcon && <Avatar icon={props.rightIcon} />}
					{props.switch && (
						<Switch
							{...props.switch}
							accessibilityLabel={props.title}
							accessible
							accessibilityRole="switch"
						/>
					)}
					{props.checkmark && (
						<ListItem.CheckBox iconType="octaicon" checkedColor="#0070FF" checkedIcon="check" checked />
					)}
				</>
			)}
		</ListItem>
	);
});
