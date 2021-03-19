import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import Card from '../Card/Card';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles, { container } from './BottomContainer.style';

const BottomContainer = (props) => {
	const {
		cardState,
		onPressSignup,
		IconComponent,
		usernameTitle,
		passwordTitle,
		backgroundColor,
		onPressSettings,
		disableSettings,
		contentComponent,
		usernamePlaceholder,
		passwordPlaceholder,
		usernameOnChangeText,
		passwordOnChangeText,
		usernameIconComponent,
		passwordIconComponent,
		usernameTextInputValue,
		passwordTextInputValue,
		signupText,
		signupStyle,
		disableSignupButton,
		loginButtonText,
		emailTitle,
		emailPlaceholder,
		emailOnChangeText,
		emailIconComponent,
		emailTextInputValue,
		repasswordTitle,
		repasswordTextInputValue,
		repasswordPlaceholder,
		repasswordOnChangeText,
		repasswordIconComponent,
		passwordSecure,
		fullNameOnchangeText,
	} = props;

	renderLoginCards = () => {
		return (
			<View>
				<Card
					title="Account"
					value={usernameTextInputValue}
					placeholder="27671254408"
					onChangeText={usernameOnChangeText}
					iconComponent={usernameIconComponent}
					keyboardType="number-pad"
					{...props}
				/>
				<Card
					name="key"
					secureTextEntry
					type="FontAwesome"
					title={passwordTitle}
					value={passwordTextInputValue}
					placeholder={passwordPlaceholder}
					onChangeText={(text) => passwordOnChangeText(text)}
					iconComponent={passwordIconComponent}
					secure={passwordSecure}
					{...props}
				/>
			</View>
		);
	};

	renderSignupCards = () => {
		return (
			<View>
				{/* <Text style={{textAlign:"center",fontSize:18,fontWeight:"900",fontFamily: "Courier-Oblique",marginBottom:20}}>Forgot Password</Text> */}
				<Card
					title="Account Number"
					value={emailTextInputValue}
					placeholder="27671254408"
					onChangeText={fullNameOnchangeText}
					iconComponent={emailIconComponent}
					keyboardType="number-pad"
					{...props}
				/>
				{/* <Card
          title={passwordTitle}
          value={passwordTextInputValue}
          placeholder={passwordPlaceholder}
          onChangeText={passwordOnChangeText}
          iconComponent={passwordIconComponent}
          name="key"
          type="FontAwesome"
          {...props}
        /> */}
				<Card
					title="Email"
					value={repasswordTextInputValue}
					placeholder="Enter Email"
					onChangeText={emailOnChangeText}
					iconComponent={repasswordIconComponent}
					name="key"
					type="FontAwesome"
					{...props}
				/>
			</View>
		);
	};

	renderCardContent = () => {
		return cardState ? renderLoginCards() : renderSignupCards();
	};

	return (
		<View style={container(backgroundColor, cardState)}>
			{contentComponent}
			<View style={styles.containerGlue}>{renderCardContent()}</View>
			<View style={styles.footerContainer}>
				{!disableSettings && (
					<TouchableOpacity onPress={onPressSettings} style={{ marginRight: 'auto' }}>
						<Ionicons
							size={35}
							// type="Ionicons"
							name="ios-arrow-back-circle"
							color="rgba(255,255,255, 0.9)"
							{...props}
						/>
					</TouchableOpacity>
				)}
				{!disableSignupButton && (
					<TouchableOpacity style={styles.signupButtonStyle} onPress={() => onPressSignup()}>
						<Text style={signupStyle || styles.signupTextStyle}>
							{cardState ? signupText : loginButtonText}
						</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

BottomContainer.propTypes = {
	signupText: PropTypes.string,
	disableSwitch: PropTypes.bool,
	passwordTitle: PropTypes.string,
	usernameTitle: PropTypes.string,
	disableSettings: PropTypes.bool,
	backgroundColor: PropTypes.string,
	usernamePlaceholder: PropTypes.string,
	passwordPlaceholder: PropTypes.string,
	repasswordPlaceholder: PropTypes.string,
	usernameTextInputValue: PropTypes.string,
	passwordSecure: PropTypes.bool,
	onPressSettings: PropTypes.func,
	loginButtonText: PropTypes.string,
};

BottomContainer.defaultProps = {
	IconComponent: Icon,
	loginButtonText: 'Already Have Account',
	disableSwitch: false,
	disableSettings: false,
	usernameTitle: 'Username',
	passwordTitle: 'Password',
	signupText: 'Sign Mep U!',
	repasswordTitle: 'Re-Password',
	usernamePlaceholder: 'Username',
	passwordPlaceholder: 'Password',
	repasswordPlaceholder: 'Re-password',
	backgroundColor: 'rgba(255,255,255,0.45)',
};

export default BottomContainer;
