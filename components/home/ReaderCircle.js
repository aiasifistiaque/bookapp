import React from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import useCircle from '../../hooks/useCircle';
import { useNavigation } from '@react-navigation/native';
import { WhiteText, PrimaryText } from '..';
import * as firebase from 'firebase';

const ReaderCircle = ({ currentBook }) => {
	const user = firebase.auth().currentUser;
	const { result } = useCircle(currentBook.id);
	const navigation = useNavigation();

	return (
		<ScrollView>
			{result.map(
				(item, i) =>
					item.uid != user.uid && (
						<TouchableOpacity
							key={i}
							onPress={() => navigation.navigate('Chat', { friend: item })}>
							<View
								style={{
									marginVertical: 10,
									flexDirection: 'row',
									alignItems: 'center',
								}}>
								<Image
									style={{ height: 40, width: 40, marginRight: 10 }}
									source={require(`../../assets/profileimage.png`)}
								/>
								<WhiteText size={16}>
									{item.username} is in the circle. Tap to chat!
								</WhiteText>
							</View>
						</TouchableOpacity>
					)
			)}
		</ScrollView>
	);
};

export default ReaderCircle;
