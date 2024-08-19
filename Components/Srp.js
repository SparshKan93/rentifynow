import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Image, Pressable, TextInput } from "react-native";
import { useFonts, Montserrat_700Bold, Montserrat_400Regular, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Srp = () => {
	const [search, setSearch] = useState("");
	const navigation = useNavigation();

	let [fontsLoaded] = useFonts({
		'Montserrat-Bold': Montserrat_700Bold,
		'Montserrat-Regular': Montserrat_400Regular,
		'Montserrat-SemiBold': Montserrat_600SemiBold
	});

	if (!fontsLoaded) {
		return <Text>Loading...</Text>;
	}

	const handleChangeSearch = (string) => {
		setSearch(string);
	};

	const handleSearchSubmit = () => {
		navigation.navigate('SearchPage', { search });
	};

	return (
		<SafeAreaView style={styles.srp}>
			<View style={styles.bedsParentFlexBox}>
				<Pressable style={styles.miarrowUp} onPress={() => { }}>
					<Image style={styles.miarrowUpLayout} resizeMode="cover" source={require('../assets/mi_arrow-up.png')} />
				</Pressable>
				<View style={styles.srpInner}>
					<TextInput
						style={styles.beds}
						placeholder='Search Here..'
						onChangeText={handleChangeSearch}
						value={search}
						keyboardType="default"
						onSubmitEditing={handleSearchSubmit}
					/>
					{search ? (
						<Pressable style={[styles.frameChild]} onPress={() => setSearch("")}>
							<Image resizeMode="cover" source={require('../assets/basil_cross-outline.png')} />
						</Pressable>
					) : (
						<Pressable style={[styles.frameChild]} onPress={() => navigation.navigate('Camera')}>
							<Image resizeMode="cover" source={require('../assets/simple-icons_googlelens.png')} />
						</Pressable>
					)}
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	srpInner: {
		borderStyle: "solid",
		borderColor: "rgba(0, 0, 0, 0.4)",
		borderWidth: 1,
		width: "80%",
		height: 50,
		paddingHorizontal: 14,
		paddingVertical: 11,
		flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
		borderRadius: 12
	},
	miarrowUpLayout: {
		height: "100%",
		width: "100%"
	},
	beds: {
		color: "rgba(0, 0, 0, 0.6)",
		fontFamily: "Montserrat-Regular",
		fontSize: 14,
		textAlign: "left",
		width: "80%",
		paddingEnd: "5%"
	},
	frameChild: {
		paddingHorizontal: 2,
	},
	bedsParentFlexBox: {
		top: "10%",
		flexDirection: "row",
		justifyContent: "space-evenly"
	},
	miarrowUp: {
		top: "3%",
		height: 24,
		width: 24
	},
	srp: {
		backgroundColor: "#f7f7f7",
		flex: 1,
		width: "100%"
	}
});

export default Srp;
