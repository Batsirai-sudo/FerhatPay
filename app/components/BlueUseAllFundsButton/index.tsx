/* eslint react/prop-types: "off", react-native/no-inline-styles: "off" */
import React, { Component, useState, useMemo, useCallback, useContext, useRef, useEffect, forwardRef } from 'react';
import {
	InputAccessoryView,
	Keyboard,
	Platform,
	View,
	TouchableOpacity,
	Text,
	KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useTheme } from '@react-navigation/native';

export const BlueUseAllFundsButton = ({ balance, canUseAll, onUseAllPressed }) => {
	const { colors } = useTheme();
	const inputView = (
		<View
			style={{
				flex: 1,
				flexDirection: 'row',
				maxHeight: 44,
				justifyContent: 'space-between',
				alignItems: 'center',
				backgroundColor: colors.inputBackgroundColor,
			}}
		>
			<View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
				<Text
					style={{
						color: colors.alternativeTextColor,
						fontSize: 16,
						marginLeft: 8,
						marginRight: 0,
						paddingRight: 0,
						paddingLeft: 0,
						paddingTop: 12,
						paddingBottom: 12,
					}}
				>
					{'loc.send.input_total'}
				</Text>
				{canUseAll ? (
					<BlueButtonLink
						onPress={onUseAllPressed}
						style={{ marginLeft: 8, paddingRight: 0, paddingLeft: 0, paddingTop: 12, paddingBottom: 12 }}
						title={`'{balance} {BitcoinUnit.BTC}'`}
					/>
				) : (
					<Text
						style={{
							color: colors.alternativeTextColor,
							fontSize: 16,
							marginLeft: 8,
							marginRight: 0,
							paddingRight: 0,
							paddingLeft: 0,
							paddingTop: 12,
							paddingBottom: 12,
						}}
					>
						balance BitcoinUnit.BTC
					</Text>
				)}
			</View>
			<View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
				<BlueButtonLink
					style={{ paddingRight: 8, paddingLeft: 0, paddingTop: 12, paddingBottom: 12 }}
					title={'loc.send.input_done'}
					onPress={Keyboard.dismiss}
				/>
			</View>
		</View>
	);

	if (Platform.OS === 'ios') {
		return (
			<InputAccessoryView nativeID={BlueUseAllFundsButton.InputAccessoryViewID}>{inputView}</InputAccessoryView>
		);
	} else {
		return <KeyboardAvoidingView style={{ height: 44 }}>{inputView}</KeyboardAvoidingView>;
	}
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
