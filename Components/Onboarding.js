import React, { useEffect } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';

const Onboaring = () => {
    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        'Montserrat-Bold': Montserrat_700Bold,
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            // Navigate to another screen after 3-4 seconds
            navigation.navigate('Signup');
        }, 4000); // Change 3000 to 4000 for 4 seconds

        return () => clearTimeout(timer); // Clear the timer on component unmount
    }, []);

    if (!fontsLoaded) {
        return <Text>Loading...</Text>; // You can render a loading indicator until the font is loaded
    }

    return (
        <View style={[styles.onboarding, { backgroundColor: '#fff' }]}>
            <Text style={styles.rentifynow}>
                <Text style={styles.rentify}>Rentify</Text>
                <Text style={styles.now}>Now</Text>
            </Text>
            <Image style={[styles.httpslottiefilescomanimatIcon, styles.timePosition]} resizeMode="cover" source={{ uri: 'https://lottiefiles.com/animations/blue-dots-throbber-gsiSsAFdUB.png' }} />
        </View>
    )
};

const styles = StyleSheet.create({
    rentify: {
        fontWeight: "500",
        fontFamily: "Montserrat-Bold",
        color: "#000"
    },
    now: {
        fontWeight: "700",
        fontFamily: "Montserrat-Bold",
        color: "#0a74f0"
    },
    rentifynow: {
        top: 407,
        left: 92,
        fontSize: 32,
        textAlign: "left",
        position: "absolute"
    },
    httpslottiefilescomanimatIcon: {
        marginLeft: -103,
        top: 680,
        width: 205,
        height: 116
    },
    onboarding: {
        width: "100%",
        height: 844,
        backgroundColor: "transparent",
        overflow: "hidden",
        flex: 1
    }
});

export default Onboaring;
