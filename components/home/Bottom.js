import React from 'react';
import { View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WhiteText } from '..';
import { ScrollView } from 'react-native-gesture-handler';
import useFeed from '../../hooks/useFeed';

export default function Bottom() {
	const { result, loading } = useFeed();
	if (loading) return null;
	if (!result) return null;
	if (result)
		return (
			<View style={{ flex: 2, margin: 10 }}>
				<ScrollView>
					{result.map(
						(item, i) =>
							item != null && (
								<View
									key={i}
									style={{
										flexDirection: 'row',
										marginVertical: 10,
										alignItems: 'center',
									}}>
									<Image
										style={{
											height: 35,
											width: 35,
											resizeMode: 'contain',
											marginRight: 10,
										}}
										source={require(`../../assets/book.png`)}
									/>
									<View style={{ marginRight: 40 }}>
										<WhiteText>
											{item.username} started reading {item.book} by
											{' ' + item.currentBook.authors[0]}
										</WhiteText>
									</View>
								</View>
							)
					)}
				</ScrollView>
			</View>
		);
}
