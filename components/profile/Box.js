import React from 'react';
import { View, Text } from 'react-native';

const Box = ({ title }) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				width: '80%',
				padding: 10,
				backgroundColor: 'whitesmoke',
				justifyContent: 'space-between',
				marginVertical: 10,
			}}>
			<Text>{title}</Text>
		</View>
	);
};

export default Box;
