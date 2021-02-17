import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { WhiteText } from '..';
import addBook from '../../hooks/addBook';
import AddBookToLibrary from './AddBookToLibrary';
import BookAdded from './BookAdded';
import ResultContainer from './ResultContainer';

export default function SearchResult({ res, subtitle, dat, uid }) {
	const [pressed, setPressed] = useState(false);
	const { loading, done } = addBook({
		book: dat,
		uid: uid,
		pressed: pressed,
	});

	if (res == 'no items found')
		return (
			<ResultContainer>
				<WhiteText>{res}</WhiteText>
			</ResultContainer>
		);
	if (done) return <BookAdded />;
	return (
		<ResultContainer>
			<Image
				source={{
					uri: dat.volumeInfo.imageLinks
						? dat.volumeInfo.imageLinks.thumbnail
						: 'https://images.pexels.com/photos/2908773/pexels-photo-2908773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
				}}
				style={{
					marginHorizontal: 20,
					height: 150,
					width: 100,
					resizeMode: 'contain',
				}}
			/>
			<View style={{ flex: 1 }}>
				<WhiteText size={20}>{res}</WhiteText>
				<WhiteText>{subtitle && subtitle}</WhiteText>
				{dat &&
					dat.volumeInfo.authors &&
					dat.volumeInfo.authors.map((item, i) => (
						<View>
							{i == 0 && <WhiteText>Author: </WhiteText>}
							<WhiteText>{item}</WhiteText>
						</View>
					))}

				<AddBookToLibrary
					setPressed={() => setPressed(true)}
					loading={loading}
				/>
			</View>
		</ResultContainer>
	);
}
