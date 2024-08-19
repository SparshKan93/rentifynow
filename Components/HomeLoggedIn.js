import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, Pressable, ScrollView, StatusBar } from "react-native";
import { useFonts, Montserrat_700Bold, Montserrat_400Regular, Montserrat_600SemiBold, } from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';
import api from '../api/postApi';
import Post from './Post';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeLoggedIn = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const allPosts = await api.getAll();
				setPosts(allPosts);
			} catch (error) {
				console.error('Error fetching posts:', error.message);
			}
		};

		fetchData();
	}, []);

	const navigation = useNavigation();


	let [fontsLoaded] = useFonts({
		'Montserrat-Bold': Montserrat_700Bold,
		'Montserrat-Regular': Montserrat_400Regular,
		'Montserrat-SemiBold': Montserrat_600SemiBold
	});

	if (!fontsLoaded) {
		return <Text>Loading...</Text>;
	}

	const renderPostPairs = () => {
		let pairs = [];
		for (let i = 0; i < posts.length; i += 2) {
			pairs.push(posts.slice(i, i + 2));
		}
		return pairs;
	};

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
			<ScrollView style={styles.scrollView}>
				<View style={{ backgroundColor: "white", height: 100, flexDirection: "row",justifyContent: "space-around" }}>
					<View style={styles.searchHereParent}>
						<Image style={styles.groupIcon} resizeMode="cover" source={require("../assets/Ellipse 35.png")} />
						<View style={styles.hiAnshParent}>
							<Text style={[styles.hiAnsh, styles.postsTypo]}>Hi, Ansh</Text>
							<Image style={styles.mdilocationIcon} resizeMode="cover" source={require("../assets/mdi_location.png")} />
							<Text style={[styles.address1, styles.address1Typo]}>Address 1</Text>
							{/* <Image style={[styles.iconamoonarrowUp2, styles.iconLayout]} resizeMode="cover" source="iconamoon:arrow-up-2.png" /> */}
						</View>
					</View>
					<View style={styles.ellipseParent}>
						<Image style={[styles.iconLayout]} resizeMode="cover" source={require("../assets/ri_notification-3-line.png")} />
					</View>
				</View>
				<Pressable style={[styles.homeLoggedInInner]} onPress={() => navigation.navigate('Srp')}>
					<View style={styles.searchHereParent}>
						<Text style={[styles.searchHere, styles.address1Typo]}>Search here...</Text>
					</View>
					<Image style={[styles.frameChild4, styles.frameChildLayout]} resizeMode="cover" source={require('../assets/majesticons_search-line.png')} />
				</Pressable>
				<View style={[styles.frameParent14]}>
					<Text style={[styles.categories, styles.postsTypo]}>Categories</Text>
					<View style={styles.frameParent15}>
						<View style={styles.frameParent16}>
							<View style={[styles.makifurnitureWrapper, styles.frameChild5Layout]}>
								<Image style={styles.makifurnitureIcon} resizeMode="cover" source={require("../assets/maki_furniture.png")} />
							</View>
							<Text style={[styles.furniture, styles.homeTypo]}>Furniture</Text>
						</View>
						<View style={styles.frameParent17}>
							<View style={[styles.makifurnitureWrapper, styles.frameChild5Layout]}>
								<Image style={styles.makifurnitureIcon} resizeMode="cover" source={require("../assets/mdi_fridge.png")} />
							</View>
							<Text style={[styles.furniture, styles.homeTypo]}>Electronics</Text>
						</View>
						<View style={styles.frameParent17}>
							<View style={[styles.makifurnitureWrapper, styles.frameChild5Layout]}>
								<Image style={styles.makifurnitureIcon} resizeMode="cover" source={require("../assets/gaming.png")} />
							</View>
							<Text style={[styles.furniture, styles.homeTypo]}>Gaming</Text>
						</View>
						<View style={styles.frameParent17}>
							<View style={[styles.makifurnitureWrapper, styles.frameChild5Layout]}>
								<Image style={styles.makifurnitureIcon} resizeMode="cover" source={require("../assets/gameicon.png")} />
							</View>
							<Text style={[styles.furniture, styles.homeTypo]}>Gym</Text>
						</View>
					</View>
				</View>
				<View>
					<Text style={[styles.nearbyPosts, styles.postsTypo]}>Nearby posts</Text>
				</View>
				<View style={{ width: "100%", justifyContent: 'center', alignSelf: 'center', flexWrap: 'wrap', alignItems: "center" }}>
					{/* <Text style={[styles.recommendedPosts, styles.postsTypo]}>Recommended posts</Text> */}
					{renderPostPairs().map((pair, pairIndex) => (
						<View key={pairIndex} style={styles.row}>
							{pair.map((post, postIndex) => (
								<View key={postIndex} style={styles.postContainer}>
									<Post
										title={post.title}
										description={post.description}
										price={post.rent}
										imageSrc={{ uri: post.imageUrl }}
									/>
								</View>
							))}
						</View>
					))}
				</View>


			</ScrollView>
			<View>
				<Pressable style={styles.materialSymbolsLightcamera} onPress={() => { }}>
					<Image style={styles.icon} resizeMode="cover" source={require('../assets/Addpost.png')} />
				</Pressable>
				<View style={[styles.bottomNavParent, styles.bottomPosition]}>
					{/* <View style={[styles.bottomNav, styles.bottomNavFlexBox]}> */}
					{/* <View style={styles.frameParent21}> */}
					<View>
						<Image style={styles.iconLayout} resizeMode="cover" source={require("../assets/flowbite_home-solid.png")} />
						<Text style={[styles.home, styles.homeTypo]}>home</Text>
					</View>
					<Pressable style={[styles.framePressable]} onPress={() => { }}>
						<Image style={styles.frameChildLayout} resizeMode="cover" source={require("../assets/solar_heart-broken.png")} />
						<Text style={[styles.chats, styles.homeTypo]}>My posts</Text>
					</Pressable>
					<View style={{top: "25%"}}>
						<Text style={[styles.addPost, styles.postsTypo]}>Add post</Text>
					</View>
					<Pressable style={[styles.framePressable]} onPress={() => navigation.navigate('CameraScreen')}>
						<Image style={styles.iconLayout} resizeMode="cover" source={require("../assets/material-symbols_orders-outline-rounded.png")} />
						<Text style={[styles.chats, styles.homeTypo]}>Orders</Text>
					</Pressable>
					<View style={[styles.framePressable]}>
						<Image style={styles.iconLayout} resizeMode="cover" source={require("../assets/iconamoon_profile (3).png")} />
						<Text style={[styles.chats, styles.homeTypo]}>profile</Text>
					</View>
					{/* </View> */}
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
		backgroundColor: "white"
	},
	postContainer: {
		flexBasis: '48%',
		// marginHorizontal: '1%',
		marginBottom: 10,
		// width: "0%",
		margin: 2,
		// borderWidth: 1,
		// borderStyle: "solid",
		top: "10%"

	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		paddingHorizontal: '3%',
		marginBottom: 20,
		alignItems: "center"
	},
	scrollView: {
		flex: 1,
	},
	bottomNavFlexBox: {
		justifyContent: "space-evenly",
		// alignItems: "stretch",
	},
	postsTypo: {
		fontFamily: "Montserrat-SemiBold",
		fontWeight: "600"
	},
	address1Typo: {
		fontSize: 14,
		textAlign: "left"
	},
	frameChildLayout: {
		height: 28,
		width: 28
	},
	iconLayout: {
		width: 24,
		height: 24,
		// overflow: "hidden"
	},
	frameChild5Layout: {
		height: 56,
		borderRadius: 44,
		// overflow: "hidden"
	},
	homeTypo: {
		// marginTop: 8,
		fontSize: 12,
		textAlign: "left"
	},
	bottomPosition: {
		width: "100%",
		height: 60,
		// backgroundColor: "grey",
		marginTop: '-8%'
		// position: "absolute"
	},
	text: {
		fontSize: 17,
		letterSpacing: -0.7,
		fontFamily: "SF Pro Text",
		textAlign: "left",
		color: "#000",
		fontWeight: "600"
	},
	time: {
		marginLeft: -17,
		top: 16,
		left: "50%",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		position: "absolute"
	},
	leftArea: {
		// overflow: "hidden",
		height: 44,
		flex: 1
	},
	notchArea: {
		width: 164,
		height: 44
	},
	bar4: {
		marginTop: -6,
		marginLeft: 6.35,
		height: 12,
		width: 3,
		backgroundColor: "#000",
		borderRadius: 1,
		top: "50%",
		left: "50%",
		position: "absolute"
	},
	bar3: {
		marginTop: -3.6,
		marginLeft: 1.05,
		height: 10
	},
	bar2: {
		marginTop: -1,
		marginLeft: -4.25,
		height: 7
	},
	bar1: {
		marginTop: 1.4,
		marginLeft: -9.55,
		height: 5
	},
	autoLayout: {
		marginTop: -7,
		justifyContent: "flex-end",
		right: 0,
		top: "50%",
		alignItems: "center",
		flexDirection: "row",
		position: "absolute"
	},
	statusArea: {
		marginTop: -4,
		marginLeft: -37.5,
		width: 76,
		height: 14,
		top: "50%",
		left: "50%",
		position: "absolute"
	},
	privacyIndicatorNone: {
		top: 6,
		left: 6,
		width: 6,
		height: 6,
		position: "absolute"
	},
	rightArea: {
		height: 44,
		flex: 1
	},
	nearbyPosts: {
		fontSize: 16,
		left: "5%",
		fontFamily: "Montserrat-SemiBold",
		textAlign: "left",
		color: "#000",
		position: "absolute"
	},
	recommendedPosts: {
		top: 888,
		fontSize: 16,
		left: 21,
		fontFamily: "Montserrat-SemiBold",
		textAlign: "left",
		color: "#000",
		position: "absolute"
	},
	frameChild: {
		width: 165,
		height: 152
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
	rs10001: {
		color: "#3ba440"
	},
	text1: {
		color: "#979797"
	},
	rs1000: {
		fontSize: 16
	},
	month1: {
		fontFamily: "Montserrat-Regular"
	},
	rs1000month: {
		marginTop: 6,
		textAlign: "left"
	},
	frameGroup: {
		marginTop: 12
	},
	frameParent: {
		left: 20,
		top: 388,
		position: "absolute"
	},
	frameContainer: {
		top: 630,
		left: 20,
		position: "absolute"
	},
	frameParent1: {
		top: 924,
		left: 20,
		position: "absolute"
	},
	frameParent3: {
		top: 1166,
		left: 20,
		position: "absolute"
	},
	frameParent5: {
		top: 388
	},
	frameParent7: {
		top: 630
	},
	frameParent9: {
		top: 924
	},
	frameParent11: {
		top: 1166
	},
	searchHere: {
		color: "rgba(0, 0, 0, 0.6)",
		fontFamily: "Montserrat-Regular"
	},
	frameChild4: {
		// marginLeft: 210
	},
	searchHereParent: {
		alignItems: "center",
		flexDirection: "row",
		position: "relative",


	},
	homeLoggedInInner: {
		borderColor: "rgba(0, 0, 0, 0.2)",
		paddingHorizontal: 9,
		paddingVertical: 9,
		borderWidth: 1,
		borderStyle: "solid",
		borderRadius: 10,
		width: "90%",
		alignSelf: "center",
		flexDirection: "row",
		justifyContent: "space-between"
		// backgroundColor: "white"
		// overflow: "hidden"
	},
	groupIcon: {
		width: 51,
		height: 51,
		// left: "20%",
		borderRadius: 25,
		overflow: "hidden"
	},
	hiAnsh: {
		fontSize: 16,
		textAlign: "left",
		color: "#000",
		position: "absolute",
		paddingHorizontal:10
	},
	mdilocationIcon: {
		top: "50%",
		left: 5
	},
	address1: {
		top: "55%",
		left: "20%",
		color: "#a1a3a2",
		fontFamily: "Montserrat-Regular",
		position: "absolute"
	},
	iconamoonarrowUp2: {
		top: 27,
		left: 90,
		position: "absolute"
	},
	hiAnshParent: {
		width: 114,
		height: 52,
		marginRight: "20%",
	},
	ellipseIcon: {
		left: -170,
		width: 44,
		zIndex: 0,
		height: 44
	},
	ellipseParent: {
		// marginLeft: "28%",
		top: "8%",
		// alignItems: "flex-end",
		// flexDirection: "row"
	},
	frameParent13: {
		height: 50,
		alignItems: "center",
		flexDirection: "row"
	},
	makifurnitureIcon: {
		left: 10,
		width: 32,
		height: 32,
		top: 10,
		// overflow: "hidden",
		position: "absolute"
	},
	makifurnitureWrapper: {
		borderColor: "rgba(0, 0, 0, 0.09)",
		width: 57,
		borderWidth: 1,
		borderStyle: "solid"
	},
	furniture: {
		color: "#787878",
		fontFamily: "Montserrat-SemiBold",
		fontWeight: "600"
	},
	frameParent16: {
		// alignItems: "center"
	},
	frameChild5: {
		width: 56
	},
	frameParent17: {
		marginLeft: 20,
		alignItems: "center"
	},
	frameParent15: {
		top: 52,
		flexDirection: "row",
		left: 0,
		position: "absolute"
	},
	categories: {
		top: 20,
		fontSize: 16,
		textAlign: "left",
		color: "#000",
		left: 0,
		position: "absolute"
	},
	frameParent14: {
		height: 160,
		backgroundColor: "#fff",
		width: 350,
		left: 20
	},
	homeLoggedInChild: {
		top: 233,
		left: 359,
		width: 31,
		height: 97,
		backgroundColor: "transparent",
		position: "absolute"
	},
	homeLoggedInItem: {
		top: 1412,
		height: 143,
		// overflow: "hidden",
		backgroundColor: "#fff"
	},
	home: {
		fontWeight: "700",
		fontFamily: "Montserrat-Bold",
		color: "#0a74f0"
	},
	chats: {
		color: "rgba(23, 23, 23, 0.45)",
		fontFamily: "Montserrat-SemiBold",
		fontWeight: "600"
	},
	framePressable: {
		// marginLeft: 30
	},
	addPost: {
		color: "#242424",
		// marginLeft: 30,
		fontSize: 16,
		textAlign: "left",
		// bottom: "0%"
	},
	frameParent21: {
		alignItems: "flex-end",
		flexDirection: "row",
		justifyContent: "space-around"
	},
	bottomNav: {
		// height: 84,
		paddingHorizontal: "1%",
		paddingVertical: "2%",
		// width: "100%",
		position: "absolute",
		bottom: 0,
		// left: 0,
		// right: 0,
		// backgroundColor: "#fff"
	},
	icon: {
		borderRadius: 56,
		// height: "100%",
		overflow: "visible",
		// width: "100%",
		width: 78,
		height: 78,
		top:"-80%"
	},
	materialSymbolsLightcamera: {
		// left: "41%",
		width: 80,
		height: 40,
		alignSelf: "center",
		borderRadius: 56,
		// backgroundColor: "grey",
		// top: 20,
		zIndex: 1
		// position: "absolute"
	},
	bottomNavParent: {
		paddingTop: "2%",
		height: "10%",
		flexDirection: "row",
		alignItems: "baseline",
		justifyContent: "space-evenly"
	},
	base: {
		bottom: 1,
		borderRadius: 10,
		backgroundColor: "#000",
		right: 0,
		left: 0,
		top: 0,
		position: "absolute"
	},
	homeLoggedIn: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between"
		// backgroundColor: "grey"
	}
});

export default HomeLoggedIn;
