/* global alert */
import React, { useState, useEffect, useContext } from 'react';
import { FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { SafeArea, BlueListItem } from '@components';
import { AvailableLanguages } from '@config';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { ApplicationActions } from '@actions';
import { util } from '@utils';

// import navigationStyle from '../../components/navigationStyle';

const styles = StyleSheet.create({
	flex: {
		flex: 1,
	},
});

const Language = () => {
	//   const  language  = '';
	const [isLoading, setIsLoading] = useState(true);
	const { t, i18n } = useTranslation();

	const [languageSelected, setLanguageSelected] = useState(i18n.language);

	//   const [selectedLanguage, setSelectedLanguage] = useState(loc.getLanguage());
	const [selectedLanguage, setSelectedLanguage] = useState();
	const { setOptions } = useNavigation();
	const { colors } = useTheme();
	const dispatch = useDispatch();

	const stylesHook = StyleSheet.create({
		flex: {
			backgroundColor: colors.background,
		},
	});
	useEffect(() => {
		setIsLoading(false);
	}, []);

	useEffect(() => {
		// console.log(i18n);
		// setOptions({ title: loc.settings.language });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onChangeLanguage = (item: any) => {
		setLanguageSelected(item.value);
		const oldLanguage = i18n.language;
		dispatch(ApplicationActions.onChangeLanguage(item.value));
		i18n.changeLanguage(item.value);

		setTimeout(() => {
			util.reloadLocale(oldLanguage, languageSelected);
		}, 500);
	};

	const renderItem = (item: any) => {
		return (
			<BlueListItem
				onPress={() => {
					onChangeLanguage(item.item);
					setLanguageSelected(item.item.value);
					// console.log(item.item.value);
					// console.log(languageSelected);
					//   const currentLanguage = AvailableLanguages.find(language => language.value === selectedLanguage);
					//   loc.saveLanguage(item.item.value).then(() => {
					//     setSelectedLanguage(item.item.value);
					//     // setLanguage();
					//     if (currentLanguage.isRTL || item.item.isRTL) {
					//       alert(loc.settings.language_isRTL);
					//     }
					//   });
				}}
				title={item.item.label}
				// checkmark={selectedLanguage === item.item.value}
				checkmark={item.item.value === languageSelected ? true : false}
			/>
		);
	};

	// isLoading ? (
	// 	<ActivityIndicator />
	// ) :

	return isLoading ? (
		<ActivityIndicator />
	) : (
		<SafeArea>
			<FlatList
				style={[styles.flex, stylesHook.flex]}
				keyExtractor={(_item, index) => `${index}`}
				data={AvailableLanguages}
				renderItem={renderItem}
				initialNumToRender={25}
			/>
		</SafeArea>
	);
};

// Language.navigationOptions = navigationStyle({}, opts => ({ ...opts, title: loc.settings.language }));

export default Language;
