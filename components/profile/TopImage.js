import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PrimaryText, WhiteText } from '..';
import getUser from '../../hooks/getUser';
import * as firebase from 'firebase';

const TopImage = () => {
	const [name, setName] = useState('');
	const user = firebase.auth().currentUser;
	useEffect(() => {
		const [username, provider] = user.email.split('@');
		setName(username);
	}, [user]);
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<WhiteText>{name}</WhiteText>
			<Image
				style={{ height: 80, width: 80, marginVertical: 10 }}
				source={require(`../../assets/profileimage.png`)}
			/>
			<TouchableOpacity>
				<PrimaryText size={12}>Upload Photo</PrimaryText>
			</TouchableOpacity>
		</View>
	);
};

export default TopImage;
