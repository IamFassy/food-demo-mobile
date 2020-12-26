//Library
import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import CountButton from '../CountButton/CountButton';
//Components
import CustomText from '../CustomText/CustomText';

const { width } = Dimensions.get("window");

const ProductComponent = () => {
    return (
        <View style={styles.productView}>

            <View style={styles.productSubView}>
                <View style={styles.imageView}>
                    <Image
                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9-D-EKjz_bdKUfpLImqRJ3rCyNJx9wcyEaA&usqp=CAU" }}
                        style={styles.image} />
                </View>
                <View style={styles.detailsView}>
                    <CustomText type="bold" size="subHeading">
                        Chicken Drumsticks
                    </CustomText>
                    <CustomText>
                        500 gms
                    </CustomText>
                    <CustomText type="bold" size="heading" style={{ paddingVertical: 10 }}>
                        {'\u20B9'} 200
                    </CustomText>
                </View>
                <View style={styles.buttonView}>
                    <CountButton />
                </View>

            </View>


        </View>
    )
}

export default ProductComponent;

const styles = StyleSheet.create({
    productView: {
        // paddingHorizontal: 15
    },
    productSubView: {
        display: "flex",
        flexDirection: "row",
    },
    imageView: {
        flex: 0.25
    },
    image: {
        borderRadius: 10,
        width: "100%",
        height: 100,
    },
    detailsView: {
        paddingLeft: 10,
        flex: 0.45
    },
    buttonView: {
        flex: 0.3,
        alignSelf: "flex-end"
    }
})
