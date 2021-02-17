import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import useCreateNewUser from '../hooks/useCreateNewUser';
import BookCircle from '../pages/BookCircle';
import HomePage from '../pages/HomePage';

const Stack = createStackNavigator();

export default function HomePageStack() {
	const NewUser = useCreateNewUser();
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name='Homepage' component={HomePage} />
			<Stack.Screen name='Circle' component={BookCircle} />
		</Stack.Navigator>
	);
}
