import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';
import { showMessage as showMessageRNFM } from 'react-native-flash-message';

export default function showMessage(props) {
	const red = '#DA291C';
	const yellow = '#FDC309';
	const green = '#2BBD69';
	const blue = '#0B69FF';
	const white = '#ffffff';

	const options = isObject(props) && !isArray(isArray) ? props : {};
	const { type, textStyle, titleStyle, ...rest } = options;
	const backgroundColor = type === 'danger' ? red : type === 'warning' ? yellow : type === 'success' ? green : blue;
	showMessageRNFM({
		backgroundColor,
		color: white,
		...rest,
		type: type || 'default',
		textStyle: [
			{
				fontSize: 14,
				fontFamily: 'Montserrat-Regular',
				lineHeight: 24,
			},
			textStyle && textStyle,
		],
		titleStyle: [
			{
				fontSize: 14,
				fontFamily: 'Montserrat-Regular',
				lineHeight: 19,
			},
			titleStyle && titleStyle,
		],
	});
}
