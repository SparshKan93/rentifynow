import React, { useState, useRef } from "react";
import { Image, StyleSheet, Text, View, Pressable, ScrollView, Dimensions, FlatList, Animated } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular, Montserrat_600SemiBold, } from '@expo-google-fonts/montserrat';

const { width } = Dimensions.get('window');

const images = [
  require('../assets/Frame 289.png'),
  require('../assets/Frame 289.png'),
  require('../assets/Frame 289.png'),
  require('../assets/Frame 289.png'),
  // Add other image sources here
];

const Detail = ({ route }) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();
    const { price } = route.params || {};
    const [selectedPlan, setSelectedPlan] = useState(null);

    let [fontsLoaded] = useFonts({
        'Montserrat-Bold': Montserrat_700Bold,
        'Montserrat-Regular': Montserrat_400Regular,
        'Montserrat-SemiBold': Montserrat_600SemiBold
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    const renderItem = ({ item }) => (
        <View style={{ width: width, // Ensure the container takes the full width of the screen
             }}>
          <Image
            style={{ width: '100%',
                height: 340,}}
            resizeMode="cover"
            source={item}
          />
        </View>
      );
    const plans = [
        { id: 1, duration: "1 month", price: "Rs.500" },
        { id: 2, duration: "3 months", price: "Rs.450" },
        { id: 3, duration: "6 months", price: "Rs.400" },
        { id: 4, duration: "12 months", price: "Rs.350" }
    ];

    const handlePress = (id) => {
        setSelectedPlan(selectedPlan === id ? null : id);
    };

    return (
        <SafeAreaView style={styles.detail}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
      snapToInterval={width}
      decelerationRate="fast"
    />
     <View style={styles.indicatorContainer}>
                    {images.map((_, i) => {
                        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                        const scale = scrollX.interpolate({
                            inputRange,
                            outputRange: [1, 1.5, 1],
                            extrapolate: 'clamp',
                        });
                        const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp',
                        });
                        const backgroundColor = scrollX.interpolate({
                            inputRange,
                            outputRange: ['white', '#0a74f0', 'white'],
                            extrapolate: 'clamp',
                        });
                        const elevation = scrollX.interpolate({
                            inputRange,
                            outputRange: [1, 10, 1],
                            extrapolate: 'clamp',
                        });
                        return (
                            <Animated.View
                                key={`indicator-${i}`}
                                style={[styles.indicator, { opacity, transform: [{ scale }], backgroundColor, elevation }]}
                            />
                        );
                    })}
                </View>
      <View style={[styles.ellipsePosition]}>
      <Pressable style={[styles.ellipseGroup]} onPress={() => navigation.goBack()}>
                <Image style={[styles.frameInnerPosition]} resizeMode="cover" source={require('../assets/mi_arrow-up.png')} />
            </Pressable>
            <Pressable style={[styles.ellipseGroup]}>
            <Image
              style={[ styles.frameInnerPosition]}
              resizeMode="cover"
              source={require('../assets/solar_share-outline.png')}
            />
            </Pressable>
          </View>
            <View style={[styles.viewInYourRoomWrapper, styles.frameChild1Border]}>
                <Text style={[styles.viewInYour, styles.monthsTypo]}>{`View in your room`}</Text>
            </View>
            {/* <View>
                <Image style={[styles.detailChildPosition]} resizeMode="cover" source={require('../assets/Frame 289.png')} />
                <View style={[styles.viewInYourRoomWrapper, styles.frameChild1Border]}>
                    <Text style={[styles.viewInYour, styles.monthsTypo]}>{`View in your room`}</Text>
                </View>
            <View style={[styles.ellipseParent, styles.ellipsePosition]}>
                <Image style={[styles.solarshareOutlineIcon, styles.frameInnerPosition]} resizeMode="cover" source={require('../assets/solar_share-outline.png')} />
            </View>
            </View> */}
            {/* <View style={{top:-30, width: width, borderTopLeftRadius: 50,borderTopRightRadius: 50,zIndex: 1, backgroundColor: "white"}}> */}
            <View style= {styles.overlayView}>
                <Text style={[styles.bedForRent]}>Bed for rent</Text>
                <Text style={[styles.yearsOldBed, styles.ratedTypo]}>2 years old bed in brand new condition  </Text>
            </View>
            <View style={styles.frameParent}>
                <Text style={[styles.seePlans]}>See plans</Text>
                <ScrollView 
                    style={[styles.frameGroup]} 
                    horizontal={true} 
                    contentContainerStyle={styles.contentContainer}
                    showsHorizontalScrollIndicator={false}
                >
                    {plans.map((plan) => (
                        <Pressable 
                            key={plan.id} 
                            style={[
                                styles.parentLayout, 
                                selectedPlan === plan.id ? styles.selected : styles.unselected
                            ]}
                            onPress={() => handlePress(plan.id)}
                        >
                            <Text style={[styles.month, styles.monthsTypo]}>{plan.duration}</Text>
                            <Text style={[styles.rs500, styles.monthsTypo]}>{plan.price}</Text>
                            <Text style={styles.perMonth}>per month</Text>
                        </Pressable>
                    ))}
                </ScrollView>
            </View>
            
                <View style={[styles.groupParent]}>
                    <Image style={styles.groupIcon} resizeMode="cover" source={require("../assets/Ellipse 35.png")} />
                    <View style={styles.postedByAtharvaChaudharyParent}>
                        <Text style={[styles.postedByAtharva, styles.monthsTypo]}>Posted by Atharva Chaudhary</Text>
                        <Text style={[styles.rated, styles.ratedTypo]}>4.5/5 rated</Text>
                    </View>
                </View>
                {/* </View>       */}
            </ScrollView>
            <View style={[styles.frameContainer]}>
                <View style={styles.wishlist}>
                    <Image style={[styles.frameIcon]} resizeMode="cover" source={require('../assets/wishlist.png')} />
                    </View>
                    <Pressable style={[styles.bookForRentWrapper, styles.frameIconPosition]} onPress={() => navigation.navigate('Order')}>
                        
                            <Text style={styles.bookForRent}>Book for rent</Text>
                        
                        {/* , { image: { image } } */}
                    </Pressable>
                </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    overlayView: {
        // position: 'absolute',
        bottom: 100,
        left: 0,
        right: 0,
        // height: 150,
        backgroundColor: 'white',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    indicatorContainer: {
        position: 'absolute',
        top: 290,
        flexDirection: 'row',
        alignSelf: 'center',
      },
      indicator: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#0a74f0',
        margin: 5,
      },
    detailChildPosition: {
        width: "98%",
        height: 280,
        alignSelf: "center",
        marginVertical: "3%"
    },
    selected: {
        backgroundColor: "grey"
    },
    unselected: {
        backgroundColor: "white"
    },
    frameChild1Border: {
        borderWidth: 1,
        borderStyle: "solid"
    },
    monthsTypo: {
        fontFamily: "Montserrat-SemiBold",
        fontWeight: "500"
    },
    ellipsePosition: {
        top: -320,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width:"90%",
        alignSelf:"center"
        // position: "absolute"
    },
    frameInnerPosition: {
        zIndex: 1,
        overflow: "hidden",
        top: "15%",
        // position: "absolute"
    },
    ratedTypo: {
        fontSize: 14,
        color: "#979797",
        fontFamily: "Montserrat-SemiBold",
        fontWeight: "500",
        width: "90%",
        alignItems: "center",
    },
    parentLayout: {
        height: 88,
        width: 92,
        borderColor: "rgba(0, 0, 0, 0.09)",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: "2%",
        marginTop: "7.5%"
    },
    frameIconPosition: {
        // bottom: "18.29%",
        // // top: "18.29%",
        height: "63.41%",
        // position: "absolute"
    },
    viewInYour: {
        letterSpacing: -0.5,
        color: "#0a74f0",
        textAlign: "center",
        fontSize: 12
    },
    viewInYourRoomWrapper: {
        top: -115,
        borderColor: "#0a74f0",
        borderRadius: 12,
        justifyContent: "center",
        left: 20,
        backgroundColor: "#fff",
        width: 100,
        height: 40,
        opacity: 0.6
    },
    frameChild: {
        width: 41,
        height: 41,
        zIndex: 0
    },
    ellipseGroup: {
        height: 35,
        width: 35,
        borderColor: "rgba(0, 0, 0, 0.09)",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 50,
        backgroundColor: "white",
        alignItems: "center"
    },
    bedForRent: {
        fontSize: 20,
        letterSpacing: -0.8,
        fontFamily: "Montserrat-SemiBold",
        fontWeight: "500",
        color: "#000",
        alignSelf:"center",
        paddingBottom: 5,
        width: "90%",
        alignItems: "center",
        
    },
    yearsOldBed: {
        letterSpacing: -0.6,
        color: "#979797",
        // left: 20,
        alignSelf:"center"
    },
    month: {
        top: 10,
        fontSize: 16,
        textAlign: "center",
        color: "#000"
    },
    rs500: {
        color: "#3ba440",
        fontSize: 16,
        top: 11,
        textAlign: "center"
    },
    perMonth: {
        fontFamily: "Montserrat-Regular",
        color: "#979797",
        fontSize: 12,
        top: 12,
        textAlign: "center"
    },
    frameGroup: {
        flexDirection: "row",
        top: 5
    },
    contentContainer: {
        paddingRight: 60, // Add padding to the right to ensure the last item is visible
    },
    seePlans: {
        top: 12,
        fontFamily: "Montserrat-SemiBold",
        fontSize: 16,
        textAlign: "left",
        color: "#000",
        fontWeight: "600",
        left: 21
    },
    frameParent: {
        width: "90%",
        height: 170,
        borderColor: "rgba(0, 0, 0, 0.09)",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 12,
        alignSelf: "center",
        bottom: 70
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
        bottom: 40,
        alignItems: "center",
        left: 21,
        flexDirection: "row",
        marginBottom: 40,
        // backgroundColor: "#F5F5F5"
        // shadowColor: "rgba(0, 0, 0, 0.13)",
        // shadowRadius: 20,
        // elevation: 10,
        // shadowOpacity: 1,
        // shadowOffset: {
        //     width: 0,
        //     height: -1
        // },
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
        // right: "5.13%",
        // left: "28.97%",
        paddingHorizontal: 16,
        // paddingVertical: 12,
        backgroundColor: "#0a74f0",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    frameIcon: {
        // width: "18.72%",
        // right: "76.15%",
        // left: "5.13%",
        borderRadius: 16,
        maxWidth: "100%",
        maxHeight: "100%",
        top: "25%"
        // overflow: "hidden"
    },
    frameContainer: {
        flexDirection:"row",
        backgroundColor: '#fff',
        justifyContent: "space-evenly",
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -10 }, // Move the shadow up
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10,
        width: "98%",
        height: 90,
        alignSelf: "center",
        // marginVertical: "5%"
    },
    bedForRentParent: {
        // top: 399,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        height: 445,
        // overflow: "hidden",
        backgroundColor: "#fff"
    },
    detail: {
        width: "100%",
        flex: 1,
        backgroundColor: "#fff"
    },
    wishlist: {
        borderRadius: 16,
        height: 55,
        width:70,
        overflow: "hidden",
        borderColor: "#0a74f0",
        borderWidth: 1,
        borderStyle: "solid",
        alignItems:"center"
    }
});

export default Detail;

// import * as React from "react";
// import { Image, StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useFonts, Montserrat_700Bold, Montserrat_400Regular, Montserrat_600SemiBold, } from '@expo-google-fonts/montserrat';

// const Detail = ({ route }) => {

//     const navigation = useNavigation();

//     const { price } = route.params || {};
//     let [fontsLoaded] = useFonts({
//         'Montserrat-Bold': Montserrat_700Bold,
//         'Montserrat-Regular': Montserrat_400Regular,
//         'Montserrat-SemiBold': Montserrat_600SemiBold
//     });
//     // React.useEffect(() => {
//     //     console.log({ price }); // Log price once when component mounts
//     // }, []);
//     if (!fontsLoaded) {
//         return <Text>Loading...</Text>;
//     }

//     return (
//         <SafeAreaView style={styles.detail}>
//             <View>
//                 <Image style={[styles.detailChildPosition]} resizeMode="cover" source={require('../assets/Frame 289.png')} />
//                 <View style={[styles.viewInYourRoomWrapper, styles.frameChild1Border]}>
//                     <Text style={[styles.viewInYour, styles.monthsTypo]}>{`View in your
//           					room`}</Text>
//                 </View>
//             </View>
//             <View>
//                 <Text style={[styles.bedForRent, styles.bedForRentPosition]}>Bed for rent</Text>
//                 <Text style={[styles.yearsOldBed, styles.ratedTypo]}>2 years old bed in brand new condition</Text>
//             </View>
//             <View style={styles.frameParent}>
//                 <Text style={[styles.seePlans]}>See plans</Text>
//                 <ScrollView style={[styles.frameGroup]} horizontal={true}>
//                     <View style={styles.parentLayout}>
//                         <Text style={[styles.month, styles.monthsTypo]}>1 month</Text>
//                         {/* <Text style={[styles.rs500PerMonthContainer, styles.timePosition]}> */}
//                             <Text style={[styles.rs500, styles.monthsTypo]}>{`Rs.500`}</Text>
//                             <Text style={styles.perMonth}>per month</Text>
//                         {/* </Text> */}
//                     </View>
//                     <View style={styles.parentLayout}>
//                         <Text style={[styles.month, styles.monthsTypo]}>3 month</Text>
//                         {/* <Text style={[styles.rs500PerMonthContainer, styles.timePosition]}> */}
//                             <Text style={[styles.rs500, styles.monthsTypo]}>{`Rs.500`}</Text>
//                             <Text style={styles.perMonth}>per month</Text>
//                         {/* </Text> */}
//                     </View>
//                     <View style={styles.parentLayout}>
//                         <Text style={[styles.month, styles.monthsTypo]}>6 month</Text>
//                         {/* <Text style={[styles.rs500PerMonthContainer, styles.timePosition]}> */}
//                             <Text style={[styles.rs500, styles.monthsTypo]}>{`Rs.500`}</Text>
//                             <Text style={styles.perMonth}>per month</Text>
//                         {/* </Text> */}
//                     </View>
//                     <View style={styles.parentLayout}>
//                         <Text style={[styles.month, styles.monthsTypo]}>12 month</Text>
//                         {/* <Text style={[styles.rs500PerMonthContainer, styles.timePosition]}> */}
//                             <Text style={[styles.rs500, styles.monthsTypo]}>{`Rs.500`}</Text>
//                             <Text style={styles.perMonth}>per month</Text>
//                         {/* </Text> */}
//                     </View>
                    
//                 </ScrollView>
//             </View>
//             <View style={[styles.ellipseParent, styles.ellipsePosition]}>
//                 <Image style={styles.frameChild} resizeMode="cover" source="Ellipse 36.png" />
//                 <Image style={[styles.solarshareOutlineIcon, styles.frameInnerPosition]} resizeMode="cover" source="solar:share-outline.png" />
//             </View>
//             <Pressable style={[styles.ellipseGroup, styles.ellipsePosition]} onPress={() => { }}>
//                 <Image style={styles.frameChild} resizeMode="cover" source="Ellipse 37.png" />
//                 <Image style={[styles.frameInner, styles.frameInnerPosition]} resizeMode="cover" source="Frame 10.png" />
//             </Pressable>
//             <View style={[styles.bedForRentParent, styles.detailChildPosition]}>

//                 <View style={[styles.groupParent, styles.bedForRentPosition]}>
//                     <Image style={styles.groupIcon} resizeMode="cover" source="Group 50.png" />
//                     <View style={styles.postedByAtharvaChaudharyParent}>
//                         <Text style={[styles.postedByAtharva, styles.monthsTypo]}>Posted by Atharva Chaudhary</Text>
//                         <Text style={[styles.rated, styles.ratedTypo]}>4.5/5 rated</Text>
//                     </View>
//                 </View>
//                 <View style={[styles.frameContainer, styles.detailChildPosition]}>
//                     <View style={[styles.bookForRentWrapper, styles.frameIconPosition]}>
//                         <Pressable onPress={() => navigation.navigate('Order', { image: { image } })}>
//                             <Text style={styles.bookForRent}>Book for rent</Text>
//                         </Pressable>
//                     </View>
//                     <Image style={[styles.frameIcon, styles.frameIconPosition]} resizeMode="cover" source="Frame 338.png" />
//                 </View>

//             </View>
//             {/* <View style={styles.frameView}>
//                 <View style={[styles.frameChild1, styles.frameChildLayout]} />
//                 <View style={[styles.frameChild2, styles.frameChildLayout]} />
//                 <View style={[styles.frameChild2, styles.frameChildLayout]} />
//                 <View style={[styles.frameChild2, styles.frameChildLayout]} />
//             </View> */}
//         </SafeAreaView>);
// };

// const styles = StyleSheet.create({
//     detailChildPosition: {
//         width: "98%",
//         height: 280,
//         alignSelf: "center",
//         marginVertical: "3%"

//     },
   
   
    
//     frameChild1Border: {
//         borderWidth: 1,
//         borderStyle: "solid"
//     },
//     monthsTypo: {
//         fontFamily: "Montserrat-SemiBold",
//         fontWeight: "500"
//     },
//     ellipsePosition: {
//         top: 70,
//         flexDirection: "row",
//         position: "absolute"
//     },
//     frameInnerPosition: {
//         zIndex: 1,
//         overflow: "hidden",
//         position: "absolute"
//     },
//     ratedTypo: {
//         fontSize: 14,
//         color: "#979797",
//         fontFamily: "Montserrat-SemiBold",
//         fontWeight: "500",
//         textAlign: "left"
//     },
//     parentLayout: {
//         height: 88,
//         width: 92,
//         borderColor: "rgba(0, 0, 0, 0.09)",
//         borderWidth: 1,
//         borderStyle: "solid",
//         borderRadius: 12,
//         overflow: "hidden",
//         marginHorizontal: "2%",
//         marginTop: "7.5%"
//     },
//     frameIconPosition: {
//         bottom: "18.29%",
//         top: "18.29%",
//         height: "63.41%",
//         position: "absolute"
//     },
//     viewInYour: {
//         letterSpacing: -0.5,
//         color: "#0a74f0",
//         textAlign: "center",
//         fontSize: 12
//     },
//     viewInYourRoomWrapper: {
//         top: -60,
//         borderColor: "#0a74f0",
//         borderRadius: 12,
//         justifyContent: "center",
//         left: 20,
//         backgroundColor: "#fff",
//         width: 100,
//         height: 40,
//         opacity: 0.6
//     },
//     frameChild: {
//         width: 41,
//         height: 41,
//         zIndex: 0
//     },
//     solarshareOutlineIcon: {
//         top: 9,
//         left: 9,
//         width: 24,
//         height: 24
//     },
//     ellipseParent: {
//         left: 329
//     },
//     frameInner: {
//         top: 11,
//         left: 10,
//         width: 22,
//         height: 20
//     },
//     ellipseGroup: {
//         left: 20
//     },
//     bedForRent: {
//         top: -18,
//         fontSize: 20,
//         letterSpacing: -0.8,
//         fontFamily: "Montserrat-SemiBold",
//         fontWeight: "500",
//         textAlign: "left",
//         color: "#000",
//         left: 21
//     },
//     yearsOldBed: {
//         // top: 53,
//         letterSpacing: -0.6,
//         color: "#979797",
//         left: 20,
//         // position: "absolute"
//     },
//     month: {
//         top: 10,
//         fontSize: 16,
//         textAlign: "center",
//         color: "#000"
//     },
//     rs500: {
//         color: "#3ba440",
//         fontSize: 16,
//         top: 11,
//         textAlign: "center"
//     },
//     perMonth: {
//         fontFamily: "Montserrat-Regular",
//         color: "#979797",
//         fontSize: 12,
//         top: 12,
//         textAlign: "center"
//     },
//     rs500PerMonthContainer: {
//         // marginLeft: -32,
//         top: 40,
//         textAlign: "left"
//     },
//     months: {
//         left: 7,
//         fontSize: 16,
//         textAlign: "left",
//         color: "#000",
//         top: 16,
//         position: "absolute"
//     },
//     monthsParent: {
//         // marginLeft: 12
//     },
//     months2: {
//         marginLeft: -41,
//         fontSize: 16,
//         textAlign: "left",
//         color: "#000",
//         left: "50%",
//         position: "absolute",
//         top: 16
//     },
//     frameGroup: {
//         // width: 400,
//         flexDirection: "row",
//         paddingRight: "15%"
//     },
//     seePlans: {
//         top: 12,
//         fontFamily: "Montserrat-SemiBold",
//         fontSize: 16,
//         textAlign: "left",
//         color: "#000",
//         fontWeight: "600",
//         left: 21
//     },
//     frameParent: {
//         // top: 90,
//         width: "90%",
//         height: 180,
//         borderColor: "rgba(0, 0, 0, 0.09)",
//         borderWidth: 1,
//         borderStyle: "solid",
//         borderRadius: 12,
//         alignSelf: "center",
//         marginVertical: "8%"
//         // left: 20,
//         // position: "absolute"
//     },
//     groupIcon: {
//         width: 51,
//         height: 50
//     },
//     postedByAtharva: {
//         fontSize: 16,
//         textAlign: "left",
//         color: "#000"
//     },
//     rated: {
//         marginTop: 4,
//         color: "#979797"
//     },
//     postedByAtharvaChaudharyParent: {
//         marginLeft: 14
//     },
//     groupParent: {
//         top: 260,
//         alignItems: "center",
//         left: 21,
//         flexDirection: "row"
//     },
//     bookForRent: {
//         fontWeight: "700",
//         fontFamily: "Montserrat-Bold",
//         color: "#fff",
//         fontSize: 16,
//         textAlign: "left"
//     },
//     bookForRentWrapper: {
//         width: "65.9%",
//         right: "5.13%",
//         left: "28.97%",
//         paddingHorizontal: 16,
//         paddingVertical: 12,
//         backgroundColor: "#0a74f0",
//         borderRadius: 12,
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "row"
//     },
//     frameIcon: {
//         width: "18.72%",
//         right: "76.15%",
//         left: "5.13%",
//         borderRadius: 16,
//         maxWidth: "100%",
//         maxHeight: "100%",
//         overflow: "hidden"
//     },
//     frameContainer: {
//         top: 328,
//         shadowColor: "rgba(0, 0, 0, 0.13)",
//         shadowOffset: {
//             width: 0,
//             height: -1
//         },
//         shadowRadius: 20,
//         elevation: 20,
//         shadowOpacity: 1,
//         height: 82,
//         overflow: "hidden",
//         backgroundColor: "#fff"
//     },
//     base: {
//         bottom: 1,
//         borderRadius: 10,
//         backgroundColor: "#000",
//         right: 0,
//         top: 0,
//         left: 0,
//         position: "absolute"
//     },
//     bar: {
//         height: "15.71%",
//         width: "35.74%",
//         top: "65.63%",
//         right: "31.99%",
//         bottom: "18.66%",
//         left: "32.27%",
//         position: "absolute"
//     },
//     iphoneStatusBarlower: {
//         top: 410,
//         backgroundColor: "#f5f5f5",
//         height: 35,
//         overflow: "hidden"
//     },
//     bedForRentParent: {
//         top: 399,
//         borderTopLeftRadius: 24,
//         borderTopRightRadius: 24,
//         height: 445,
//         overflow: "hidden",
//         backgroundColor: "#fff"
//     },
//     frameChild1: {
//         borderColor: "#fff",
//         width: 18,
//         backgroundColor: "#0a74f0",
//         borderWidth: 1,
//         borderStyle: "solid"
//     },
//     frameChild2: {
//         width: 8,
//         marginLeft: 4,
//         backgroundColor: "#fff"
//     },
//     frameView: {
//         top: 379,
//         left: 168,
//         flexDirection: "row",
//         position: "absolute"
//     },
//     detail: {
//         width: "100%",
//         // height: 844,
//         flex: 1,
//         backgroundColor: "#fff"
//     }
// });

// export default Detail;