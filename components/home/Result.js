import React from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { WhiteText } from '..';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../styles';

export default function Result({ addButtonPressed, dat, loading }) {
	if (!dat) return null;
	return (
		<View style={styles.container}>
			{dat.volumeInfo.imageLinks && (
				<Image
					source={{
						uri:
							dat.volumeInfo.imageLinks.thumbnail &&
							dat.volumeInfo.imageLinks.thumbnail,
					}}
					style={styles.image}
				/>
			)}
			<View
				style={{
					flex: 1,
					marginTop: 20,
					width: '100%',
				}}>
				<View style={{ alignItems: 'center', marginVertical: 20 }}>
					<WhiteText size={22}>{dat.volumeInfo.title}</WhiteText>
					<WhiteText size={18}>
						{dat.volumeInfo.subtitle && dat.volumeInfo.subtitle}
					</WhiteText>

					{dat &&
						dat.volumeInfo.authors &&
						dat.volumeInfo.authors.map((item, i) => (
							<View key={i}>
								{i == 0 && <WhiteText>Author: </WhiteText>}
								<WhiteText>{item}</WhiteText>
							</View>
						))}
				</View>
				{loading ? (
					<ActivityIndicator color='white' />
				) : (
					<TouchableOpacity onPress={addButtonPressed} style={styles.button}>
						<WhiteText>add book</WhiteText>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 0.8,
	},
	button: {
		backgroundColor: colors.black,
		alignItems: 'center',
		marginVertical: 10,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 100,
		width: '100%',
	},
	image: {
		marginHorizontal: 20,
		height: 150,
		width: 100,
	},
});
