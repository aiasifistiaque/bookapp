import React from 'react';
import { View, StyleSheet } from 'react-native';
import FriendShelf from '../components/FriendShelf';
import { colors } from '../styles';

export default function LibraryFriend({ route }) {
	const { friend } = route.params;
	return (
		<View style={styles.container}>
			<FriendShelf friend={friend} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black,
	},
});
