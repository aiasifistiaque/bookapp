import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ search, setSearch }) => {
	return (
		<View
			style={{
				paddingHorizontal: 20,
				paddingVertical: 10,
				flexDirection: 'row',
				alignItems: 'center',
			}}>
			<View>
				<Text
					style={{
						color: 'white',
						fontSize: 18,
						fontWeight: '600',
					}}>
					Library
				</Text>
			</View>
			<View
				style={{
					flex: 1,
					backgroundColor: 'white',
					borderRadius: 100,
					marginHorizontal: 20,
				}}>
				<TextInput
					value={search}
					onChangeText={text => setSearch(text)}
					placeholder='search'
					style={{
						padding: 10,
					}}
				/>
			</View>
			<TouchableOpacity style={{ padding: 10 }}>
				<Ionicons name='md-add-circle-outline' size={30} color='white' />
			</TouchableOpacity>
		</View>
	);
};

export default SearchBar;
