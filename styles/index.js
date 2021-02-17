import React from 'react';
import { StyleSheet } from 'react-native';

export const gStyles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	bgImage: {
		flex: 1,
		resizeMode: 'cover',
		width: '100%',
	},
	inputContainer: {
		backgroundColor: 'white',
		flexDirection: 'row',
		width: '70%',
		borderRadius: 100,
		marginVertical: 10,
	},
	input: {
		flex: 1,
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 100,
	},
	background: {
		flex: 1,
		backgroundColor: '#28261B',
	},
});

export const colors = {
	loginBackground: '#44ABCB',
	primary: 'rgba(193,203,68,.75)',
	black: '#28261B',
	primaryColor: '#CAD16C',
};
