import React, { useState } from 'react';
import { View, ImageBackground, TextInput, Text } from 'react-native';
import { gStyles } from '../styles';
import SignupButton from '../components/SignupButton';
import { WhiteText } from '../components';
import LoginButton from '../components/LoginButton';
import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase';

export default function SignupPage() {
	const navigation = useNavigation();

	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [confirmPass, setConfirmPass] = useState();
	const [errMessage, setErrMessage] = useState();
	const [loading, setLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const signupButtonPressed = () => {
		setLoading(true);
		if (email.length < 1) {
			setErrMessage('enter a valid email');
			setIsError(true);
			setLoading(false);
			return;
		}
		if (pass.length < 8) {
			setErrMessage('Password Must be 8 letters long');
			setIsError(true);
			setLoading(false);
			return;
		}

		if (pass == confirmPass) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, pass)
				.then(() => {
					setErrMessage('Success');
					setIsError(true);
					setLoading(false);
					navigation.navigate('Login');
				})
				.catch(function (error) {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					setErrMessage(errorMessage);
					setLoading(false);
					setIsError(true);
					return;
				});
		} else {
			setErrMessage('Password does not match');
			setIsError(true);
			setLoading(false);
			return;
		}
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
							placeholder='Email'
							placeholderTextColor='rgba(0,0,0,.6)'
							onChangeText={email => setEmail(email)}
							value={email}
						/>
					</View>
					<View style={gStyles.inputContainer}>
						<TextInput
							style={gStyles.input}
							placeholder='Password'
							placeholderTextColor='rgba(0,0,0,.6)'
							onChangeText={text => setPass(text)}
							value={pass}
							secureTextEntry={true}
						/>
					</View>
					<View style={gStyles.inputContainer}>
						<TextInput
							style={gStyles.input}
							placeholder='Confirm Password'
							placeholderTextColor='rgba(0,0,0,.6)'
							onChangeText={text => setConfirmPass(text)}
							value={confirmPass}
							secureTextEntry={true}
						/>
					</View>
					{isError ? (
						<Text style={{ color: 'crimson' }}>{errMessage}</Text>
					) : null}
					<SignupButton buttonPressed={signupButtonPressed} />
				</View>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<WhiteText>Do not have an account?</WhiteText>
					<LoginButton buttonPressed={() => navigation.navigate('Login')} />
				</View>
			</ImageBackground>
		</View>
	);
}
