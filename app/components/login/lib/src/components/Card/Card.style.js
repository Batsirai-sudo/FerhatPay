import { Platform } from 'react-native';

export const _textInputStyle = (textColor) => {
	return {
		fontSize: 14,
		color: textColor,
		fontWeight: '800',
		right: Platform.OS === 'android' ? 5 : 0,
		marginTop: Platform.OS === 'android' ? 0 : 3,
		height: Platform.OS === 'android' ? 35 : null,
	};
};

export const _textStyle = (titleColor) => {
	return {
		fontSize: 12,
		fontWeight: '700',
		color: titleColor,
	};
};

export default {
	container: {
		margin: 8,
		height: 75,
		width: '95%',
		marginTop: 0,
		borderRadius: 24,
		justifyContent: 'center',
		backgroundColor: 'white',
	},
	containerGlue: {
		marginLeft: 24,
		marginRight: 24,
		flexDirection: 'row',
	},
	textContainer: {
		width: '90%',
		marginLeft: 12,
		flexDirection: 'column',
		justifyContent: 'center',
		marginTop: Platform.OS === 'android' ? 10 : null,
	},
};
