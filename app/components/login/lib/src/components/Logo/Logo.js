import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';
import styles from './Logo.style';

const Logo = (props) => {
	const { logoText, logoComponent, logoTextStyle } = props;
	return (
		<View style={styles.container}>
			{logoComponent || (
				<View style={styles.row}>
					<Text style={logoTextStyle || styles.textStyle}></Text>
					<View style={styles.iconStyle}>
						<Image
							style={{
								height: 250,
								width: 250,
							}}
							source={require('./logo.png')}
						/>
					</View>
				</View>
			)}
		</View>
	);
};

Logo.propTypes = {
	logoText: PropTypes.string,
};

Logo.defaultProps = {
	logoText: 'GITHUB',
};

export default Logo;
