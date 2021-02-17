import React from 'react';
import { Text } from 'react-native';

export const WhiteText = ({ children, size, weight }) => {
	return (
		<Text
			style={{
				color: 'white',
				fontWeight: weight || '600',
				fontSize: size || 15,
			}}>
			{children}
		</Text>
	);
};

export const PrimaryText = ({ children, size, weight }) => {
	return (
		<Text
			style={{
				fontSize: size || 15,
				fontWeight: weight || '600',
				color: '#CAD16C',
			}}>
			{children}
		</Text>
	);
};
