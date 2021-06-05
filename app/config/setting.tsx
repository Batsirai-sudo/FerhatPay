/**
 * Basic Setting Variables Define
 */
export const BaseSetting = {
	name: 'FelixPro',
	displayName: 'FelixPro',
	appVersion: '1.0.0',
	defaultLanguage: 'en',
	languageSupport: ['en', 'ar', 'fr'],
	resourcesLanguage: {
		en: {
			translation: require('../lang/en.json'),
		},

		ar: {
			translation: require('../lang/ar.json'),
		},

		fr: {
			translation: require('../lang/fr.json'),
		},
	},
};
export const AvailableLanguages = Object.freeze([
	{ label: 'English', value: 'en' },
	{ label: 'Français (FR)', value: 'fr' },
	{ label: 'Arabic (AR)', value: 'ar', isRTL: true },
]);
