//Library
import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getCategories, httpMethods } from '../../ApiManager/Environment';
import NetworkManager from '../../ApiManager/NetworkManager';

//Components
import CustomText from '../../Components/CustomText/CustomText';
import ProductComponent from '../../Components/ProductComponent/ProductComponent';
import TopBar from '../../Components/TopBar/TopBar';
import Colors from '../../Utils/Colors';

const { width, height } = Dimensions.get("window")

class Home extends Component {

    constructor() {
        super()
        this.state = {
            products: [],
            success: false,
            loading: true,
            serverError: false,
            error: false
        }
    }

    componentDidMount() {
        NetworkManager.request(getCategories, httpMethods.get)
            .then((res) => {
                console.log(res);
                this.setState({ loading: false })
                if (res.status === 200) {
                    this.setState({ success: true, products: res.data.length > 0 ? res.data : [], serverError: false, error: false })
                }
                else if (res.status === 500) {
                    this.setState({ success: false, serverError: true, error: false })
                }
                else {
                    this.setState({ success: false, error: true, serverError: false })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        console.log(this.state.products);
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    {this.state.loading === true &&
                        <View style={styles.loadingView}>
                            <ActivityIndicator color={Colors.primary} hidesWhenStopped={true} size="large" />
                        </View>}
                    {this.state.loading === false &&
                        <View style={{ flex: 1 }}>

                            {
                                this.state.success === false && this.state.serverError &&
                                <View style={styles.displayError}>
                                    <CustomText size="heading" type="bold" style={styles.errorText}>The server is down.</CustomText>
                                </View>
                            }
                            {
                                this.state.success === false && this.state.error &&
                                <View style={styles.displayError}>
                                    <CustomText size="heading" type="bold" style={styles.errorText}>There was an error while loading the products.</CustomText>
                                </View>
                            }
                            {
                                this.state.success === true && this.state.products.length === 0 &&
                                <View style={styles.displayError}>
                                    <CustomText size="heading" type="bold" style={styles.errorText}>No products found.</CustomText>
                                </View>
                            }

                            {
                                this.state.success === true && this.state.products.length > 0 &&
                                <View>
                                    <TopBar />
                                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>

                                        <View style={styles.topView}>
                                            <Image
                                                source={{ uri: this.state.products[0].img }}
                                                style={styles.image}
                                                resizeMode="cover"
                                            />
                                        </View>
                                        <View style={styles.productView}>
                                            <CustomText style={styles.headingText} size="heading" type="bold">
                                                {this.state.products[0].category}
                                            </CustomText>
                                            <View>
                                                {this.state.products[0].items !== undefined && this.state.products[0].items.map((item, index) => {
                                                    return <ProductComponent item={item} key={index} />
                                                })}

                                            </View>
                                        </View>
                                    </ScrollView>
                                </View>
                            }
                        </View>
                    }
                </View>
            </SafeAreaView >
        )
    }
}

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    loadingView: {
        flex: 1,
        justifyContent: "center"
    },
    image: {
        width: width,
        height: height * 0.25
    },
    productView: {
        paddingHorizontal: 15
    },
    headingText: {
        textTransform: "uppercase",
        marginTop: 15
    },
    scrollViewContainer: {
        paddingBottom: 10,
    },
    displayError: {
        justifyContent: "center",
        flex: 1,
        alignItems: "center"
    },
    errorText: {
        color: Colors.primary
    }
})