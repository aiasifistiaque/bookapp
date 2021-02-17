import React from 'react';
import { ImageBackground } from 'react-native';

export default function BackgroundImage({ children, source }) {
	return (
		<ImageBackground
			source={source}
			style={{
				flex: 1,
				resizeMode: 'cover',
				width: '100%',
			}}>
			{children}
		</ImageBackground>
	);
}
