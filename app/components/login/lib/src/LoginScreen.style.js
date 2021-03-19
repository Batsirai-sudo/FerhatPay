import { StyleSheet, Platform, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const container = (loginButtonBackgroundColor) => {
	return {
		marginBottom: 32,
		width: '100%',
		height: height,
		backgroundColor: 'white',
	};
};

export default {
	spinnerStyle: {
		left: 0,
		right: 0,
		zIndex: 9,
		height: 50,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		bottom: -200,
		backgroundColor: 'rgba(0,0,0,0.5)',
		marginHorizontal: 20,
		borderRadius: 10,
	},
	loginButtonStyle: {
		left: 0,
		right: 0,
		zIndex: 999,
		height: 50,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		bottom: 10,
		backgroundColor: 'rgba(0,0,0,0.4)',
		marginHorizontal: 20,
		borderRadius: 10,
	},
	loginButtonTextStyle: {
		color: 'white',
		fontSize: 15,
	},
	imagebackgroundStyle: {
		flex: 1,
		zIndex: -1,
		width,
		height: height + 50,
		...StyleSheet.absoluteFillObject,
	},
	blackoverlay: {
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.1)',
	},
	safeAreaViewStyle: {
		flex: 1,
		top: -60,
	},
	loginContainer: {
		marginTop: 24,
	},
};
