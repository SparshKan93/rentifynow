import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, Image, Pressable, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
const iconamoon_profile = require("../assets/iconamoon_profile.png")
const line = require("../assets/Line 11.png")

const SignupMain = () => {

	const [phoneNumber, setPhoneNumber] = useState("");

	const handleChangePhoneNumber = (number) => {
		setPhoneNumber(number);
	};

	let [fontsLoaded] = useFonts({
		'Montserrat-Bold': Montserrat_700Bold,
		'Montserrat-Regular': Montserrat_400Regular
	});

	if (!fontsLoaded) {
		return <Text>Loading...</Text>; // You can render a loading indicator until the font is loaded
	}

	const navigation = useNavigation();

  const handleContinuePress = () => {
    navigation.navigate('Education'); // Replace 'NextComponent' with the name of your next screen
  };


	return (
		<View style={styles.signupMain}>
			<Text style={[styles.createYourAccount, styles.continueTypo2]}>Create your account !</Text>
			<View style={[styles.frameParent, styles.component3Position]}>
				<Pressable style={styles.frameWrapper} onPress={() => { }}>
					<View style={[styles.flatColorIconsgoogleParent, styles.timeFlexBox]}>
						<Image style={styles.flatColorIconsgoogleLayout} resizeMode="cover" source="flat-color-icons:google.png" />
						<Text style={[styles.continueWithGoogle, styles.continueTypo]}>Continue with Google</Text>
					</View>
				</Pressable>
				<View style={[styles.frameContainer, styles.frameBorder]}>
					<View style={styles.lucidemailParentFlexBox}>
						<Image style={styles.flatColorIconsgoogleLayout} resizeMode="cover" source="lucide:mail.png" />
						<View style={styles.frameView}>
							<View style={[styles.flatColorIconsgoogleParent, styles.timeFlexBox]}>
								<Text style={[styles.continueWithEmail, styles.continueTypo]}>Continue with Email</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={[styles.frameWrapper1, styles.frameBorder]}>
					<View style={[styles.flatColorIconsgoogleParent, styles.timeFlexBox]}>
						<Image style={styles.flatColorIconsgoogleLayout} resizeMode="cover" source={iconamoon_profile} />
						<Text style={[styles.continueWithGoogle, styles.continueTypo]}>Continue as Guest</Text>
					</View>
				</View>
			</View>
			<View style={[styles.iphoneStatusBarlower, styles.iphonePosition]}>
				<View style={styles.bar}>
					<View style={styles.base} />
				</View>
			</View>
			<View style={[styles.vectorParent, styles.vectorLayout]}>
				<Image style={[styles.groupChild, styles.groupLayout]} resizeMode="cover" source={line} />
				<Image style={[styles.groupItem, styles.groupLayout]} resizeMode="cover" source={line} />
				<Text style={[styles.or, styles.orTypo]}>or</Text>
			</View>
			<View style={[styles.component3, styles.component3Position]}>
				<Text style={[styles.enterYourMobile, styles.continueTypo]}>Enter your mobile number</Text>
				<View style={[styles.component3Inner, styles.component3InnerBorder]}>
					<View style={styles.lucidemailParentFlexBox}>
						<Image style={styles.twemojiflagIndiaIcon} resizeMode="cover" source={require("../assets/twemoji_flag-india.png")} /> 
						   {/* source={require('./path_to_flag_image')} */}
						<Image style={[styles.iconamoonarrowUp2Bold, styles.flatColorIconsgoogleLayout]} resizeMode="cover" source={require("../assets/iconamoon_arrow-up.png")}/>
					</View>
				</View>
				<View style={[styles.enter10DigitNumberHereWrapper, styles.component3InnerBorder]}>
					<TextInput
						style={styles.enter10Digit}
						placeholder="Enter 10 digit number here"
						onChangeText={handleChangePhoneNumber}
						value={phoneNumber}
						keyboardType="numeric"
					/>
				</View>
			</View>
			<Pressable style={styles.continueWrapper} onPress={handleContinuePress}>
      <Text style={[styles.continue, styles.continueTypo1]}>Continue</Text>
    </Pressable>
		</View>);
};

const styles = StyleSheet.create({
	continueTypo2: {
		fontFamily: "Montserrat-Bold",
		fontWeight: "700"
	},
	timeFlexBox: {
		justifyContent: "center",
		alignItems: "center"
	},
	sim1SingleSimLayout: {
		width: 20,
		overflow: "hidden"
	},
	barPosition: {
		width: 3,
		borderRadius: 1,
		backgroundColor: "#000",
		top: "50%",
		left: "50%",
		position: "absolute"
	},
	component3Position: {
		width: 350,
		left: "50%",
		marginLeft: -175,
		position: "absolute"
	},
	continueTypo: {
		fontFamily: "Montserrat-Bold",
		fontWeight: "500"
	},
	frameBorder: {
		marginTop: 20,
		paddingVertical: 14,
		borderWidth: 1,
		borderColor: "rgba(0, 0, 0, 0.5)",
		borderStyle: "solid",
		borderRadius: 12,
		width: 350,
		overflow: "hidden"
	},
	iphonePosition: {
		width: 390,
		left: 0,
		position: "absolute"
	},
	orTypo: {
		textAlign: "center",
		fontSize: 12,
		position: "absolute"
	},
	vectorLayout: {
		height: 15,
		width: 278,
		left: "50%",
		position: "absolute"
	},
	groupLayout: {
		width: 120,
		maxHeight: "100%",
		left: "50%",
		position: "absolute"
	},
	component3InnerBorder: {
		borderColor: "rgba(0, 0, 0, 0.3)",
		borderRadius: 16,
		borderWidth: 1,
		borderStyle: "solid",
		position: "absolute",
		overflow: "hidden"
	},
	flatColorIconsgoogleLayout: {
		height: 24,
		width: 24,
		overflow: "hidden"
	},
	continueTypo1: {
		fontSize: 16,
		textAlign: "left"
	},
	createYourAccount: {
		top: 80,
		fontSize: 24,
		letterSpacing: -1,
		textAlign: "left",
		color: "#171717",
		left: "50%",
		marginLeft: -175,
		fontWeight: "700",
		position: "absolute"
	},
	text: {
		fontSize: 17,
		letterSpacing: -0.7,
		fontFamily: "SF Pro Text",
		color: "#000",
		fontWeight: "600",
		textAlign: "left"
	},
	time: {
		marginLeft: -17,
		top: 16,
		flexDirection: "row",
		justifyContent: "center",
		left: "50%",
		position: "absolute"
	},
	leftArea: {
		height: 44,
		overflow: "hidden",
		flex: 1
	},
	notchArea: {
		width: 164,
		height: 44
	},
	bar4: {
		marginTop: -6,
		marginLeft: 6.35,
		height: 12
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
	sim1SingleSim: {
		height: 14
	},
	networkWifiFull: {
		marginLeft: 4,
		height: 12
	},
	batteryFullUncharged: {
		width: 28,
		marginLeft: 4,
		height: 14
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
	continueWithGoogle: {
		marginLeft: 12,
		fontSize: 16,
		textAlign: "left",
		color: "#171717"
	},
	flatColorIconsgoogleParent: {
		flexDirection: "row",
		justifyContent: "center"
	},
	frameWrapper: {
		paddingVertical: 14,
		borderWidth: 1,
		borderColor: "rgba(0, 0, 0, 0.5)",
		borderStyle: "solid",
		paddingHorizontal: 68,
		borderRadius: 12,
		overflow: "hidden"
	},
	continueWithEmail: {
		fontSize: 16,
		textAlign: "left",
		color: "#171717"
	},
	frameView: {
		marginLeft: 10
	},
	lucidemailParentFlexBox: {
		alignItems: "center",
		flexDirection: "row"
	},
	frameContainer: {
		paddingHorizontal: 68,
		marginTop: 20
	},
	frameWrapper1: {
		paddingHorizontal: 78,
		justifyContent: "center",
		alignItems: "center"
	},
	frameParent: {
		top: 445
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
	alreadyHaveAn: {
		color: "rgba(0, 0, 0, 0.6)"
	},
	text1: {
		color: "#000"
	},
	logIn: {
		fontFamily: "Montserrat-SemiBold",
		color: "#2253ff",
		fontWeight: "600"
	},
	alreadyHaveAnContainer: {
		marginLeft: -99,
		top: 724,
		left: "50%"
	},
	groupChild: {
		top: 7,
		marginLeft: -139
	},
	groupItem: {
		marginLeft: 19,
		top: 8
	},
	or: {
		left: 133,
		fontFamily: "Montserrat-Bold",
		fontWeight: "500",
		color: "#000",
		top: 0
	},
	vectorParent: {
		marginLeft: -140,
		top: 390
	},
	vectorGroup: {
		top: 681,
		marginLeft: -139
	},
	enterYourMobile: {
		top: "0%",
		letterSpacing: -0.6,
		left: "0%",
		fontSize: 16,
		textAlign: "left",
		color: "#171717",
		position: "absolute"
	},
	twemojiflagIndiaIcon: {
		width: 32,
		height: 32,
		overflow: "hidden"
	},
	iconamoonarrowUp2Bold: {
		marginLeft: 8
	},
	component3Inner: {
		height: "40%",
		width: "25.14%",
		top: "38.1%",
		right: "74.86%",
		bottom: "21.9%",
		paddingVertical: 5,
		left: "0%",
		paddingHorizontal: 12,
		backgroundColor: "#fff"
	},
	enter10Digit: {
		fontSize: 14,
		fontFamily: "Montserrat-Regular",
		color: "#555",
		textAlign: "left"
	},
	enter10DigitNumberHereWrapper: {
		top: 40,
		left: 100,
		width: 250,
		height: 42,
		padding: 12,
		alignItems: "center",
		flexDirection: "row"
	},
	component3: {
		top: 180,
		height: 105
	},
	continue: {
		color: "#fff",
		fontFamily: "Montserrat-Bold",
		fontWeight: "700"
	},
	continueWrapper: {
		top: 290,
		backgroundColor: "#0a74f0",
		height: 52,
		paddingHorizontal: 16,
		paddingVertical: 12,
		borderRadius: 12,
		width: 350,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		left: "50%",
		marginLeft: -175,
		position: "absolute"
	},
	signupMain: {
		width: "100%",
		flex: 1,
		backgroundColor: "#fff"
	}
});

export default SignupMain;
