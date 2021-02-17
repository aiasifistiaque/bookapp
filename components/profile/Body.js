import React from 'react';
import { View } from 'react-native';
import Box from './Box';

const Body = () => {
	return (
		<View style={{ flex: 1, alignItems: 'center' }}>
			<Box title='username' value='anikai'></Box>
			<Box title='city' value='anikai'></Box>
			<Box title='email' value='anikai'></Box>
			<Box title='' value='anikai'></Box>
		</View>
	);
};

export default Body;
