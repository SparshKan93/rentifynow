import React from 'react';
import { Text, StyleSheet, View, Image, ImageBackground,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Post = ({ title, description, price, imageSrc }) => {
	const navigation = useNavigation();
	// console.log({price})
	return (
		<Pressable onPress={() => navigation.navigate('Detail', {price})} style={styles.frameParent}>
			<ImageBackground style={[styles.frameChild, styles.frameChildLayout1]} resizeMode="cover" source={require('../assets/Frame 289.png')} >
				<View style={styles.kmAwayWrapper}>
					<Text style={[styles.kmAway, styles.kmAwayClr]}>1km away</Text>
				</View>
			</ImageBackground>
			<View style={styles.frameGroup}>
				<View style={styles.acForRentParent}>
					<Text style={styles.acForRent}>{title}</Text>
					<Text style={styles.yearsOldIn}>{`3 years old in brand new... `}</Text>
				</View>
				<Text style={styles.rs1000month}>
					<Text style={[styles.rs1000, styles.rs1000Typo]}>
						<Text style={styles.rs10001}>Rs.{price}</Text>
						<Text style={styles.text1}>/</Text>
					</Text>
					<Text style={styles.text1}>
						<Text style={[styles.month1, styles.month1Typo]}>month</Text>
					</Text>
				</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	kmAwayClr: {
		color: "#000",
		textAlign: "left"
	},
	kmAway: {
		top: 2,
		left: 5,
		textAlign: "left",
		fontFamily: "Montserrat-Regular",
		fontSize: 12,
		position: "absolute"
	},
	kmAwayWrapper: {
		top: "5%",
		borderTopRightRadius: 4,
		borderBottomRightRadius: 4,
		backgroundColor: "#76ffbd",
		width: 73,
		height: 20,
		position: "absolute",
		overflow: "hidden"
	},
	frameParent: {
		width: "100%",
		overflow: "hidden",
		alignItems: "center",
		paddingBottom: "10%"
		// left: "10%",
		// top: "15%",
		// position: "relative",
		// backgroundColor: "grey"
	},
	frameChild: {
		width: 165,
		height: 152
	},
	frameChildLayout1: {
		borderRadius: 12,
		// overflow: "hidden"
	},
	frameGroup: {
		marginTop: 12
	},
	acForRent: {
		fontSize: 14,
		textAlign: "left",
		color: "#000"
	},
	yearsOldIn: {
		marginTop: 4,
		color: "#979797",
		fontFamily: "Montserrat-Regular",
		textAlign: "left"
	},
	rs1000month: {
		marginTop: 6,
		textAlign: "left"
	},
	rs1000: {
		fontSize: 16
	},
	rs1000Typo: {
		fontFamily: "Montserrat-Bold",
		fontWeight: "500"
	},
	rs10001: {
		color: "#3ba440"
	},
	text1: {
		color: "#979797"
	},
	month1: {
		fontFamily: "Montserrat-Regular"
	},
	month1Typo: {
		fontSize: 12,
		fontFamily: "Montserrat-Regular"
	}

})
export default Post;
