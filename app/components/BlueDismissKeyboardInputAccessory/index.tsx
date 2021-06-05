/* eslint react/prop-types: "off", react-native/no-inline-styles: "off" */
import React, { Component, useState, useMemo, useCallback, useContext, useRef, useEffect, forwardRef } from 'react';
import { InputAccessoryView, Keyboard, Platform, View, TouchableOpacity, Text } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useTheme } from '@react-navigation/native';

export const BlueDismissKeyboardInputAccessory = () => {
	const { colors } = useTheme();
	BlueDismissKeyboardInputAccessory.InputAccessoryViewID = 'BlueDismissKeyboardInputAccessory';

	return Platform.OS !== 'ios' ? null : (
		<InputAccessoryView nativeID={BlueDismissKeyboardInputAccessory.InputAccessoryViewID}>
			<View
				style={{
					backgroundColor: colors.inputBackgroundColor,
					height: 44,
					flex: 1,
					flexDirection: 'row',
					justifyContent: 'flex-end',
					alignItems: 'center',
				}}
			>
				<BlueButtonLink title={'Done'} onPress={Keyboard.dismiss} />
			</View>
		</InputAccessoryView>
	);
};
export const BlueButtonLink = forwardRef((props, ref) => {
	const { colors } = useTheme();
	return (
		<TouchableOpacity
			style={{
				minHeight: 60,
				minWidth: 100,
				justifyContent: 'center',
			}}
			{...props}
			ref={ref}
		>
			<Text style={{ color: colors.foregroundColor, textAlign: 'center', fontSize: 16 }}>{props.title}</Text>
		</TouchableOpacity>
	);
});
