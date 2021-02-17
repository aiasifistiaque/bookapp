import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import { useLogged } from '../hooks/useLogged';
import HomeStack from './HomeStack';

const Stack = createStackNavigator();

export default function LoginStack() {
	return useLogged() ? (
		<HomeStack />
	) : (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name='Login' component={LoginPage} />
			<Stack.Screen name='Signup' component={SignupPage} />
		</Stack.Navigator>
	);
}
