import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export const Loading = (props: any) => {
	return (
		<View style={{ flex: 1, paddingTop: 200 }} {...props}>
			<ActivityIndicator />
		</View>
	);
};
