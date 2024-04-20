import * as React from "react";
import {Image, StyleSheet, Text, View, Pressable} from "react-native";

const Detail = () => {
  	
  	return (
    		<View style={styles.detail}>
      			<Image style={[styles.detailChild, styles.detailChildPosition]} resizeMode="cover" source="Rectangle 152.png" />
      			<View style={[styles.iphoneWithNotch, styles.timeFlexBox]}>
        				<View style={styles.leftArea}>
          					<View style={[styles.time, styles.timePosition]}>
            						<Text style={[styles.text, styles.monthsClr]}>9:41</Text>
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
      			<View style={[styles.viewInYourRoomWrapper, styles.frameChild1Border]}>
        				<Text style={[styles.viewInYour, styles.monthsTypo]}>{`View in your
          					room`}</Text>
      			</View>
      			<View style={[styles.ellipseParent, styles.ellipsePosition]}>
        				<Image style={styles.frameChild} resizeMode="cover" source="Ellipse 36.png" />
        				<Image style={[styles.solarshareOutlineIcon, styles.frameInnerPosition]} resizeMode="cover" source="solar:share-outline.png" />
      			</View>
      			<Pressable style={[styles.ellipseGroup, styles.ellipsePosition]} onPress={()=>{}}>
        				<Image style={styles.frameChild} resizeMode="cover" source="Ellipse 37.png" />
        				<Image style={[styles.frameInner, styles.frameInnerPosition]} resizeMode="cover" source="Frame 10.png" />
      			</Pressable>
      			<View style={[styles.bedForRentParent, styles.detailChildPosition]}>
        				<Text style={[styles.bedForRent, styles.bedForRentPosition]}>Bed for rent</Text>
        				<Text style={[styles.yearsOldBed, styles.ratedTypo]}>2 years old bed in brand new condition</Text>
        				<View style={styles.frameParent}>
          					<View style={[styles.frameGroup, styles.seePlansPosition]}>
            						<View style={styles.parentLayout}>
              							<Text style={[styles.month, styles.monthsTypo]}>1 month</Text>
              							<Text style={[styles.rs500PerMonthContainer, styles.timePosition]}>
                								<Text style={[styles.rs500, styles.monthsTypo]}>{`Rs.500
`}</Text>
                                <Text style={styles.perMonth}>per month</Text>
                            </Text>
                        </View>
                        <View style={[styles.monthsParent, styles.parentLayout]}>
                            <Text style={[styles.months, styles.monthsTypo]}>3 months</Text>
                            <Text style={[styles.rs500PerMonthContainer, styles.timePosition]}>
                								<Text style={[styles.rs500, styles.monthsTypo]}>{`Rs.450
                								`}</Text>
                                <Text style={styles.perMonth}>per month</Text>
                            </Text>
                        </View>
                        <View style={[styles.monthsParent, styles.parentLayout]}>
                            <Text style={[styles.months, styles.monthsTypo]}>6 months</Text>
                            <Text style={[styles.rs500PerMonthContainer, styles.timePosition]}>
                								<Text style={[styles.rs500, styles.monthsTypo]}>{`Rs.400
                								`}</Text>
                                <Text style={styles.perMonth}>per month</Text>
                            </Text>
                        </View>
                        <View style={[styles.monthsParent, styles.parentLayout]}>
                            <Text style={[styles.months2, styles.monthsTypo]}>12 months</Text>
                            <Text style={[styles.rs500PerMonthContainer, styles.timePosition]}>
                								<Text style={[styles.rs500, styles.monthsTypo]}>{`Rs.350
                								`}</Text>
                                <Text style={styles.perMonth}>per month</Text>
                            </Text>
                        </View>
                    </View>
                    <Text style={[styles.seePlans, styles.seePlansPosition]}>See plans</Text>
                </View>
                <View style={[styles.groupParent, styles.bedForRentPosition]}>
                    <Image style={styles.groupIcon} resizeMode="cover" source="Group 50.png" />
                    <View style={styles.postedByAtharvaChaudharyParent}>
                        <Text style={[styles.postedByAtharva, styles.monthsTypo]}>Posted by Atharva Chaudhary</Text>
                        <Text style={[styles.rated, styles.ratedTypo]}>4.5/5 rated</Text>
                    </View>
                </View>
                <View style={[styles.frameContainer, styles.detailChildPosition]}>
                    <View style={[styles.bookForRentWrapper, styles.frameIconPosition]}>
                        <Text style={styles.bookForRent}>Book for rent</Text>
                    </View>
                    <Image style={[styles.frameIcon, styles.frameIconPosition]} resizeMode="cover" source="Frame 338.png" />
                </View>
                <View style={[styles.iphoneStatusBarlower, styles.detailChildPosition]}>
                    <View style={styles.bar}>
                        <View style={styles.base} />
                    </View>
                </View>
            </View>
            <View style={styles.frameView}>
                <View style={[styles.frameChild1, styles.frameChildLayout]} />
                <View style={[styles.frameChild2, styles.frameChildLayout]} />
                <View style={[styles.frameChild2, styles.frameChildLayout]} />
                <View style={[styles.frameChild2, styles.frameChildLayout]} />
            </View>
        </View>);
};

const styles = StyleSheet.create({
    detailChildPosition: {
        width: 390,
        left: 0,
        position: "absolute"
    },
    timeFlexBox: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    timePosition: {
        left: "50%",
        position: "absolute"
    },
    monthsClr: {
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
    frameChild1Border: {
        borderWidth: 1,
        borderStyle: "solid"
    },
    monthsTypo: {
        fontFamily: "Montserrat-Medium",
        fontWeight: "500"
    },
    ellipsePosition: {
        top: 70,
        flexDirection: "row",
        position: "absolute"
    },
    frameInnerPosition: {
        zIndex: 1,
        overflow: "hidden",
        position: "absolute"
    },
    bedForRentPosition: {
        left: 21,
        position: "absolute"
    },
    ratedTypo: {
        fontSize: 14,
        color: "#979797",
        fontFamily: "Montserrat-Medium",
        fontWeight: "500",
        textAlign: "left"
    },
    seePlansPosition: {
        left: 12,
        position: "absolute"
    },
    parentLayout: {
        height: 88,
        width: 92,
        borderColor: "rgba(0, 0, 0, 0.09)",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 12,
        overflow: "hidden"
    },
    frameIconPosition: {
        bottom: "18.29%",
        top: "18.29%",
        height: "63.41%",
        position: "absolute"
    },
    frameChildLayout: {
        height: 8,
        borderRadius: 32,
        overflow: "hidden"
    },
    detailChild: {
        height: 370,
        top: 50
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
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
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
        top: 0,
        justifyContent: "center",
        width: 390,
        left: 0,
        position: "absolute"
    },
    viewInYour: {
        letterSpacing: -0.5,
        color: "#0a74f0",
        textAlign: "center",
        fontSize: 12
    },
    viewInYourRoomWrapper: {
        top: 349,
        borderColor: "#0a74f0",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        left: 20,
        position: "absolute",
        backgroundColor: "#fff"
    },
    frameChild: {
        width: 41,
        height: 41,
        zIndex: 0
    },
    solarshareOutlineIcon: {
        top: 9,
        left: 9,
        width: 24,
        height: 24
    },
    ellipseParent: {
        left: 329
    },
    frameInner: {
        top: 11,
        left: 10,
        width: 22,
        height: 20
    },
    ellipseGroup: {
        left: 20
    },
    bedForRent: {
        top: 21,
        fontSize: 20,
        letterSpacing: -0.8,
        fontFamily: "Montserrat-Medium",
        fontWeight: "500",
        textAlign: "left",
        color: "#000"
    },
    yearsOldBed: {
        top: 53,
        letterSpacing: -0.6,
        color: "#979797",
        left: 20,
        position: "absolute"
    },
    month: {
        top: 14,
        left: 13,
        fontSize: 16,
        textAlign: "left",
        color: "#000",
        position: "absolute"
    },
    rs500: {
        color: "#3ba440",
        fontSize: 16
    },
    perMonth: {
        fontFamily: "Montserrat-Regular",
        color: "#979797",
        fontSize: 12
    },
    rs500PerMonthContainer: {
        marginLeft: -32,
        top: 40,
        textAlign: "left"
    },
    months: {
        left: 7,
        fontSize: 16,
        textAlign: "left",
        color: "#000",
        top: 16,
        position: "absolute"
    },
    monthsParent: {
        marginLeft: 12
    },
    months2: {
        marginLeft: -41,
        fontSize: 16,
        textAlign: "left",
        color: "#000",
        left: "50%",
        position: "absolute",
        top: 16
    },
    frameGroup: {
        width: 326,
        flexDirection: "row",
        top: 50
    },
    seePlans: {
        top: 12,
        fontFamily: "Montserrat-SemiBold",
        fontSize: 16,
        textAlign: "left",
        color: "#000",
        fontWeight: "600"
    },
    frameParent: {
        top: 90,
        width: 350,
        height: 150,
        borderColor: "rgba(0, 0, 0, 0.09)",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 12,
        left: 20,
        position: "absolute"
    },
    groupIcon: {
        width: 51,
        height: 50
    },
    postedByAtharva: {
        fontSize: 16,
        textAlign: "left",
        color: "#000"
    },
    rated: {
        marginTop: 4,
        color: "#979797"
    },
    postedByAtharvaChaudharyParent: {
        marginLeft: 14
    },
    groupParent: {
        top: 260,
        alignItems: "center",
        left: 21,
        flexDirection: "row"
    },
    bookForRent: {
        fontWeight: "700",
        fontFamily: "Montserrat-Bold",
        color: "#fff",
        fontSize: 16,
        textAlign: "left"
    },
    bookForRentWrapper: {
        width: "65.9%",
        right: "5.13%",
        left: "28.97%",
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "#0a74f0",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    frameIcon: {
        width: "18.72%",
        right: "76.15%",
        left: "5.13%",
        borderRadius: 16,
        maxWidth: "100%",
        maxHeight: "100%",
        overflow: "hidden"
    },
    frameContainer: {
        top: 328,
        shadowColor: "rgba(0, 0, 0, 0.13)",
        shadowOffset: {
            width: 0,
            height: -1
        },
        shadowRadius: 20,
        elevation: 20,
        shadowOpacity: 1,
        height: 82,
        overflow: "hidden",
        backgroundColor: "#fff"
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
        top: 410,
        backgroundColor: "#f5f5f5",
        height: 35,
        overflow: "hidden"
    },
    bedForRentParent: {
        top: 399,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        height: 445,
        overflow: "hidden",
        backgroundColor: "#fff"
    },
    frameChild1: {
        borderColor: "#fff",
        width: 18,
        backgroundColor: "#0a74f0",
        borderWidth: 1,
        borderStyle: "solid"
    },
    frameChild2: {
        width: 8,
        marginLeft: 4,
        backgroundColor: "#fff"
    },
    frameView: {
        top: 379,
        left: 168,
        flexDirection: "row",
        position: "absolute"
    },
    detail: {
        width: "100%",
        height: 844,
        flex: 1,
        backgroundColor: "#fff"
    }
});

export default Detail;