import { StyleSheet, Dimensions } from 'react-native';
import { Layout } from '@constants';

const { height, width } = Layout;
export default StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		height: '100%',
	},
	dropdownConatiner: {
		marginTop: height / 6,
	},
	logo: { height: 100, width: 100, alignSelf: 'center' },

	chooseText: {
		textAlign: 'center',
		bottom: 20,
		color: 'white',
		marginTop: 140,
	},
	imagebackgroundStyle: {
		flex: 1,
		zIndex: -1,
		width,
		height: height + 50,
		...StyleSheet.absoluteFillObject,
	},
	btn: {
		width: 200,
		height: 50,
		backgroundColor: 'rgba(255,255,255,0.8)',
		borderRadius: 50,
		alignSelf: 'center',
		top: 140,
		elevation: 10,
		zIndex: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
	dropDownColor: { backgroundColor: 'rgba(255,255,255,0.8)' },
	itemStyle: {
		justifyContent: 'flex-start',
	},
	dropDownContainer: { height: 40, marginHorizontal: 30 },
});
