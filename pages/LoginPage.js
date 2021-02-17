import React, { useState } from 'react';
import { View, ImageBackground, TextInput, Text } from 'react-native';
import { gStyles } from '../styles';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase/app';

export default function LoginPage() {
	const navigation = useNavigation();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');
	const [showMessage, setShowMessage] = useState(false);

	const loginButtonPressed = () => {
		setLoading(true);
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				setShowMessage(false);
				setLoading(false);
			})
			.catch(function (error) {
				var errorCode = error.code;
				setMessage(error.message);
				setShowMessage(true);
				setLoading(false);
			});
	};

	const signupButtonPressed = () => {
		navigation.navigate('Signup');
	};

	return (
		<View style={gStyles.container}>
			<ImageBackground
				source={require('../assets/loginBg.jpg')}
				style={gStyles.bgImage}>
				<View style={gStyles.container}>
					<View style={gStyles.inputContainer}>
						<TextInput
							style={gStyles.input}
							placeholder='Username'
							placeholderTextColor='rgba(0,0,0,.6)'
							onChangeText={text => setEmail(text)}
							value={email}
						/>
					</View>
					<View style={gStyles.inputContainer}>
						<TextInput
							style={gStyles.input}
							secureTextEntry={true}
							placeholder='Password'
							placeholderTextColor='rgba(0,0,0,.6)'
							onChangeText={text => setPassword(text)}
							value={password}
						/>
					</View>
					{showMessage && <Text style={{ color: 'crimson' }}>{message}</Text>}
					<LoginButton buttonPressed={loginButtonPressed} />
					<SignupButton buttonPressed={signupButtonPressed} />
				</View>
				<View style={{ flex: 0.3 }} />
			</ImageBackground>
		</View>
	);
}
