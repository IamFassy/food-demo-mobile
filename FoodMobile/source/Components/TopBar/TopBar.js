//Library
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../Utils/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//Components

//Utils
import { heightPercentageToDP, widthPercentageToDP } from '../../Utils/ResponsiveUI';

const TopBar = () => {
    return (
        <View style={styles.topBarView}>
            <View style={styles.cartView}>
                <FontAwesomeIcon size={24} icon="shopping-cart" />
            </View>
        </View>
    )
}

export default TopBar;

const styles = StyleSheet.create({
    topBarView: {
        backgroundColor: Colors.white,
        opacity: 0.6,
        position: "absolute",
        top: 0,
        zIndex: 1,
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(5),
        justifyContent: "center",
        paddingHorizontal: 20
    },
    cartView: {
        alignSelf: "flex-end"
    }
})
