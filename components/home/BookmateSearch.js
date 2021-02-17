import React from 'react';
import { View, TextInput } from 'react-native';
import { gStyles } from '../../styles';

const BookmateSearch = () => {
	return (
		<View
			style={[
				gStyles.inputContainer,
				{ backgroundColor: 'rgba(255,255,255,.7)', width: '80%' },
			]}>
			<TextInput
				style={gStyles.input}
				placeholder='Search for bookmate'
				placeholderTextColor='rgba(0,0,0,.6)'
			/>
		</View>
	);
};

export default BookmateSearch;
