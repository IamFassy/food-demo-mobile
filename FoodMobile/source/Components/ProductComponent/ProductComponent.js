//Library
import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { heightPercentageToDP, widthPercentageToDP } from '../../Utils/ResponsiveUI';
import CountButton from '../CountButton/CountButton';
import store from '../../ReduxClasses/Store/ConfigureStore';
//Components
import CustomText from '../CustomText/CustomText';
import * as Actions from '../../ReduxClasses/Actions/ProductActions';
import { addQuantity, addToCart, subtractQuantity } from '../../ReduxClasses/ActionCreators/ProductActionCreator';
import Colors from '../../Utils/Colors';



const ProductComponent = ({ item, dispatch, product, index, items }) => {

    const addClicked = (id,index) => {
        dispatch(addToCart(id,index))
    }

    const handleAddQuantity = (id) => {
        dispatch(addQuantity(id));
    }

    const handleRemoveQuantity = (id) => {
        dispatch(subtractQuantity(id));
    }


    console.log(product, "redux");
    return (
        <View style={styles.productView}>

            <View style={styles.productSubView}>
                <View style={styles.imageView}>
                    <Image
                        source={{ uri: item.img }}
                        style={[styles.image, { opacity: item.inStock ? 1 : 0.5 }]} />
                    {!item.inStock &&
                        <View style={styles.outOfStockView}>
                            <CustomText style={styles.stockText}>OUT OF STOCK</CustomText>
                        </View>}
                </View>
                <View style={styles.detailsView}>
                    <View style={{ flex: 0.25 }}>
                        <CustomText type="bold" size="normal">
                            {item.name}
                        </CustomText>
                    </View>
                    <View style={{ flex: 0.3, justifyContent: "flex-start" }}>
                        <CustomText>
                            {item.quantity}
                        </CustomText>
                    </View>
                    <View style={[styles.productSubView, { alignItems: "center", flex: 0.45 }]}>
                        <View style={{ flex: 0.55, }}>
                            <CustomText type="bold" size="heading">
                                {'\u20B9'} {item.price}
                            </CustomText>
                        </View>
                        <View style={styles.buttonView}>
                            {item.inStock === true && <CountButton
                                id={item.itemId}
                                index={index}
                                onPress={() => addClicked(item.itemId)}
                                handleAddQuantity={() => handleAddQuantity(item.itemId)}
                                handleRemoveQuantity={() => handleRemoveQuantity(item.itemId)} />}
                            {item.inStock === false &&
                                <TouchableOpacity>
                                    <CustomText type="bold" style={styles.notifyText}>Notify Me</CustomText>
                                </TouchableOpacity>
                            }
                        </View>

                    </View>
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        product: state.product,
        items: state.product.items
    }
}


export default connect(mapStateToProps)(ProductComponent);

const styles = StyleSheet.create({
    productView: {
        marginTop: 15,
    },
    productSubView: {
        display: "flex",
        flexDirection: "row",
    },
    imageView: {
        flex: 0.23,
        display: "flex"
    },
    image: {
        borderRadius: 10,
        width: widthPercentageToDP(22),
        height: widthPercentageToDP(22),
    },
    detailsView: {
        paddingLeft: 20,
        flex: 0.77,
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    buttonView: {
        flex: 0.45,
        alignSelf: "flex-end"
    },
    notifyText: {
        color: Colors.primary,
        textAlign: "right"
    },
    outOfStockView: {
        position: "absolute",
        zIndex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.white,
        alignSelf: "center",
        height: widthPercentageToDP(8),
        top: widthPercentageToDP(7),
        left: widthPercentageToDP(5),
        width: widthPercentageToDP(12)
    },
    stockText: {
        color: Colors.primary,
        fontSize: 10,
        textAlign: "center"
    }
})
