import React from 'react';
import { View, ActivityIndicator, Modal } from 'react-native';
import Text from '../Text';
import PropTypes from 'prop-types';
import { Plane, Chase } from 'react-native-animated-spinkit';

export default function CustomProgressBar(props) {
	const { visible, loader, loaderText } = props;
	let Loader_type = Chase;
	// switch (loader) {
	//   case 1:
	//     Loader_type = PulseLoader;
	//     break;
	//   case 2:
	//     Loader_type = DotsLoader;
	//     break;
	//   case 3:
	//     Loader_type = CirclesLoader;
	//     break;
	//   case 4:
	//     Loader_type = BreathingLoader;
	//     break;
	//   case 5:
	//     Loader_type = RippleLoader;
	//     break;
	//   case 6:
	//     Loader_type = LinesLoader;
	//     break;
	//   case 7:
	//     Loader_type = MusicBarLoader;
	//     break;
	//   case 8:
	//     Loader_type = EatBeanLoader;
	//     break;
	//   case 9:
	//     Loader_type = DoubleCircleLoader;
	//     break;
	//   case 10:
	//     Loader_type = RotationCircleLoader;
	//     break;
	//   case 11:
	//     Loader_type = RotationHoleLoader;
	//     break;
	//   case 12:
	//     Loader_type = CirclesRotationScaleLoader;
	//     break;
	//   case 13:
	//     Loader_type = NineCubesLoader;
	//     break;
	//   case 14:
	//     Loader_type = LineDotsLoader;
	//     break;
	//   case 15:
	//     Loader_type = ColorDotsLoader;
	//     break;
	//   case 16:
	//     Loader_type = OpacityDotsLoader;
	//     break;
	//   default:
	//     Loader_type = BubblesLoader;
	// }

	return (
		<Modal animationType="slide" transparent={true} onRequestClose={() => null} visible={visible}>
			<View
				style={{
					flex: 1,
					backgroundColor: 'rgba(0, 0, 0, 0.7)',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<View
					style={{
						borderRadius: 10,
						backgroundColor: 'rgba(0, 0, 0, 0.8)',
						height: 110,
						width: 110,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Loader_type color="white" size={40} />
					{loaderText ? <Text style={{ fontWeight: '200', color: 'white' }}>{loaderText}</Text> : null}
					{/* <View>
      <CirclesLoader />
    </View> */}
					{/* <Text style={{fontWeight: '200', color: 'white'}}>Loading</Text> */}
				</View>
			</View>
		</Modal>
	);
}

CustomProgressBar.propTypes = {
	visible: PropTypes.bool,
};
