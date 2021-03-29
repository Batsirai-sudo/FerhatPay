import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
	reistration: {
		height: 42,
		color: '#072273',
		// fontFamily: "Cochin",
		lineHeight: 40,
		fontSize: 18,
		textAlign: 'center',
	},
	headBlock: {
		width: '33.3%',
	},
	back: { marginTop: 10 },
	view: {
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		width: 270,
		marginLeft: 30,
	},
	topHeader: { flexDirection: 'row', top: 10 },
	textblock: {
		width: 250,
		height: 48,
		marginTop: 100,
		alignSelf: 'center',
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',

		// backgroundColor: '#009387',
		// backgroundColor: '#05014a',
	},
	header: {
		flex: 0,
		justifyContent: 'flex-end',
		paddingHorizontal: 20,
		paddingBottom: 50,
	},
	containerq: {
		alignItems: 'center',
		marginTop: 40,
		paddingHorizontal: 60,
		justifyContent: 'center',
	},
	footer: {
		flex: 10,
		backgroundColor: '#fff',

		paddingHorizontal: 10,
		paddingVertical: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 2.62,
		// elevation: 4,
		marginTop: Platform.OS === 'android' ? 15 : 0,
	},
	forwardIcon: { fontSize: 20, color: 'white' },
	button: {
		// backgroundColor: 'transparent',
		height: 40,
		marginHorizontal: 40,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 95,
		elevation: 4,

		backgroundColor: '#05014a',
		borderWidth: 1,
		borderColor: 'black',

		// elevation: 6,
		flexDirection: 'row',
	},
});
