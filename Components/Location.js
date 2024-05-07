import * as React from "react";
import {Text, StyleSheet, View, Image, Pressable} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

const Location = () => {

	const navigation = useNavigation();

	const [markerPosition, setMarkerPosition] = useState({ latitude: 22.3511, longitude: 78.6677 });
	const [address, setAddress] = useState('Select your area');

	const handleMapPress = async (event) => {
		const { coordinate } = event.nativeEvent;
		setMarkerPosition(coordinate);
		const address = await reverseGeocode(coordinate.latitude, coordinate.longitude);
        setAddress(address);
	  };

	  const reverseGeocode = async (latitude, longitude) => {
		try {
		  const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
		  const data = await response.json();
		  return data.display_name;
		} catch (error) {
		  console.error("Error fetching reverse geocode:", error);
		  return "Unknown Location";
		}
	  };
  	
  	return (
    		<View style={styles.location9}>
      			{/* <View style={[styles.iphoneStatusBarlower, styles.location9ChildLayout]}>
        				<View style={styles.bar}>
          					<View style={styles.base} />
        				</View>
      			</View> */}
      			<Pressable style={styles.nextWrapper} onPress={() => navigation.navigate('HomeLoggedIn')}>
        				<Text style={styles.next}>Next</Text>
      			</Pressable>
      			<Text style={[styles.lastQuestion, styles.inWhichCityTypo]}>Last Question !</Text>
      			<Text style={[styles.inWhichCity, styles.inWhichCityTypo]}>In which City are you looking for items to rent?</Text>
				  <MapView style={[styles.location9Child, styles.meerutParentLayout]} initialRegion={{ latitude: 22.3511, longitude: 78.6677, latitudeDelta: 12, longitudeDelta: 12 }} onPress={handleMapPress}>
                <Marker coordinate={markerPosition} />
            </MapView>
        				{/* <Image style={[styles.location9Item, styles.location9ItemPosition]} resizeMode="cover" source="Frame 63.png" /> */}
        				
        				<View style={[styles.meerutParent, styles.meerutParentLayout]}>
          					<Text style={[styles.meerut, styles.meerutTypo]}>{address}</Text>
          					{/* <Image style={styles.basilcrossOutlineIcon} resizeMode="cover" source="basil:cross-outline.png" /> */}
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
        				selectDestinationPosition: {
          					top: 6,
          					position: "absolute"
        				},
        				location9ChildLayout: {
          					width: 390,
          					left: 0
        				},
        				location9InnerBorder: {
          					paddingVertical: 11,
          					paddingHorizontal: 14,
          					borderColor: "rgba(0, 0, 0, 0.4)",
          					borderWidth: 1,
          					borderStyle: "solid",
          					width: 350,
          					borderRadius: 12,
          					marginLeft: -175,
          					left: "50%",
          					position: "absolute",
          					overflow: "hidden"
        				},
        				meerutTypo: {
          					fontFamily: "Montserrat-Regular",
          					textAlign: "left"
        				},
        				inWhichCityTypo: {
          					fontFamily: "Montserrat-SemiBold",
          					fontSize: 20,
          					left: 20,
          					textAlign: "left",
          					color: "#000",
          					fontWeight: "600",
          					position: "absolute"
        				},
        				meerutParentLayout: {
          					borderRadius: 24,
          					position: "absolute"
        				},
        				location9ItemPosition: {
          					height: 30,
          					top: 470,
          					left: 151,
          					position: "absolute",
          					overflow: "hidden"
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
          					left: 6,
          					width: 6,
          					height: 6
        				},
        				rightArea: {
          					height: 44,
          					flex: 1
        				},
        				iphoneWithNotch: {
          					paddingHorizontal: 12,
          					paddingVertical: 0,
          					justifyContent: "center",
          					top: 0,
          					alignItems: "center",
          					flexDirection: "row",
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
          					position: "absolute",
          					overflow: "hidden"
        				},
        				next: {
          					fontWeight: "700",
          					fontFamily: "Montserrat-Bold",
          					color: "#fff",
          					fontSize: 16,
          					textAlign: "left"
        				},
        				nextWrapper: {
          					top: 720,
          					backgroundColor: "#0a74f0",
          					height: 52,
          					paddingHorizontal: 16,
          					paddingVertical: 12,
          					width: 350,
          					borderRadius: 12,
          					marginLeft: -175,
          					left: "50%",
          					justifyContent: "center",
          					alignItems: "center",
          					flexDirection: "row",
          					position: "absolute"
        				},
        				typeYourCity: {
          					fontSize: 14,
          					color: "rgba(0, 0, 0, 0.6)"
        				},
        				majesticonssearchLine: {
          					height: 28,
          					marginLeft: 190,
          					width: 28,
          					overflow: "hidden"
        				},
        				typeYourCityParent: {
          					alignItems: "center",
          					flexDirection: "row"
        				},
        				location9Inner: {
          					top: 254
        				},
        				lastQuestion: {
          					top: 140
        				},
        				inWhichCity: {
          					top: 184,
          					letterSpacing: -0.8,
          					width: 324
        				},
        				location9Child: {
          					top: 300,
          					height: 370,
          					width: 390,
          					left: 0
        				},
        				selectDestination: {
          					left: 40,
          					fontSize: 12,
          					fontWeight: "500",
          					fontFamily: "Poppins-Medium",
          					textAlign: "left",
          					color: "#000"
        				},
        				selectDestinationWrapper: {
          					borderRadius: 4,
          					shadowColor: "rgba(0, 0, 0, 0.11)",
          					shadowOffset: {
            						width: 0,
            						height: 1
          					},
          					shadowRadius: 10,
          					elevation: 10,
          					shadowOpacity: 1,
          					width: 153,
          					backgroundColor: "#fff"
        				},
        				location9Item: {
          					borderTopLeftRadius: 4,
          					borderBottomLeftRadius: 4,
          					width: 36
        				},
        				frameChild: {
          					width: 34,
          					height: 36,
          					zIndex: 0
        				},
        				vectorIcon: {
          					height: "52.22%",
          					width: "39.12%",
          					top: "26.09%",
          					right: "30.45%",
          					bottom: "21.69%",
          					left: "30.43%",
          					maxWidth: "100%",
          					maxHeight: "100%",
          					zIndex: 1,
          					position: "absolute",
          					overflow: "hidden"
        				},
        				ellipseParent: {
          					top: 508,
          					left: 151,
          					flexDirection: "row",
          					position: "absolute"
        				},
        				meerut: {
          					color: "#0a74f0",
          					fontSize: 16
        				},
        				basilcrossOutlineIcon: {
          					width: 24,
          					height: 24,
          					marginLeft: 4,
          					overflow: "hidden"
        				},
        				meerutParent: {
          					marginTop: -72,
          					borderColor: "#0a74f0",
          					paddingHorizontal: 8,
          					paddingVertical: 4,
          					borderWidth: 1,
          					borderStyle: "solid",
          					borderRadius: 24,
          					marginLeft: -175,
          					top: "50%",
          					left: "50%",
          					justifyContent: "center",
          					alignItems: "center",
          					flexDirection: "row",
          					overflow: "hidden",
          					backgroundColor: "#fff"
        				},
        				framePressable: {
          					top: 630,
          					height: 41,
          					backgroundColor: "#fff"
        				},
        				location9: {
          					width: "100%",
          					height: 844,
          					overflow: "hidden",
          					flex: 1,
          					backgroundColor: "#fff"
        				}
      			});
      			
      			export default Location;
      			