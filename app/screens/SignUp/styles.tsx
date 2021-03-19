import { StyleSheet } from 'react-native';

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
	textblock: {
		width: 250,
		height: 48,
		marginTop: 200,
		alignSelf: 'center',
	},
	container: {
		flex: 1,
		//   backgroundColor: '#009387'
		// backgroundColor: '#05014a',
	},
	header: {
		flex: 0,
		justifyContent: 'flex-end',
		paddingHorizontal: 20,
		paddingBottom: 50,
		//   marginTop:44
	},
	containerq: {
		alignItems: 'center',
		paddingLeft: 20,
		paddingTop: 40,
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
		elevation: 4,
	},
	button: {
		backgroundColor: 'transparent',
		height: 50,
		marginHorizontal: 40,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 95,
		elevation: 4,
	},
});
