import React, { useEffect, useState } from 'react';
import { View, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text } from '@components';
import styles from './styles';
import { Images, BaseSetting, ROUTES } from '@config';
import { useTranslation } from 'react-i18next';
import { ApplicationActions } from '@actions';
import { util } from '@utils';
import { useDispatch } from 'react-redux';

interface SelectLanguageProps {}

const SelectLanguage = (props: SelectLanguageProps) => {
	const { navigate } = useNavigation();
	const { t, i18n } = useTranslation();
	const dispatch = useDispatch();
	const [languageSelected, setLanguageSelected] = useState(i18n.language);
	const [supportedLanguages, setSupportedLanguages] = useState();

	useEffect(() => {
		const lang = [];
		BaseSetting.languageSupport.map((s) => {
			let x = {
				label: util.languageFromCode(s),
				value: s,
				icon: () => <FontAwesome name="language" size={18} color="#900" />,
			};
			lang.push(x);
		});
		setSupportedLanguages(lang);
	}, []);

	const onChangeLanguage = (item) => {
		setLanguageSelected(item.value);
		const oldLanguage = i18n.language;
		dispatch(ApplicationActions.onChangeLanguage(item.value));
		i18n.changeLanguage(item.value);

		setTimeout(() => {
			util.reloadLocale(oldLanguage, languageSelected);
		}, 500);
	};

	return (
		<View style={styles.container}>
			<StatusBar translucent={true} barStyle="light-content" />
			<ImageBackground source={Images.background1} resizeMode="cover" style={styles.imagebackgroundStyle}>
				<View style={styles.dropdownConatiner}>
					<Text style={styles.chooseText}>{t('select_language')}</Text>

					{supportedLanguages ? (
						<DropDownPicker
							items={supportedLanguages}
							defaultValue={languageSelected}
							containerStyle={styles.dropDownContainer}
							style={styles.dropDownColor}
							itemStyle={styles.itemStyle}
							dropDownStyle={styles.dropDownColor}
							onChangeItem={onChangeLanguage}
						/>
					) : null}
				</View>

				<TouchableOpacity
					onPress={() => {
						navigate(ROUTES.LandingScreen);
					}}
					style={styles.btn}
				>
					<Text>{t('continue')}</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);
};

export default SelectLanguage;
