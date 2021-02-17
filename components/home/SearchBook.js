import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const SearchBook = ({ search, setSearch }) => {
	return (
		<View
			style={{
				paddingHorizontal: 20,
				paddingVertical: 10,
				flexDirection: 'row',
				alignItems: 'center',
				marginVertical: 20,
			}}>
			<View
				style={{
					flex: 1,
					backgroundColor: 'rgba(255,255,255,.8)',
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
		</View>
	);
};

export default SearchBook;
