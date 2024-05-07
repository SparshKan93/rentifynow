import * as React from "react";
import {Image, StyleSheet, Text, View, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';

const ApplyingPage = () => {

    const navigation = useNavigation();
  	
  	return (
    		<View style={[styles.applyingPage, styles.leftAreaFlexBox]}>
      			<Image style={styles.applyingPageChild} resizeMode="cover" source="Vector 1.png" />
      			<Text style={styles.yourRentalItem}>Your rental item is on its way</Text>
      			<Pressable style={[styles.goToHomePageWrapper, styles.wrapperSpaceBlock]} onPress={()=> navigation.navigate('HomeLoggedIn')}>
        				<Text style={[styles.goToHome, styles.goToHomeTypo]}>Go to home page</Text>
      			</Pressable>
      			<Image style={styles.image214Icon} resizeMode="cover" source={require('../assets/image 214.png')} />
    		</View>);
};

const styles = StyleSheet.create({
  	leftAreaFlexBox: {
    		overflow: "hidden",
    		flex: 1
  	},
  	timeFlexBox: {
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
    		position: "absolute"
  	},
  	statusAreaPosition: {
    		top: "50%",
    		position: "absolute"
  	},
  	sim1SingleSimLayout: {
    		width: 20,
    		overflow: "hidden"
  	},
  	barPosition: {
    		width: 3,
    		backgroundColor: "#000",
    		borderRadius: 1,
    		top: "50%",
    		left: "50%",
    		position: "absolute"
  	},
  	wrapperSpaceBlock: {
    		paddingVertical: 13,
    		paddingHorizontal: 77,
    		width: 350,
    		borderRadius: 8,
    		marginLeft: -175,
    		left: "50%",
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	goToHomeTypo: {
    		letterSpacing: -0.6,
    		fontSize: 16,
    		fontFamily: "Montserrat-SemiBold",
    		textAlign: "left",
    		fontWeight: "600"
  	},
  	applyingPageChild: {
    		top: 234,
    		left: -5,
    		width: 485,
    		height: 139,
    		position: "absolute"
  	},
  	text: {
    		fontSize: 17,
    		letterSpacing: -0.7,
    		fontFamily: "SF Pro Text",
    		color: "#000",
    		textAlign: "left",
    		fontWeight: "600"
  	},
  	time: {
    		marginLeft: -17,
    		top: 16,
    		left: "50%"
  	},
  	leftArea: {
    		height: 44
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
    		right: 0,
    		justifyContent: "flex-end",
    		alignItems: "center",
    		flexDirection: "row",
    		top: "50%"
  	},
  	statusArea: {
    		marginTop: -4,
    		marginLeft: -37.5,
    		width: 76,
    		height: 14,
    		left: "50%"
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
  	iphoneWithNotch: {
    		top: 0,
    		left: 0,
    		width: 390,
    		paddingHorizontal: 12,
    		paddingVertical: 0
  	},
  	yourRentalItem: {
    		marginLeft: -154,
    		top: 400,
    		fontSize: 24,
    		letterSpacing: -1,
    		color: "#171717",
    		textAlign: "center",
    		width: 309,
    		fontFamily: "Montserrat-SemiBold",
    		fontWeight: "600",
    		left: "50%",
    		position: "absolute"
  	},
  	goToHome: {
    		color: "#fff"
  	},
  	goToHomePageWrapper: {
    		top: 518,
    		backgroundColor: "#0a74f0"
  	},
  	myOrders: {
    		color: "#0a74f0"
  	},
  	myOrdersWrapper: {
    		top: 584,
    		borderStyle: "solid",
    		borderColor: "#0a74f0",
    		borderWidth: 1
  	},
  	image214Icon: {
    		top: 247,
    		left: 86,
    		width: 217,
    		height: 153,
    		position: "absolute"
  	},
  	applyingPage: {
    		backgroundColor: "#fff",
    		width: "100%",
    		height: 844
  	}
});

export default ApplyingPage;
