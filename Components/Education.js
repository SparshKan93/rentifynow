import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";

const Education = () => {

	return (
		<View style={[styles.education, styles.leftAreaFlexBox]}>
			<View style={styles.iphoneWithNotch}>
				<View style={[styles.leftArea, styles.leftAreaFlexBox]}>
					<View style={styles.time}>
						<Text style={[styles.text, styles.textClr]}>9:41</Text>
					</View>
				</View>
				<View style={styles.notchArea} />
				<View style={styles.rightArea}>
					<View style={styles.statusArea}>
						<View style={styles.autoLayout}>
							<View style={[styles.sim1SingleSim, styles.sim1SingleSimLayout]}>
								<View style={[styles.bar4, styles.barPosition]} />
								<View style={[styles.bar3, styles.barPosition]} />
								<View style={[styles.bar2, styles.barPosition]} />
								<View style={[styles.bar1, styles.barPosition]} />
							</View>
							<Image style={[styles.networkWifiFull, styles.sim1SingleSimLayout]} resizeMode="cover" source="Network / WiFi Full.png" />
							<Image style={styles.batteryFullUncharged} resizeMode="cover" source="Battery / Full Uncharged.png" />
						</View>
					</View>
					<Image style={styles.privacyIndicatorNone} resizeMode="cover" source="Privacy Indicator / None.png" />
				</View>
			</View>
			<View style={styles.iphoneStatusBarlower}>
				<View style={styles.bar}>
					<View style={styles.base} />
				</View>
			</View>
			<Text style={styles.letsMakeYour}>Lets make your profile by asking you some quick questions</Text>
			<Text style={[styles.itWillOnlyContainer, styles.containerTypo]}>
				<Text style={styles.itWillOnly}>{`It will only take `}</Text>
				<Text style={styles.hiAnshTypo}>60 seconds</Text>
				<Text style={styles.itWillOnly}> to complete this onboarding</Text>
			</Text>
			<Text style={[styles.hiAnsh, styles.hiAnshTypo]}>Hi, Ansh</Text>
			<Text style={[styles.firstOfAllContainer, styles.containerTypo]}>
				<Text style={styles.itWillOnly}>{`First of all tell us what you’re `}</Text>
				<Text style={styles.nextTypo}>looking for ?</Text>
			</Text>
			<View style={styles.nextWrapper}>
				<Text style={[styles.next, styles.nextTypo]}>Next</Text>
			</View>
			<Pressable style={[styles.furnitureWrapper, styles.wrapperBorder1]} onPress={() => { }}>
				<Text style={styles.furniture}>Furniture</Text>
			</Pressable>
			<View style={[styles.homeAppliancesWrapper, styles.wrapperBorder1]}>
				<Text style={styles.furniture}>Home appliances</Text>
			</View>
			<View style={[styles.gamingElectronicsWrapper, styles.wrapperBorder]}>
				<Text style={styles.furniture}>Gaming Electronics</Text>
			</View>
			<View style={[styles.gymEquipmentsWrapper, styles.wrapperBorder]}>
				<Text style={styles.furniture}>Gym Equipments</Text>
			</View>
			<View style={[styles.vehiclesWrapper, styles.wrapperBorder1]}>
				<Text style={styles.furniture}>Vehicles</Text>
			</View>
		</View>);
};

const styles = StyleSheet.create({
	leftAreaFlexBox: {
		overflow: "hidden",
		flex: 1
	},
	textClr: {
		color: "#000",
		textAlign: "left"
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
	containerTypo: {
		letterSpacing: -0.6,
		fontSize: 16,
		left: 20,
		textAlign: "left",
		color: "#000",
		position: "absolute"
	},
	hiAnshTypo: {
		fontFamily: "Montserrat-SemiBold",
		fontWeight: "600"
	},
	nextTypo: {
		fontFamily: "Montserrat-Bold",
		fontWeight: "700"
	},
	wrapperBorder1: {
		paddingVertical: 4,
		paddingHorizontal: 8,
		borderWidth: 1,
		borderColor: "#6c6c6c",
		borderStyle: "solid",
		borderRadius: 12,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		position: "absolute"
	},
	wrapperBorder: {
		top: 391,
		paddingVertical: 4,
		paddingHorizontal: 8,
		borderWidth: 1,
		borderColor: "#6c6c6c",
		borderStyle: "solid",
		borderRadius: 12,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		position: "absolute"
	},
	text: {
		fontSize: 17,
		letterSpacing: -0.7,
		fontFamily: "SF Pro Text",
		textAlign: "left",
		fontWeight: "600",
		color: "#000"
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
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		top: 0,
		width: 390,
		left: 0,
		position: "absolute"
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
		width: 390,
		left: 0,
		position: "absolute",
		overflow: "hidden"
	},
	letsMakeYour: {
		top: 85,
		fontSize: 24,
		letterSpacing: -1,
		width: 350,
		fontFamily: "Montserrat-SemiBold",
		left: 20,
		textAlign: "left",
		color: "#000",
		fontWeight: "600",
		position: "absolute"
	},
	itWillOnly: {
		fontFamily: "Montserrat-Regular"
	},
	itWillOnlyContainer: {
		top: 184,
		width: 320
	},
	hiAnsh: {
		top: 254,
		left: 21,
		fontSize: 20,
		letterSpacing: -0.8,
		textAlign: "left",
		color: "#000",
		position: "absolute"
	},
	firstOfAllContainer: {
		top: 296
	},
	next: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "700",
		textAlign: "left"
	},
	nextWrapper: {
		top: 490,
		backgroundColor: "#0a74f0",
		height: 52,
		paddingHorizontal: 16,
		paddingVertical: 12,
		borderRadius: 12,
		width: 350,
		left: 20,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		position: "absolute"
	},
	furniture: {
		fontSize: 14,
		color: "#6c6c6c",
		fontFamily: "Montserrat-Regular",
		textAlign: "left"
	},
	furnitureWrapper: {
		top: 350,
		paddingHorizontal: 8,
		borderWidth: 1,
		borderColor: "#6c6c6c",
		borderStyle: "solid",
		left: 20
	},
	homeAppliancesWrapper: {
		left: 114,
		top: 350,
		paddingHorizontal: 8,
		borderWidth: 1,
		borderColor: "#6c6c6c",
		borderStyle: "solid"
	},
	gamingElectronicsWrapper: {
		left: 20
	},
	gymEquipmentsWrapper: {
		left: 186
	},
	vehiclesWrapper: {
		top: 432,
		left: 20
	},
	education: {
		backgroundColor: "#fff",
		width: "100%",
		height: 844
	}
});

export default Education;
