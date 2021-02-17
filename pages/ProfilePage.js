import React from 'react';
import { View } from 'react-native';
import { colors } from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopImage from '../components/profile/TopImage';
import Body from '../components/profile/Body';
import LogoutButton from '../components/profile/LogoutButton';

export default function ProfilePage() {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: colors.black,
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<View style={{ flex: 1 }}>
				<TopImage name='anikai' />
			</View>
			<View style={{ flex: 3, width: '100%' }}>
				<Body />
				<View style={{ alignItems: 'center' }}>
					<LogoutButton />
				</View>
			</View>
		</SafeAreaView>
	);
}
