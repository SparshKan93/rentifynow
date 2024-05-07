import * as React from "react";
import {Text, StyleSheet, View, Image, Pressable} from "react-native";

const PostProduct = () => {
  	
  	return (
    		<View style={styles.postProduct}>
      			<View style={styles.iphoneWithNotch}>
        				<View style={styles.leftArea}>
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
      			<Text style={[styles.postProduct1, styles.addTypo]}>Post product</Text>
      			<Pressable style={styles.miarrowUp} onPress={()=>{}}>
        				<Image style={styles.icon} resizeMode="cover" source="mi:arrow-up.png" />
      			</Pressable>
      			<Text style={[styles.selectCategory, styles.textClr]}>Select category</Text>
      			<Pressable style={[styles.furnitureWrapper, styles.wrapperBorder1]} onPress={()=>{}}>
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
      			<Text style={[styles.addTitle, styles.addTypo]}>Add title</Text>
      			<Text style={[styles.addDescription, styles.addTypo]}>Add description</Text>
      			<View style={[styles.postProductInner, styles.postPosition]}>
        				<View style={styles.writeAProductTitleWrapper}>
          					<Text style={[styles.writeAProduct, styles.writeClr]}>Write a product title</Text>
        				</View>
      			</View>
      			<View style={[styles.postProductChild, styles.postPosition]}>
        				<View style={styles.writeAProductTitleWrapper}>
          					<Text style={[styles.writeADescription, styles.writeClr]}>{`Write a description of about 50 words `}</Text>
        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
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
  	addTypo: {
    		fontFamily: "Montserrat-SemiBold",
    		fontSize: 16,
    		textAlign: "left",
    		color: "#000",
    		fontWeight: "600",
    		position: "absolute"
  	},
  	wrapperBorder1: {
    		paddingVertical: 4,
    		paddingHorizontal: 8,
    		borderColor: "#6c6c6c",
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 12,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
    		position: "absolute"
  	},
  	wrapperBorder: {
    		top: 231,
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
  	postPosition: {
    		marginLeft: -175,
    		left: "50%",
    		position: "absolute"
  	},
  	writeClr: {
    		color: "#8a8a8a",
    		textAlign: "left"
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
    		overflow: "hidden",
    		width: 390,
    		left: 0,
    		position: "absolute"
  	},
  	postProduct1: {
    		left: 141,
    		top: 70
  	},
  	icon: {
    		height: "100%",
    		overflow: "hidden",
    		width: "100%"
  	},
  	miarrowUp: {
    		width: 24,
    		height: 24,
    		left: 20,
    		top: 70,
    		position: "absolute"
  	},
  	selectCategory: {
    		top: 140,
    		fontSize: 20,
    		fontWeight: "700",
    		fontFamily: "Montserrat-Bold",
    		left: 20,
    		textAlign: "left",
    		position: "absolute"
  	},
  	furniture: {
    		color: "#6c6c6c",
    		fontFamily: "Montserrat-Regular",
    		fontSize: 14,
    		textAlign: "left"
  	},
  	furnitureWrapper: {
    		top: 190,
    		paddingHorizontal: 8,
    		borderColor: "#6c6c6c",
    		left: 20
  	},
  	homeAppliancesWrapper: {
    		left: 114,
    		top: 190,
    		paddingHorizontal: 8,
    		borderColor: "#6c6c6c"
  	},
  	gamingElectronicsWrapper: {
    		left: 20
  	},
  	gymEquipmentsWrapper: {
    		left: 186
  	},
  	vehiclesWrapper: {
    		top: 272,
    		left: 20
  	},
  	addTitle: {
    		top: 350,
    		left: 20
  	},
  	addDescription: {
    		top: 447,
    		left: 22
  	},
  	writeAProduct: {
    		fontWeight: "500",
    		fontFamily: "Montserrat-Medium",
    		fontSize: 14
  	},
  	writeAProductTitleWrapper: {
    		borderColor: "#8b8b8b",
    		width: 350,
    		padding: 12,
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 12,
    		overflow: "hidden",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	postProductInner: {
    		top: 386
  	},
  	writeADescription: {
    		fontSize: 12,
    		fontFamily: "Montserrat-Regular"
  	},
  	postProductChild: {
    		top: 483
  	},
  	postProduct: {
    		backgroundColor: "#fff",
    		height: 844,
    		width: "100%",
    		flex: 1
  	}
});

export default PostProduct;
