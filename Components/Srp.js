import * as React from "react";
import {Text, StyleSheet, View, Image, Pressable} from "react-native";

const Srp = () => {
  	
  	return (
    		<View style={styles.srp}>
      			<View style={[styles.iphoneWithNotch, styles.srpInnerFlexBox]}>
        				<View style={styles.leftArea}>
          					<View style={styles.time}>
            						<Text style={[styles.text, styles.textTypo]}>9:41</Text>
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
      			<View style={[styles.srpInner, styles.srpInnerLayout]}>
        				<View style={styles.bedsParentFlexBox}>
          					<Text style={styles.beds}>Beds</Text>
          					<Image style={[styles.frameChild, styles.miarrowUpLayout]} resizeMode="cover" source="Frame 281.png" />
        				</View>
      			</View>
      			<Text style={[styles.results, styles.resultsPosition]}>20 results</Text>
      			<Image style={[styles.uilfilterIcon, styles.resultsPosition]} resizeMode="cover" source="uil:filter.png" />
      			<View style={[styles.frameParent, styles.frameParentPosition1]}>
        				<Image style={[styles.frameItem, styles.srpInnerLayout]} resizeMode="cover" source="Frame 289.png" />
        				<View style={styles.frameGroup}>
          					<View>
            						<Text style={[styles.bedForRent, styles.rs500Typo]}>Bed for rent</Text>
            						<Text style={[styles.yearsOldIn, styles.month1Typo]}>{`2 years old in brand new... `}</Text>
          					</View>
          					<Text style={styles.rs500month}>
            						<Text style={[styles.rs500, styles.rs500Typo]}>
              							<Text style={styles.rs5001}>Rs.500</Text>
              							<Text style={styles.text1}>/</Text>
            						</Text>
            						<Text style={styles.text1}>
              							<Text style={styles.month1Typo}>month</Text>
            						</Text>
          					</Text>
        				</View>
      			</View>
      			<View style={[styles.frameContainer, styles.frameParentPosition1]}>
        				<Image style={[styles.frameItem, styles.srpInnerLayout]} resizeMode="cover" source="Frame 289.png" />
        				<View style={styles.frameGroup}>
          					<View>
            						<Text style={[styles.bedForRent, styles.rs500Typo]}>Bed for rent</Text>
            						<Text style={[styles.yearsOldIn, styles.month1Typo]}>{`2 years old in brand new... `}</Text>
          					</View>
          					<Text style={styles.rs500month}>
            						<Text style={[styles.rs500, styles.rs500Typo]}>
              							<Text style={styles.rs5001}>Rs.500</Text>
              							<Text style={styles.text1}>/</Text>
            						</Text>
            						<Text style={styles.text1}>
              							<Text style={styles.month1Typo}>month</Text>
            						</Text>
          					</Text>
        				</View>
      			</View>
      			<View style={[styles.frameParent1, styles.frameParentPosition1]}>
        				<Image style={[styles.frameItem, styles.srpInnerLayout]} resizeMode="cover" source="Frame 289.png" />
        				<View style={styles.frameGroup}>
          					<View>
            						<Text style={[styles.bedForRent, styles.rs500Typo]}>Bed for rent</Text>
            						<Text style={[styles.yearsOldIn, styles.month1Typo]}>{`2 years old in brand new... `}</Text>
          					</View>
          					<Text style={styles.rs500month}>
            						<Text style={[styles.rs500, styles.rs500Typo]}>
              							<Text style={styles.rs5001}>Rs.500</Text>
              							<Text style={styles.text1}>/</Text>
            						</Text>
            						<Text style={styles.text1}>
              							<Text style={styles.month1Typo}>month</Text>
            						</Text>
          					</Text>
        				</View>
      			</View>
      			<Pressable style={[styles.framePressable, styles.frameParentPosition]} onPress={()=>{}}>
        				<Image style={[styles.frameItem, styles.srpInnerLayout]} resizeMode="cover" source="Frame 289.png" />
        				<View style={styles.frameGroup}>
          					<View>
            						<Text style={[styles.bedForRent, styles.rs500Typo]}>Bed for rent</Text>
            						<Text style={[styles.yearsOldIn, styles.month1Typo]}>{`2 years old in brand new... `}</Text>
          					</View>
          					<Text style={styles.rs500month}>
            						<Text style={[styles.rs500, styles.rs500Typo]}>
              							<Text style={styles.rs5001}>Rs.500</Text>
              							<Text style={styles.text1}>/</Text>
            						</Text>
            						<Text style={styles.text1}>
              							<Text style={styles.month1Typo}>month</Text>
            						</Text>
          					</Text>
        				</View>
      			</Pressable>
      			<View style={[styles.frameParent4, styles.frameParentPosition]}>
        				<Image style={[styles.frameItem, styles.srpInnerLayout]} resizeMode="cover" source="Frame 289.png" />
        				<View style={styles.frameGroup}>
          					<View>
            						<Text style={[styles.bedForRent, styles.rs500Typo]}>Bed for rent</Text>
            						<Text style={[styles.yearsOldIn, styles.month1Typo]}>{`2 years old in brand new... `}</Text>
          					</View>
          					<Text style={styles.rs500month}>
            						<Text style={[styles.rs500, styles.rs500Typo]}>
              							<Text style={styles.rs5001}>Rs.500</Text>
              							<Text style={styles.text1}>/</Text>
            						</Text>
            						<Text style={styles.text1}>
              							<Text style={styles.month1Typo}>month</Text>
            						</Text>
          					</Text>
        				</View>
      			</View>
      			<View style={[styles.frameParent6, styles.frameParentPosition]}>
        				<Image style={[styles.frameItem, styles.srpInnerLayout]} resizeMode="cover" source="Frame 289.png" />
        				<View style={styles.frameGroup}>
          					<View>
            						<Text style={[styles.bedForRent, styles.rs500Typo]}>Bed for rent</Text>
            						<Text style={[styles.yearsOldIn, styles.month1Typo]}>{`2 years old in brand new... `}</Text>
          					</View>
          					<Text style={styles.rs500month}>
            						<Text style={[styles.rs500, styles.rs500Typo]}>
              							<Text style={styles.rs5001}>Rs.500</Text>
              							<Text style={styles.text1}>/</Text>
            						</Text>
            						<Text style={styles.text1}>
              							<Text style={styles.month1Typo}>month</Text>
            						</Text>
          					</Text>
        				</View>
      			</View>
      			<View style={[styles.srpChild, styles.iphoneLayout]} />
      			<Pressable style={[styles.miarrowUp, styles.frameParentPosition1]} onPress={()=>{}}>
        				<Image style={styles.icon} resizeMode="cover" source="mi:arrow-up.png" />
      			</Pressable>
      			<View style={[styles.iphoneStatusBarlower, styles.iphoneLayout]}>
        				<View style={styles.bar}>
          					<View style={styles.base} />
        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	srpInnerFlexBox: {
    		justifyContent: "center",
    		position: "absolute"
  	},
  	textTypo: {
    		color: "#000",
    		fontWeight: "600",
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
  	srpInnerLayout: {
    		borderRadius: 12,
    		overflow: "hidden"
  	},
  	miarrowUpLayout: {
    		height: 24,
    		width: 24
  	},
  	resultsPosition: {
    		top: 140,
    		position: "absolute"
  	},
  	frameParentPosition1: {
    		left: 20,
    		position: "absolute"
  	},
  	rs500Typo: {
    		fontFamily: "Montserrat-Medium",
    		fontWeight: "500"
  	},
  	month1Typo: {
    		fontSize: 12,
    		fontFamily: "Montserrat-Regular"
  	},
  	frameParentPosition: {
    		left: 205,
    		position: "absolute"
  	},
  	iphoneLayout: {
    		width: 390,
    		left: 0
  	},
  	text: {
    		fontSize: 17,
    		letterSpacing: -0.7,
    		fontFamily: "SF Pro Text",
    		textAlign: "left"
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
    		overflow: "hidden",
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
    		alignItems: "center",
    		flexDirection: "row",
    		width: 390,
    		left: 0,
    		top: 0,
    		justifyContent: "center"
  	},
  	beds: {
    		color: "rgba(0, 0, 0, 0.6)",
    		fontFamily: "Montserrat-Regular",
    		fontSize: 14,
    		textAlign: "left"
  	},
  	frameChild: {
    		marginLeft: 223
  	},
  	bedsParentFlexBox: {
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	srpInner: {
    		top: 70,
    		left: 59,
    		borderStyle: "solid",
    		borderColor: "rgba(0, 0, 0, 0.4)",
    		borderWidth: 1,
    		width: 311,
    		height: 50,
    		paddingHorizontal: 14,
    		paddingVertical: 11,
    		justifyContent: "center",
    		position: "absolute"
  	},
  	results: {
    		left: 22,
    		fontFamily: "Montserrat-SemiBold",
    		fontSize: 16,
    		textAlign: "left",
    		color: "#000",
    		fontWeight: "600"
  	},
  	uilfilterIcon: {
    		left: 346,
    		height: 24,
    		width: 24,
    		overflow: "hidden"
  	},
  	frameItem: {
    		width: 165,
    		height: 152
  	},
  	bedForRent: {
    		fontSize: 14,
    		fontWeight: "500",
    		textAlign: "left",
    		color: "#000"
  	},
  	yearsOldIn: {
    		marginTop: 4,
    		color: "#979797",
    		textAlign: "left"
  	},
  	rs5001: {
    		color: "#3ba440"
  	},
  	text1: {
    		color: "#979797"
  	},
  	rs500: {
    		fontSize: 16
  	},
  	rs500month: {
    		marginTop: 6,
    		textAlign: "left"
  	},
  	frameGroup: {
    		marginTop: 12
  	},
  	frameParent: {
    		top: 180
  	},
  	frameContainer: {
    		top: 422
  	},
  	frameParent1: {
    		top: 664
  	},
  	framePressable: {
    		top: 180
  	},
  	frameParent4: {
    		top: 422
  	},
  	frameParent6: {
    		top: 664
  	},
  	srpChild: {
    		top: 891,
    		height: 68,
    		overflow: "hidden",
    		position: "absolute",
    		backgroundColor: "#fff"
  	},
  	icon: {
    		height: "100%",
    		overflow: "hidden",
    		width: "100%"
  	},
  	miarrowUp: {
    		top: 83,
    		height: 24,
    		width: 24
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
    		overflow: "hidden",
    		position: "absolute"
  	},
  	srp: {
    		height: 844,
    		width: "100%",
    		flex: 1,
    		backgroundColor: "#fff"
  	}
});

export default Srp;
