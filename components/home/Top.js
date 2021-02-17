import React from 'react';
import { View, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

export default function Top() {
	return (
		<View
			style={{
				flex: 1,
			}}>
			<ScrollView
				horizontal={true}
				style={{
					marginVertical: 25,
				}}>
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}>
					{books.map((book, i) => (
						<View
							style={{
								flex: 1,
								alignItems: 'center',
								justifyContent: 'center',
								marginHorizontal: 5,
							}}
							key={i}>
							{book.image}
						</View>
					))}
				</View>
			</ScrollView>
		</View>
	);
}

const books = [
	{ image: <Image source={require('../../assets/bk1.jpg')} /> },
	{ image: <Image source={require('../../assets/bk2.jpg')} /> },
	{ image: <Image source={require('../../assets/bk3.jpg')} /> },
	{ image: <Image source={require('../../assets/bk1.jpg')} /> },
	{ image: <Image source={require('../../assets/bk2.jpg')} /> },
	{ image: <Image source={require('../../assets/bk3.jpg')} /> },
];
