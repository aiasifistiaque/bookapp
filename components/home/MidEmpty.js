import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WhiteText } from '..';
import { colors } from '../../styles';
import { useNavigation } from '@react-navigation/native';

export default function MidEmpty() {
	const navigation = useNavigation();
	return (
		<View
			style={{
				flex: 1.5,
				backgroundColor: 'rgba(30,30,20,.97)',
				marginHorizontal: '-10%',
				borderRadius: 20,
				alignItems: 'center',
				justifyContent: 'space-around',
			}}>
			<Text style={{ fontSize: 20, color: 'white', fontWeight: '600' }}>
				No Current book in the list
			</Text>
			<TouchableOpacity
				onPress={() => navigation.navigate('Add')}
				style={{
					backgroundColor: colors.primary,
					paddingHorizontal: 25,
					paddingVertical: 10,
					borderRadius: 5,
				}}>
				<WhiteText>Add Book</WhiteText>
			</TouchableOpacity>
		</View>
	);
}
