import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../styles';
import Top from '../components/home/Top';
import Mid from '../components/home/Mid';
import Bottom from '../components/home/Bottom';
import HeaderHome from '../components/home/HeaderHome';
import MainContainer from '../components/home/MainContainer';
import useCurrentBook from '../hooks/useCurrentBook';
import MidEmpty from '../components/home/MidEmpty';

export default function HomePage() {
	const { isReading } = useCurrentBook();
	return (
		<View style={{ flex: 1, backgroundColor: colors.primary }}>
			<HeaderHome header='Popular Books' />
			<MainContainer>
				<Top />
				{isReading ? <Mid /> : <MidEmpty />}
				<Bottom />
			</MainContainer>
		</View>
	);
}
