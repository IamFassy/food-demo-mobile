//Library
import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from '../../Utils/ResponsiveUI';
import CountButton from '../CountButton/CountButton';
//Components
import CustomText from '../CustomText/CustomText';

const { width, height } = Dimensions.get("window");

const ProductComponent = ({ item }) => {
    const [count, setCount] = useState(0)

    const addClicked = () => {
        setCount(count + 1)
    }
    return (
        <View style={styles.productView}>

            <View style={styles.productSubView}>
                <View style={styles.imageView}>
                    <Image
                        source={{ uri: item.img }}
                        style={styles.image} />
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
                            <CountButton count={count} onPress={() => addClicked()} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProductComponent;

const styles = StyleSheet.create({
    productView: {
        // paddingHorizontal: 15
        marginTop: 15,
    },
    productSubView: {
        display: "flex",
        flexDirection: "row",
    },
    imageView: {
        flex: 0.23,
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
    }
})
