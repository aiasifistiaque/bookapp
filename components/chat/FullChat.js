import React, { useRef } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Chat from './Chat';

export default function FullChat({ chats, user, friend, status }) {
	const flatListRef = useRef();

	return (
		<FlatList
			showsVerticalScrollIndicator={false}
			ref={flatListRef}
			data={chats}
			inverted
			style={{ marginVertical: 15, marginHorizontal: '5%' }}
			keyExtractor={item => item._id}
			initialNumToRender={10}
			maxToRenderPerBatch={5}
			renderItem={(item, index) => (
				<Chat
					chat={item.item}
					index={index}
					arr={chats}
					user={user}
					friend={friend}
					status={status}
				/>
			)}
		/>
	);
}
