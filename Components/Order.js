import * as React from "react";
import {Image, StyleSheet, Text, View, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';


const Order = ({route}) => {

    const navigation = useNavigation();

    const { image } = route.params || {};
  	
  	return (
    		<View style={styles.order}>
      			<Image style={[styles.orderChild, styles.orderPosition]} resizeMode="cover" source={require('../assets/Frame 289.png')} />
      			<Image style={styles.orderItem} resizeMode="cover" source="Frame 142.png" />
      			<Text style={[styles.orderSummary, styles.orderTypo]}>Order Summary</Text>
      			<Image style={[styles.orderInner, styles.orderPosition]} resizeMode="cover" source="Rectangle 51.png" />
      			<Text style={[styles.orderSummary1, styles.orderTypo]}>Order Summary</Text>
      			<View style={[styles.frameParent, styles.frameParentLayout]}>
        				<View style={styles.frameFlexBox}>
          					<Image style={styles.frameChild} resizeMode="cover" source="Frame 163.png" />
          					<Text style={[styles.addAnySuggestion, styles.rsTypo]}>Add any suggestion</Text>
        				</View>
        				<View style={[styles.bitruckParent, styles.bitruckParentFlexBox]}>
          					<Image style={styles.bitruckIcon} resizeMode="cover" source="bi:truck.png" />
          					<Text style={[styles.easyShipping, styles.rs2Typo]}>Easy Shipping</Text>
        				</View>
      			</View>
      			<View style={[styles.iphoneStatusBarlower, styles.orderPosition]}>
        				<View style={styles.bar}>
          					<View style={styles.base} />
        				</View>
      			</View>
      			<View style={[styles.rectangleView, styles.frameParentLayout]} />
      			<Pressable style={[styles.payNowWrapper, styles.orderChild1Layout]} onPress={()=>  navigation.navigate('ApplyingPage')}>
        				<Text style={[styles.payNow, styles.orderTypo1]}>Pay Now</Text>
      			</Pressable>
      			<View style={[styles.subtotalParent, styles.parentFlexBox]}>
        				<Text style={[styles.subtotal, styles.rsTypo]}>Subtotal</Text>
        				<Text style={[styles.rs, styles.rsTypo]}>500 rs</Text>
      			</View>
      			<View style={[styles.shippingParent, styles.parentFlexBox]}>
        				<Text style={[styles.subtotal, styles.rsTypo]}>Shipping</Text>
        				<Text style={[styles.rs1, styles.rsTypo]}>20 rs</Text>
      			</View>
      			<View style={[styles.shippingDiscountParent, styles.parentFlexBox]}>
        				<Text style={[styles.subtotal, styles.rsTypo]}>Shipping Discount</Text>
        				<Text style={[styles.na, styles.rsTypo]}>N/A</Text>
      			</View>
      			<View style={[styles.totalParent, styles.parentFlexBox]}>
        				<Text style={[styles.total, styles.rs2Typo]}>Total</Text>
        				<Text style={[styles.rs2, styles.rs2Typo]}>520 rs</Text>
      			</View>
      			<View style={[styles.orderChild1, styles.orderChild1Layout]} />
      			<Text style={[styles.bedForRenttenureContainer, styles.monthTypo]}>
        				<Text style={styles.bedForRent}>Bed for rent</Text>
        				<Text style={styles.tenure}>(tenure)</Text>
      			</Text>
      			<Text style={[styles.month, styles.monthTypo]}>1 month</Text>
    		</View>);
};

const styles = StyleSheet.create({
  	orderPosition: {
    		width: 390,
    		left: 0,
    		position: "absolute"
  	},
  	frameFlexBox: {
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	timePosition: {
    		left: "50%",
    		position: "absolute"
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
  	orderTypo: {
    		fontFamily: "Inter-Regular",
    		textAlign: "left"
  	},
  	frameParentLayout: {
    		borderRadius: 24,
    		position: "absolute"
  	},
  	rsTypo: {
    		fontSize: 14,
    		letterSpacing: -0.6
  	},
  	bitruckParentFlexBox: {
    		paddingHorizontal: 16,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	rs2Typo: {
    		color: "#242424",
    		fontFamily: "Inter-Regular",
    		textAlign: "left"
  	},
  	orderChild1Layout: {
    		width: 350,
    		borderRadius: 12,
    		left: 20,
    		position: "absolute"
  	},
  	orderTypo1: {
    		letterSpacing: -0.6,
    		fontSize: 16
  	},
  	parentFlexBox: {
    		alignItems: "center",
    		flexDirection: "row",
    		left: 20,
    		position: "absolute"
  	},
  	monthTypo: {
    		fontFamily: "Montserrat-Medium",
    		fontWeight: "500",
    		top: 435,
    		letterSpacing: -0.6,
    		fontSize: 16,
    		textAlign: "left",
    		position: "absolute"
  	},
  	orderChild: {
    		top: 140,
    		borderBottomRightRadius: 24,
    		borderBottomLeftRadius: 24,
    		height: 280
  	},
  	text: {
    		fontSize: 17,
    		letterSpacing: -0.7,
    		fontWeight: "600",
    		fontFamily: "SF Pro Text",
    		textAlign: "left",
    		color: "#000"
  	},
  	time: {
    		marginLeft: -17,
    		top: 16,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
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
  	iphoneWithNotch: {
    		paddingHorizontal: 12,
    		paddingVertical: 0,
    		top: 0,
    		justifyContent: "center",
    		width: 390,
    		left: 0,
    		position: "absolute"
  	},
  	orderItem: {
    		top: 70,
    		borderRadius: 38,
    		width: 44,
    		left: 20,
    		height: 44,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	orderSummary: {
    		marginLeft: -56,
    		top: 80,
    		letterSpacing: -0.6,
    		fontSize: 16,
    		color: "#000",
    		left: "50%",
    		position: "absolute"
  	},
  	orderInner: {
    		top: 470,
    		height: 339
  	},
  	orderSummary1: {
    		top: 566,
    		letterSpacing: -0.6,
    		fontSize: 16,
    		left: 20,
    		color: "#000",
    		position: "absolute"
  	},
  	frameChild: {
    		borderRadius: 23,
    		width: 32,
    		height: 32,
    		overflow: "hidden"
  	},
  	addAnySuggestion: {
    		marginLeft: 10,
    		color: "#898989",
    		fontFamily: "Inter-Regular",
    		textAlign: "left"
  	},
  	bitruckIcon: {
    		width: 16,
    		height: 16,
    		overflow: "hidden"
  	},
  	easyShipping: {
    		fontSize: 12,
    		letterSpacing: -0.5,
    		marginLeft: 10
  	},
  	bitruckParent: {
    		borderRadius: 16,
    		backgroundColor: "#e2e2e2",
    		paddingVertical: 8,
    		marginLeft: 46
  	},
  	frameParent: {
    		top: 510,
    		padding: 4,
    		left: 20,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
    		backgroundColor: "#edeef0"
  	},
  	base: {
    		bottom: 1,
    		borderRadius: 10,
    		backgroundColor: "#000",
    		right: 0,
    		top: 0,
    		left: 0,
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
    		overflow: "hidden"
  	},
  	rectangleView: {
    		top: 475,
    		left: 152,
    		width: 86,
    		backgroundColor: "#0a74f0",
    		height: 5
  	},
  	payNow: {
    		fontWeight: "700",
    		fontFamily: "Montserrat-Bold",
    		color: "#fff",
    		textAlign: "left"
  	},
  	payNowWrapper: {
    		top: 742,
    		height: 52,
    		paddingVertical: 14,
    		backgroundColor: "#0a74f0",
    		paddingHorizontal: 16,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	subtotal: {
    		color: "#898989",
    		fontFamily: "Inter-Regular",
    		textAlign: "left"
  	},
  	rs: {
    		marginLeft: 258,
    		color: "#898989",
    		fontFamily: "Inter-Regular",
    		textAlign: "left"
  	},
  	subtotalParent: {
    		top: 601,
    		left: 20
  	},
  	rs1: {
    		marginLeft: 264,
    		color: "#898989",
    		fontFamily: "Inter-Regular",
    		textAlign: "left"
  	},
  	shippingParent: {
    		top: 630,
    		left: 20
  	},
  	na: {
    		marginLeft: 215,
    		color: "#898989",
    		fontFamily: "Inter-Regular",
    		textAlign: "left"
  	},
  	shippingDiscountParent: {
    		top: 659,
    		left: 20
  	},
  	total: {
    		fontSize: 14,
    		letterSpacing: -0.6
  	},
  	rs2: {
    		marginLeft: 279,
    		fontSize: 14,
    		letterSpacing: -0.6
  	},
  	totalParent: {
    		top: 709,
    		left: 20
  	},
  	orderChild1: {
    		top: 692,
    		backgroundColor: "#898989",
    		height: 1
  	},
  	bedForRent: {
    		color: "#000"
  	},
  	tenure: {
    		color: "#898989"
  	},
  	bedForRenttenureContainer: {
    		left: 20
  	},
  	month: {
    		left: 308,
    		color: "#000"
  	},
  	order: {
    		width: "100%",
    		height: 844,
    		overflow: "hidden",
    		flex: 1,
    		backgroundColor: "#edeef0"
  	}
});

export default Order;
