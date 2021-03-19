import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	input: {
		paddingHorizontal: 7,
		height: 46,
		fontSize: 15,
	},
	inputMultiline: {
		height: 122,
		textAlignVertical: 'top',
		paddingTop: 14,
		paddingBottom: 14,
		lineHeight: 15,
	},
	viewRow: {
		flexDirection: 'row',
		paddingHorizontal: 7,
	},
	viewIcon: {
		height: 46,
		width: 36,
		justifyContent: 'center',
	},
	viewInput: {
		flex: 1,
	},
	iconSecure: {
		paddingHorizontal: 7,
		justifyContent: 'center',
	},
});
