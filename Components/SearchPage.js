import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, Pressable, TextInput, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import api from '../api/postApi';
import Post from './Post';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const SearchPage = () => {
    const route = useRoute();
    const { search } = route.params;
    const [posts, setPosts] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const getSelectedPosts = async () => {
            try {
                if (search) {
                    const fetchedPosts = await api.getSelectedPosts(search);
                    setPosts(fetchedPosts);
                } else {
                    setPosts([]);
                }
            } catch (error) {
                console.error('Error while getting selected posts:', error.message);
                setPosts([]);
            }
        };

        getSelectedPosts();
    }, [search]);

    const renderPostPairs = () => {
        let pairs = [];
        for (let i = 0; i < posts.length; i += 2) {
            pairs.push(posts.slice(i, i + 2));
        }
        return pairs;
    };


    return (
        <SafeAreaView style={styles.srp}>
            <ScrollView>
            <View style={styles.parentFlexBox}>
                <Pressable style={[styles.miarrowUp, styles.frameParentPosition1]} onPress={() => { }}>
                    <Image style={styles.icon} resizeMode="cover" source={require('../assets/mi_arrow-up.png')} />
                </Pressable>
                <View style={[styles.srpInner]}>
                    <TextInput style={styles.beds}
                        value={search}
                        onPress={() => navigation.navigate('Srp')}
                    />
                    <Image style={[styles.simpleIconsgooglelens, styles.iconLayout]} resizeMode="cover" source={require('../assets/simple-icons_googlelens.png')} />
                </View>
            </View>
            <Text style={[styles.results]}>{posts.length} result</Text>

            <View style={{ width: "100%", justifyContent: 'center', alignSelf: 'center', flexWrap: 'wrap', alignItems: "center" }}>
					{/* <Text style={[styles.recommendedPosts, styles.postsTypo]}>Recommended posts</Text> */}
					{renderPostPairs().map((pair, pairIndex) => (
						<View key={pairIndex} style={styles.row}>
							{pair.map((post, postIndex) => (
								<View key={postIndex} style={styles.postContainer}>
									<Post
										title={post.title}
										description={post.description}
										price={post.rent}
										imageSrc={{ uri: post.imageUrl }}
									/>
								</View>
							))}
						</View>
					))}
				</View>

            {/* {renderPostPairs().map((pair, pairIndex) => (
                <View key={pairIndex} style={styles.row}>
                    {pair.map((post, postIndex) => (
                        <View key={postIndex} style={styles.postContainer}>
                            <Post
                                title={post.title}
                                description={post.description}
                                price={post.rent}
                                imageSrc={{ uri: post.imageUrl }}
                            />
                        </View>
                    ))}
                </View>
            ))} */}
            {/* <Image style={[styles.uilfilterIcon, styles.resultsPosition]} resizeMode="cover" source={require('../assets/uil_filter.png')} /> */}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    srpInnerLayout: {
        borderRadius: 12,
        overflow: "hidden"
    },
    parentFlexBox: {
        flexDirection: "row"
    },
    iconLayout: {
        height: 24,
        width: 24
    },
    frameParentPosition1: {
        left: 20,
        position: "absolute"
    },
    beds: {
        width: "80%",
        color: "rgba(0, 0, 0, 0.6)",
        fontFamily: "Montserrat-Regular",
        fontSize: 14,
        textAlign: "left",
        paddingEnd: "5%"
    },
    basilcrossOutlineIcon: {
        overflow: "hidden"
    },
    simpleIconsgooglelens: {
        marginLeft: "5%",
        overflow: "hidden"
    },
    basilcrossOutlineParent: {
        marginLeft: 187
    },
    srpInner: {
        top: "45%",
        left: "15%",
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0.4)",
        borderWidth: 1,
        width: "80%",
        height: 50,
        paddingHorizontal: 14,
        paddingVertical: 11,
        // justifyContent: "center",
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    results: {
        paddingTop: "10%",
        paddingBottom: "5%",
        left: "5%",
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
    icon: {
        height: "100%",
        overflow: "hidden",
        width: "100%"
    },
    miarrowUp: {
        top: "60%",
        height: 30,
        width: 30
    },
    srp: {
        width: "100%",
        flex: 1,
        backgroundColor: "#fff"
    },
    row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		paddingHorizontal: '3%',
		marginBottom: 20,
		alignItems: "center"
	},
    postContainer: {
		flexBasis: '48%',
		// marginHorizontal: '1%',
		marginBottom: 10,
		// width: "0%",
		margin: 2,
		// borderWidth: 1,
		// borderStyle: "solid",
		// top: "10%"

	},
});

export default SearchPage;
