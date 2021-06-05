import React, { forwardRef, useEffect } from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const TransactionPendingIcon = (props) => {
	const { colors } = useTheme();

	const stylesBlueIconHooks = StyleSheet.create({
		ball: {
			backgroundColor: colors.buttonBackgroundColor,
		},
	});
	return (
		<View {...props}>
			<View style={stylesBlueIcon.boxIncoming}>
				<View style={[stylesBlueIcon.ball, stylesBlueIconHooks.ball]}>
					<Icon
						{...props}
						name="kebab-horizontal"
						size={16}
						type="octicon"
						color={colors.foregroundColor}
						iconStyle={{ left: 0, top: 7 }}
					/>
				</View>
			</View>
		</View>
	);
};

const ToolTipMenu = (props, ref) => {
	const showMenu = () => {
		console.log('not implemented');
	};

	const hideMenu = () => {
		console.log('not implemented');
	};

	useEffect(() => {
		ref.current.showMenu = showMenu;
		ref.current.hideMenu = hideMenu;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref]);

	return <View ref={ref} />;
};

export default forwardRef(ToolTipMenu);

const stylesBlueIcon = StyleSheet.create({
	boxIncoming: {
		position: 'relative',
	},
	ball: {
		width: 30,
		height: 30,
		borderRadius: 15,
	},
});
