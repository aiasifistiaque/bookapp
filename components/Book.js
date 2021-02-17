import React from 'react';
import { View, Image } from 'react-native';
import { PrimaryText } from './index';
import getDate from '../hooks/getDate';

export default function Book({ book }) {
	return (
		<View
			style={{
				flexDirection: 'row',
				marginVertical: 15,
				flex: 1,
			}}>
			<Image
				source={{ uri: book.imageLinks.thumbnail || null }}
				style={{
					height: 100,
					width: 80,
					marginHorizontal: 10,
					resizeMode: 'contain',
				}}
			/>
			<View style={{ justifyContent: 'space-between', flex: 1 }}>
				<View>
					<PrimaryText size={20}>{book.title}</PrimaryText>
					<PrimaryText>Written by:</PrimaryText>
					<PrimaryText>{book.authors[0]}</PrimaryText>
					<PrimaryText>Starting Date: {getDate(book.started)}</PrimaryText>
					<PrimaryText>Rate: </PrimaryText>
				</View>
			</View>
		</View>
	);
}
