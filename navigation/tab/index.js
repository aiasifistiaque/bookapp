import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfilePage from '../../pages/ProfilePage';
import { colors } from '../../styles';
import LibraryPage from '../../pages/LibraryPage';
import { Image } from 'react-native';
import HomePageStack from '../HomePageStack';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color = 'slateblue', size }) => {
					let iconName = 'chat';
					if (route.name === 'Home') {
						return focused ? (
							<Image
								style={{ height: 50, width: 100, resizeMode: 'contain' }}
								source={require(`../../assets/home.png`)}
							/>
						) : (
							<Image
								style={{ height: 50, width: 100, resizeMode: 'contain' }}
								source={require(`../../assets/home.png`)}
							/>
						);
					} else if (route.name === 'Library') {
						return focused ? (
							<Image
								style={{ height: 30, width: 30, resizeMode: 'contain' }}
								source={require(`../../assets/libraryfocused.png`)}
							/>
						) : (
							<Image
								style={{ height: 30, width: 30, resizeMode: 'contain' }}
								source={require(`../../assets/library.png`)}
							/>
						);
					} else if (route.name === 'Profile') {
						return focused ? (
							<Image
								style={{ height: 30, width: 30, resizeMode: 'contain' }}
								source={require(`../../assets/profilefocused.png`)}
							/>
						) : (
							<Image
								style={{ height: 30, width: 30, resizeMode: 'contain' }}
								source={require(`../../assets/profile.png`)}
							/>
						);
					}
					return <Image source={require(`../../assets/home.png`)} />;
				},
			})}
			tabBarOptions={{
				activeBackgroundColor: colors.primaryColor,
				inactiveBackgroundColor: colors.black,
				activeTintColor: colors.black,
				inactiveTintColor: 'white',
				showLabel: false,
				tabStyle: {
					//backgroundColor: colors.black,
				},
			}}>
			<Tab.Screen name='Profile' component={ProfilePage} />
			<Tab.Screen name='Home' component={HomePageStack} />
			<Tab.Screen name='Library' component={LibraryPage} />
		</Tab.Navigator>
	);
}
