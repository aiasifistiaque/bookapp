import React from 'react';
import TabNavigator from './tab';
import { createStackNavigator } from '@react-navigation/stack';
import useCreateNewUser from '../hooks/useCreateNewUser';
import ConversationPage from '../pages/ConversationPage';
import AddBookPage from '../pages/AddBookPage';
import LibraryFriend from '../pages/LibraryFriend';

const Stack = createStackNavigator();

export default function HomeStack() {
	const NewUser = useCreateNewUser();
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name='Tabs' component={TabNavigator} />
			<Stack.Screen name='Chat' component={ConversationPage} />
			<Stack.Screen name='Add' component={AddBookPage} />
			<Stack.Screen name='FLibrary' component={LibraryFriend} />
		</Stack.Navigator>
	);
}
