import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useFonts, Montserrat_700Bold, Montserrat_400Regular, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';

const Education = () => {
    const navigation = useNavigation();
    const [selectedItems, setSelectedItems] = useState([]);

    const handlePress = (item) => {
        setSelectedItems(prevItems => {
            if (prevItems.includes(item)) {
                return prevItems.filter(prevItem => prevItem !== item); // Remove item if already selected
            } else {
                return [...prevItems, item]; // Add item if not selected
            }
        });
    };

    let [fontsLoaded] = useFonts({
        'Montserrat-Bold': Montserrat_700Bold,
        'Montserrat-Regular': Montserrat_400Regular,
        'Montserrat-SemiBold': Montserrat_600SemiBold
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={[styles.education, styles.leftAreaFlexBox]}>
            <Text style={styles.letsMakeYour}>Let's make your profile by asking you some quick questions</Text>
            <Text style={[styles.itWillOnlyContainer, styles.containerTypo]}>
                <Text style={styles.itWillOnly}>It will only take </Text>
                <Text style={styles.hiAnshTypo}>60 seconds</Text>
                <Text style={styles.itWillOnly}> to complete this onboarding</Text>
            </Text>
            <Text style={[styles.hiAnsh, styles.hiAnshTypo]}>Hi, Ansh</Text>
            <Text style={[styles.firstOfAllContainer, styles.containerTypo]}>
                <Text style={styles.itWillOnly}>First of all tell us what you’re </Text>
                <Text style={styles.nextTypo}>looking for?</Text>
            </Text>
            <Pressable style={styles.nextWrapper} onPress={() => navigation.navigate('Location')}>
                <Text style={[styles.next, styles.nextTypo]}>Next</Text>
            </Pressable>
            <Pressable style={[styles.furnitureWrapper, styles.wrapperBorder1, selectedItems.includes('furniture') && styles.selectedItem]} onPress={() => handlePress('furniture')}>
                <Text style={[styles.furniture, selectedItems.includes('furniture') && styles.selectedText]}>Furniture</Text>
            </Pressable>
            <Pressable style={[styles.homeAppliancesWrapper, styles.wrapperBorder1, selectedItems.includes('Home appliances') && styles.selectedItem]} onPress={() => handlePress('Home appliances')}>
                <Text style={[styles.furniture, selectedItems.includes('Home appliances') && styles.selectedText]}>Home appliances</Text>
            </Pressable>
            <Pressable style={[styles.gamingElectronicsWrapper, styles.wrapperBorder, selectedItems.includes('Gaming Electronics') && styles.selectedItem]} onPress={() => handlePress('Gaming Electronics')}>
                <Text style={[styles.furniture, selectedItems.includes('Gaming Electronics') && styles.selectedText]}>Gaming Electronics</Text>
            </Pressable>
            <Pressable style={[styles.gymEquipmentsWrapper, styles.wrapperBorder, selectedItems.includes('Gym Equipments') && styles.selectedItem]} onPress={() => handlePress('Gym Equipments')}>
                <Text style={[styles.furniture, selectedItems.includes('Gym Equipments') && styles.selectedText]}>Gym Equipments</Text>
            </Pressable>
            <Pressable style={[styles.vehiclesWrapper, styles.wrapperBorder1, selectedItems.includes('Vehicles') && styles.selectedItem]} onPress={() => handlePress('Vehicles')}>
                <Text style={[styles.furniture, selectedItems.includes('Vehicles') && styles.selectedText]}>Vehicles</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    leftAreaFlexBox: {
        overflow: "hidden",
        flex: 1
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
    leftArea: {
        height: 44
    },
    notchArea: {
        width: 164,
        height: 44
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
    base: {
        bottom: 1,
        borderRadius: 10,
        backgroundColor: "#000",
        right: 0,
        left: 0,
        top: 0,
        position: "absolute"
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
    },
    selectedItem: {
        backgroundColor: "#0a74f0",
    },
    selectedText: {
        color: "#fff",
    },
});

export default Education;
