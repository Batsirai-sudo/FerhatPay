import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, ViewPropTypes } from 'react-native';
import { Button as ButtonRNE } from 'react-native-elements';

function Button(props) {
	const { secondary, size, buttonStyle, titleStyle, backgroundColor, loadingProps, ...rest } = props;
	const { colors } = useTheme();
	const height = size === 'small' ? 41 : 51;
	const bgColor = secondary ? colors.secondaryCard : colors.primary;
	const textColor = secondary ? colors.text : 'white';

	return (
		<ButtonRNE
			{...rest}
			buttonStyle={[
				styles.button,
				{
					height: height,
					backgroundColor: backgroundColor ? backgroundColor : bgColor,
				},
				buttonStyle,
			]}
			titleStyle={[
				styles.title,
				{
					color: textColor,
				},
				size === 'small' && styles.titleSmall,
				titleStyle,
			]}
			disabledStyle={{
				backgroundColor: colors.disable,
			}}
			disabledTitleStyle={{
				color: colors.secondaryText,
			}}
			loadingProps={{
				color: textColor,
				...loadingProps,
			}}
		/>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 10,
	},
	title: {
		fontSize: 16,
		lineHeight: 19,
		fontFamily: 'Montserrat-Regular',
	},
	titleSmall: {
		fontSize: 14,
		lineHeight: 17,
		fontFamily: 'Montserrat-Regular',
	},
});

Button.propTypes = {
	secondary: PropTypes.bool,
	buttonStyle: ViewPropTypes.style,
	titleStyle: Text.propTypes.style,
	size: PropTypes.oneOf(['normal', 'small']),
	loadingProps: PropTypes.object,
};

Button.defaultProps = {
	secondary: false,
	buttonStyle: {},
	titleStyle: {},
	size: 'normal',
	loadingProps: {},
};

export default Button;
