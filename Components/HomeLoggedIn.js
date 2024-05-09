import * as React from "react";
import { Text, StyleSheet, View, Image, ImageBackground, Pressable, ScrollView } from "react-native";
import { useFonts, Montserrat_700Bold, Montserrat_400Regular, Montserrat_600SemiBold, } from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';

const HomeLoggedIn = () => {

	const navigation = useNavigation();

	let [fontsLoaded] = useFonts({
		'Montserrat-Bold': Montserrat_700Bold,
		'Montserrat-Regular': Montserrat_400Regular,
		'Montserrat-SemiBold': Montserrat_600SemiBold
	});

	if (!fontsLoaded) {
		return <Text>Loading...</Text>;
	}

	return (
		<View style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<View style={styles.homeLoggedIn}>
					<Text style={[styles.nearbyPosts, styles.postsTypo]}>Nearby posts</Text>
					<Text style={[styles.recommendedPosts, styles.postsTypo]}>Recommended posts</Text>
					<View style={styles.frameParent}>
						<Image style={[styles.frameChild, styles.frameChildLayout1]} resizeMode="cover" source={require('../assets/Frame 289.png')} />
						<View style={styles.frameGroup}>
							<View style={styles.acForRentParent}>
								<Text style={styles.acForRent}>Ac for Rent</Text>
								<Text style={styles.yearsOldIn}>{`3 years old in brand new... `}</Text>
							</View>
							<Text style={styles.rs1000month}>
								<Text style={[styles.rs1000, styles.rs1000Typo]}>
									<Text style={styles.rs10001}>Rs.1000</Text>
									<Text style={styles.text1}>/</Text>
								</Text>
								<Text style={styles.text1}>
									<Text style={[styles.month1, styles.month1Typo]}>month</Text>
								</Text>
							</Text>
						</View>
					</View>

					<View style={styles.frameContainer}>
						<Image style={[styles.frameChild, styles.frameChildLayout1]} resizeMode="cover" source={require('../assets/Frame 286.png')} />
						<View style={styles.frameGroup}>
							<View>
								<Text style={[styles.acForRent, styles.rs1000Typo]}>Ac for Rent</Text>
								<Text style={[styles.yearsOldIn, styles.month1Typo]}>{`3 years old in brand new... `}</Text>
							</View>
							<Text style={styles.rs1000month}>
								<Text style={[styles.rs1000, styles.rs1000Typo]}>
									<Text style={styles.rs10001}>Rs.1000</Text>
									<Text style={styles.text1}>/</Text>
								</Text>
								<Text style={styles.text1}>
									<Text style={[styles.month1, styles.month1Typo]}>month</Text>
								</Text>
							</Text>
						</View>
					</View>
					<View style={styles.frameParent1}>
						<Image style={[styles.frameChild, styles.frameChildLayout1]} resizeMode="cover" source={require('../assets/Frame 289.png')} />
						<View style={styles.frameGroup}>
							<View>
								<Text style={[styles.acForRent, styles.rs1000Typo]}>Ac for Rent</Text>
								<Text style={[styles.yearsOldIn, styles.month1Typo]}>{`3 years old in brand new... `}</Text>
							</View>
							<Text style={styles.rs1000month}>
								<Text style={[styles.rs1000, styles.rs1000Typo]}>
									<Text style={styles.rs10001}>Rs.1000</Text>
									<Text style={styles.text1}>/</Text>
								</Text>
								<Text style={styles.text1}>
									<Text style={[styles.month1, styles.month1Typo]}>month</Text>
								</Text>
							</Text>
						</View>
					</View>
					<View style={styles.frameParent3}>
						<Image style={[styles.frameChild, styles.frameChildLayout1]} resizeMode="cover" source={require('../assets/Frame 289.png')} />
						<View style={styles.frameGroup}>
							<View>
								<Text style={[styles.acForRent, styles.rs1000Typo]}>Ac for Rent</Text>
								<Text style={[styles.yearsOldIn, styles.month1Typo]}>{`3 years old in brand new... `}</Text>
							</View>
							<Text style={styles.rs1000month}>
								<Text style={[styles.rs1000, styles.rs1000Typo]}>
									<Text style={styles.rs10001}>Rs.1000</Text>
									<Text style={styles.text1}>/</Text>
								</Text>
								<Text style={styles.text1}>
									<Text style={[styles.month1, styles.month1Typo]}>month</Text>
								</Text>
							</Text>
						</View>
					</View>
					<View style={[styles.frameParent5, styles.frameParentPosition1]}>
						<ImageBackground style={[styles.frameChild, styles.frameChildLayout1]} resizeMode="cover" source={require('../assets/Frame 287.png')} >
							<View style={[styles.kmAwayWrapper, styles.awayLayout]}>
								<Text style={[styles.kmAway, styles.month1Typo]}>1km away</Text>
							</View>
						</ImageBackground>
						<View style={styles.frameGroup}>
							<View>
								<Text style={[styles.acForRent, styles.rs1000Typo]}>Bed for rent</Text>
								<Text style={[styles.yearsOldIn, styles.month1Typo]}>{`2 years old in brand new... `}</Text>
							</View>
							<Text style={styles.rs1000month}>
								<Text style={[styles.rs1000, styles.rs1000Typo]}>
									<Text style={styles.rs10001}>Rs.500</Text>
									<Text style={styles.text1}>/</Text>
								</Text>
								<Text style={styles.text1}>
									<Text style={[styles.month1, styles.month1Typo]}>month</Text>
								</Text>
							</Text>
						</View>
					</View>
					<View style={[styles.frameParent7, styles.frameParentPosition1]}>
						<Image style={[styles.frameChild, styles.frameChildLayout1]} resizeMode="cover" source={require('../assets/Frame 287.png')} />
						<View style={styles.frameGroup}>
							<View>
								<Text style={[styles.acForRent, styles.rs1000Typo]}>Bed for rent</Text>
								<Text style={[styles.yearsOldIn, styles.month1Typo]}>{`2 years old in brand new... `}</Text>
							</View>
							<Text style={styles.rs1000month}>
								<Text style={[styles.rs1000, styles.rs1000Typo]}>
									<Text style={styles.rs10001}>Rs.500</Text>
									<Text style={styles.text1}>/</Text>
								</Text>
								<Text style={styles.text1}>
									<Text style={[styles.month1, styles.month1Typo]}>month</Text>
								</Text>
							</Text>
						</View>
					</View>
					<View style={[styles.frameParent9, styles.frameParentPosition1]}>
						<Image style={[styles.frameChild, styles.frameChildLayout1]} resizeMode="cover" source={require('../assets/Frame 287.png')} />
						<View style={styles.frameGroup}>
							<View>
								<Text style={[styles.acForRent, styles.rs1000Typo]}>Bed for rent</Text>
								<Text style={[styles.yearsOldIn, styles.month1Typo]}>{`2 years old in brand new... `}</Text>
							</View>
							<Text style={styles.rs1000month}>
								<Text style={[styles.rs1000, styles.rs1000Typo]}>
									<Text style={styles.rs10001}>Rs.500</Text>
									<Text style={styles.text1}>/</Text>
								</Text>
								<Text style={styles.text1}>
									<Text style={[styles.month1, styles.month1Typo]}>month</Text>
								</Text>
							</Text>
						</View>
					</View>
					<View style={[styles.frameParent11, styles.frameParentPosition1]}>
						<Image style={[styles.frameChild, styles.frameChildLayout1]} resizeMode="cover" source={require('../assets/Frame 287.png')} />
						<View style={styles.frameGroup}>
							<View>
								<Text style={[styles.acForRent, styles.rs1000Typo]}>Bed for rent</Text>
								<Text style={[styles.yearsOldIn, styles.month1Typo]}>{`2 years old in brand new... `}</Text>
							</View>
							<Text style={styles.rs1000month}>
								<Text style={[styles.rs1000, styles.rs1000Typo]}>
									<Text style={styles.rs10001}>Rs.500</Text>
									<Text style={styles.text1}>/</Text>
								</Text>
								<Text style={styles.text1}>
									<Text style={[styles.month1, styles.month1Typo]}>month</Text>
								</Text>
							</Text>
						</View>
					</View>
					<View style={[styles.kmAwayContainer, styles.awayLayout]}>
						{/* <Image style={styles.frameIcon} resizeMode="cover" source={require('../assets/Frame 288.png')} /> */}
						<Text style={[styles.kmAway, styles.month1Typo]}>3km away</Text>
					</View>
					<Pressable style={[styles.homeLoggedInInner, styles.frameParentPosition]} onPress={() => navigation.navigate('Srp')}>
						<View style={styles.searchHereParent}>
							<Text style={[styles.searchHere, styles.address1Typo]}>Search here...</Text>
							<Image style={[styles.frameChild4, styles.frameChildLayout]} resizeMode="cover" source={require('../assets/majesticons_search-line.png')} />
						</View>
					</Pressable>
					<View style={[styles.frameParent13, styles.frameParentPosition]}>
						<View style={styles.searchHereParent}>
							<Image style={styles.groupIcon} resizeMode="cover" source="Group 50.png" />
							<View style={styles.hiAnshParent}>
								<Text style={[styles.hiAnsh, styles.postsTypo]}>Hi, Ansh</Text>
								<Image style={styles.mdilocationIcon} resizeMode="cover" source="mdi:location.png" />
								<Text style={[styles.address1, styles.address1Typo]}>Address 1</Text>
								<Image style={[styles.iconamoonarrowUp2, styles.iconLayout]} resizeMode="cover" source="iconamoon:arrow-up-2.png" />
							</View>
						</View>
						<Image style={styles.ellipseIcon} resizeMode="cover" source={require("../assets/Ellipse 35.png")} />
						<View style={styles.ellipseParent}>
							<Image style={[styles.rinotification3LineIcon, styles.iconLayout]} resizeMode="cover" source={require("../assets/ri_notification-3-line.png")} />
						</View>
					</View>
					<View style={[styles.frameParent14, styles.frameParentPosition]}>
						<View style={styles.frameParent15}>
							<View style={styles.frameParent16}>
								<View style={[styles.makifurnitureWrapper, styles.frameChild5Layout]}>
									<Image style={styles.makifurnitureIcon} resizeMode="cover" source={require("../assets/maki_furniture.png")} />
								</View>
								<Text style={[styles.furniture, styles.homeTypo]}>Furniture</Text>
							</View>
							<View style={styles.frameParent17}>
								<View style={[styles.makifurnitureWrapper, styles.frameChild5Layout]}>
									<Image style={[styles.frameChild5, styles.frameChild5Layout]} resizeMode="cover" source={require("../assets/mdi_fridge.png")} />
								</View>
								<Text style={[styles.furniture, styles.homeTypo]}>Electronics</Text>
							</View>
							<View style={styles.frameParent17}>
								<View style={[styles.makifurnitureWrapper, styles.frameChild5Layout]}>
									<Image style={[styles.frameChild5, styles.frameChild5Layout]} resizeMode="cover" source={require("../assets/gaming.png")} />
								</View>
								<Text style={[styles.furniture, styles.homeTypo]}>Gaming</Text>
							</View>
							<View style={styles.frameParent17}>
								<View style={[styles.makifurnitureWrapper, styles.frameChild5Layout]}>
									<Image style={[styles.frameChild5, styles.frameChild5Layout]} resizeMode="cover" source={require("../assets/gameicon.png")} />
								</View>
								<Text style={[styles.furniture, styles.homeTypo]}>Gym</Text>
							</View>
						</View>
						<Text style={[styles.categories, styles.postsTypo]}>Categories</Text>
					</View>
					<View style={styles.homeLoggedInChild}>
						<View style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 0)' }} />
						<View style={{ flex: 1, backgroundColor: '#fff' }} />
					</View>
				</View>
			</ScrollView>

			{/* <LinearGradient style={styles.homeLoggedInChild} locations={[0,1]} colors={['rgba(255, 255, 255, 0)','#fff']} useAngle={true} angle={90} /> */}
			{/* <View style={[styles.homeLoggedInItem, styles.bottomPosition]} /> */}
			<View style={[styles.bottomNavParent, styles.bottomPosition]}>
				<View style={[styles.bottomNav, styles.bottomNavFlexBox]}>
					<View style={styles.frameParent21}>
						<View style={styles.frameParent16}>
							<Image style={styles.iconLayout} resizeMode="cover" source="flowbite:home-solid.png" />
							<Text style={[styles.home, styles.homeTypo]}>home</Text>
						</View>
						<Pressable style={[styles.framePressable, styles.bottomNavFlexBox]} onPress={() => { }}>
							<Image style={styles.frameChildLayout} resizeMode="cover" source="Frame 279.png" />
							<Text style={[styles.chats, styles.homeTypo]}>Chats</Text>
						</Pressable>
						<Text style={[styles.addPost, styles.postsTypo]}>Add post</Text>
						<Pressable style={[styles.framePressable, styles.bottomNavFlexBox]} onPress={() => navigation.navigate('CameraScreen')}>
							<Image style={styles.iconLayout} resizeMode="cover" source="solar:heart-broken.png" />
							<Text style={[styles.chats, styles.homeTypo]}>My posts</Text>
						</Pressable>
						<View style={[styles.framePressable, styles.bottomNavFlexBox]}>
							<Image style={styles.iconLayout} resizeMode="cover" source="iconamoon:profile.png" />
							<Text style={[styles.chats, styles.homeTypo]}>profile</Text>
						</View>
					</View>
				</View>
				<Pressable style={styles.materialSymbolsLightcamera} onPress={() => { }}>
					<Image style={styles.icon} resizeMode="cover" source={require('../assets/Addpost.png')} />
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
	},
	scrollView: {
		flex: 1,
	},
	bottomNavFlexBox: {
		justifyContent: "center",
		alignItems: "center",
	},
	barPosition: {
		width: 2,
		borderRadius: 1,
		backgroundColor: "#000",
		top: "50%",
		left: "10%",
		right: "20%",

		position: "relative"
	},
	postsTypo: {
		fontFamily: "Montserrat-SemiBold",
		fontWeight: "600"
	},
	frameChildLayout1: {
		borderRadius: 12,
		// overflow: "hidden"
	},
	rs1000Typo: {
		fontFamily: "Montserrat-Bold",
		fontWeight: "500"
	},
	month1Typo: {
		fontSize: 12,
		fontFamily: "Montserrat-Regular"
	},
	frameParentPosition1: {
		left: 205,
		position: "absolute"
	},
	awayLayout: {
		height: 20,
		width: 73,
		backgroundColor: "#76ffbd",
		borderBottomRightRadius: 4,
		borderTopRightRadius: 4,
		// overflow: "hidden",
		position: "absolute"
	},
	frameParentPosition: {
		width: 350,
		left: 20,
		position: "absolute"
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
		marginTop: 8,
		fontSize: 12,
		textAlign: "left"
	},
	bottomPosition: {
		width: "100%",
		position: "absolute"
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
		top: 352,
		fontSize: 16,
		left: 21,
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
	kmAway: {
		top: 2,
		left: 5,
		fontFamily: "Montserrat-Regular",
		textAlign: "left",
		color: "#000",
		position: "absolute"
	},
	kmAwayWrapper: {
		top: 12,
		left: 0
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
	kmAwayContainer: {
		top: 400,
		left: 20
	},
	searchHere: {
		color: "rgba(0, 0, 0, 0.6)",
		fontFamily: "Montserrat-Regular"
	},
	frameChild4: {
		marginLeft: 210
	},
	searchHereParent: {
		alignItems: "center",
		flexDirection: "row",
		position: "relative",


	},
	homeLoggedInInner: {
		top: 140,

		borderColor: "rgba(0, 0, 0, 0.2)",
		paddingHorizontal: 9,
		paddingVertical: 9,
		borderWidth: 1,
		borderStyle: "solid",
		borderRadius: 10,
		// overflow: "hidden"
	},
	groupIcon: {
		width: 51,
		height: 51
	},
	hiAnsh: {
		fontSize: 16,
		textAlign: "left",
		color: "#000",
		left: 0,
		top: 0,
		position: "absolute"
	},
	mdilocationIcon: {
		top: 28,
		width: 21,
		height: 24,
		// overflow: "hidden",
		left: 0,
		position: "absolute"
	},
	address1: {
		top: 30,
		left: 24,
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
		marginLeft: 16
	},
	ellipseIcon: {
		left: -170,
		width: 44,
		zIndex: 0,
		height: 44
	},
	rinotification3LineIcon: {
		top: -10,
		left: -40,
		zIndex: 1,
		position: "absolute"
	},
	ellipseParent: {
		marginLeft: 124,
		alignItems: "center",
		flexDirection: "row"
	},
	frameParent13: {
		top: 70,
		height: 50,
		alignItems: "center",
		flexDirection: "row"
	},
	makifurnitureIcon: {
		left: 12,
		width: 32,
		height: 32,
		top: 12,
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
		alignItems: "center"
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
		top: 190,
		height: 160,
		backgroundColor: "#fff"
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
		marginLeft: 30
	},
	addPost: {
		color: "#242424",
		marginLeft: 30,
		fontSize: 16,
		textAlign: "left"
	},
	frameParent21: {
		alignItems: "flex-end",
		flexDirection: "row"
	},
	bottomNav: {
		// top: 36,
		height: 84,
		paddingHorizontal: 19,
		paddingVertical: 10,
		// overflow: "hidden",
		width: 390,
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "#fff"
	},
	icon: {
		borderRadius: 56,
		height: "100%",
		// overflow: "hidden",
		width: "100%"
	},
	materialSymbolsLightcamera: {
		left: 141,
		width: 78,
		height: 78,
		top: 0,
		position: "absolute"
	},
	bottomNavParent: {
		top: 750,
		shadowColor: "rgba(0, 0, 0, 0.14)",
		shadowOffset: {
			width: 0,
			height: -8
		},
		shadowRadius: 24,
		elevation: 24,
		shadowOpacity: 1,
		height: 120
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
	bar: {
		height: "15.71%",
		width: "35.74%",
		top: "65.63%",
		right: "31.99%",
		bottom: "18.66%",
		left: "32.27%",
		position: "absolute"
	},
	iphoneStatusBarlower: {
		top: 809,
		backgroundColor: "#f5f5f5",
		height: 35,
		// overflow: "hidden"
	},
	homeLoggedIn: {
		height: 2000,
		width: "100%",
		flex: 1,
		backgroundColor: "#fff"
	}
});

export default HomeLoggedIn;
