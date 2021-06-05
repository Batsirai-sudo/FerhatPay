/* eslint react/prop-types: "off", react-native/no-inline-styles: "off" */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
// import Clipboard from '@react-native-clipboard/clipboard';

export class BlueCopyTextToClipboard extends Component {
	static propTypes = {
		text: PropTypes.string,
	};

	static defaultProps = {
		text: '',
	};

	constructor(props) {
		super(props);
		this.state = { hasTappedText: false, address: props.text };
	}

	static getDerivedStateFromProps(props, state) {
		if (state.hasTappedText) {
			return { hasTappedText: state.hasTappedText, address: state.address };
		} else {
			return { hasTappedText: state.hasTappedText, address: props.text };
		}
	}

	// copyToClipboard = () => {
	//   this.setState({ hasTappedText: true }, () => {
	//     Clipboard.setString(this.props.text);
	//     this.setState({ address: loc.wallets.xpub_copiedToClipboard }, () => {
	//       setTimeout(() => {
	//         this.setState({ hasTappedText: false, address: this.props.text });
	//       }, 1000);
	//     });
	//   });
	// };

	render() {
		return (
			<View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 }}>
				<TouchableOpacity
					//   onPress={this.copyToClipboard}
					//    disabled={this.state.hasTappedText}
					testID="BlueCopyTextToClipboard"
				>
					<Animated.Text style={styleCopyTextToClipboard.address} numberOfLines={0}>
						{/* {'this.state.address'} */}
						{this.props.text}
					</Animated.Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styleCopyTextToClipboard = StyleSheet.create({
	address: {
		marginVertical: 32,
		fontSize: 15,
		color: '#9aa0aa',
		textAlign: 'center',
	},
});
