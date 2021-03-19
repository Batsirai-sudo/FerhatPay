import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';
import { View, TextInput, Text, ViewPropTypes } from 'react-native';
import Icon from '../Icon';
import { renderNode, nodeType } from '@helpers';
import styles from './styles2';

function InputSolid(props) {
	const { colors } = useTheme();
	const { icon, viewIcon, style, multiline, secureTextEntry, ...rest } = props;
	const [secure, setSecure] = React.useState(secureTextEntry);

	const renderIcon = (content) =>
		renderNode(Icon, content, {
			size: 20,
			color: colors.thirdText,
		});
	return (
		<View style={styles.viewRow}>
			{icon ? <View style={[styles.viewIcon, viewIcon]}>{renderIcon(icon)}</View> : null}
			<View style={styles.viewInput}>
				<TextInput
					{...rest}
					multiline={multiline}
					placeholder={null}
					secureTextEntry={secure}
					style={[
						styles.input,
						{
							color: colors.text,
						},
						multiline && styles.inputMultiline,
						style,
					]}
				/>
			</View>
			{!multiline && secureTextEntry ? (
				<View style={styles.iconSecure}>
					<Icon
						name={secure ? 'eye' : 'eye-off'}
						size={20}
						color={colors.thirdText}
						onPress={() => setSecure(!secure)}
					/>
				</View>
			) : null}
		</View>
	);
}

InputSolid.propTypes = {
	multiline: PropTypes.bool,
	secureTextEntry: PropTypes.bool,
	style: Text.propTypes.style,
	icon: nodeType,
	viewIcon: ViewPropTypes.style,
};

InputSolid.defaultProps = {
	multiline: false,
	secureTextEntry: false,
	autoCapitalize: 'none',
	style: {},
	viewIcon: {},
};

export default InputSolid;
