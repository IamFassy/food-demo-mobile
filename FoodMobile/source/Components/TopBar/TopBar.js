//Library
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../Utils/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//Components

//Utils
import { heightPercentageToDP, widthPercentageToDP } from '../../Utils/ResponsiveUI';
import { connect } from 'react-redux';
import CustomText from '../CustomText/CustomText';

const TopBar = (props) => {
    return (
        <View style={styles.topBarView}>
            <View style={styles.cartView}>
                <FontAwesomeIcon size={24} icon="shopping-cart" />
                {props.count > 0 &&
                    <View style={styles.countView}>
                        <CustomText style={styles.countText} type="bold">
                            {props.count}
                        </CustomText>
                    </View>}
            </View>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        count: state.product.count
    }
}

export default connect(mapStateToProps)(TopBar);

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
        alignSelf: "flex-end",
    },
    countView: {
        backgroundColor: Colors.primary,
        position: "absolute",
        borderRadius: 10,
        left: 15,
        bottom: 10,
        width: 20,
        height: 15,
        zIndex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    countText: {
        color: Colors.white,
        fontSize: 12
    }

})
