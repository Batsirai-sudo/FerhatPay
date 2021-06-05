import * as Haptics from 'expo-haptics';

function Hepatics(val) {
	//   const [isPermitted, setPermitted] = useState(null);
	//   const [scanned, setScanned] = useState(false);
	//
	//   useEffect(() => {
	//     (async () => {
	//       const {status} = await BarCodeScanner.requestPermissionsAsync();
	//       setPermitted(status === 'granted');
	//     })();
	//   }, []);
	//
	//   const handleBarCodeScanned = ({type, data}) => {
	//     setScanned(true);
	//     is_url(data);
	//   };
	//
	//   function is_url(str) {
	//     const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
	//     hapticNotify(regexp.test(str));
	//   }
	const hapticNotify = (value: any) => {
		switch (value) {
			case 'Success':
				Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
				break;
			case 'Error':
				Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
				break;
			case 'light':
				Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
				break;
			case 'medium':
				Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
				break;
			case 'select':
				Haptics.selectionAsync();
				break;
			default:
				Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
				break;
		}
	};
	return hapticNotify(val);
}

export default Hepatics;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// }); BlueClipboard.default = new BlueClipboard();

//
// return (
//     <View style={styles.container}>
//       <BarCodeScanner
//         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//         style={StyleSheet.absoluteFillObject}
//       />
//       {scanned && (
//         <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
//       )}
//     </View>
//   );
