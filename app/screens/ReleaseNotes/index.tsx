import React from 'react';
import { ScrollView, View } from 'react-native';
// import navigationStyle from '../../components/navigationStyle';
import { SafeBlueArea, Text } from '@components';
const ReleaseNotes = () => {
	//   const notes = require('../../release-notes');

	return (
		<SafeBlueArea>
			<ScrollView>
				<View style={{ padding: 20 }}>
					<Text whiteColor>{'notes'}</Text>
				</View>
			</ScrollView>
		</SafeBlueArea>
	);
};

// ReleaseNotes.navigationOptions = navigationStyle({}, (opts) => ({ ...opts, title: loc.settings.about_release_notes }));

export default ReleaseNotes;
