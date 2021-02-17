import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './LoginStack';

const Navigator = () => {
	return (
		<NavigationContainer>
			<LoginStack />
		</NavigationContainer>
	);
};

export default Navigator;
