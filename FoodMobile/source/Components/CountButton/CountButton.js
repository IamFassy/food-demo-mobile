//Library
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//Utils
import Colors from '../../Utils/Colors';
import CustomText from '../CustomText/CustomText';
import { connect } from 'react-redux';
import { heightPercentageToDP } from '../../Utils/ResponsiveUI';


const CountButton = ({ onPress, count, handleAddQuantity, handleRemoveQuantity, items, id, index }) => {
    const [item, setItem] = useState({})
    useEffect(() => {
        let item = items[index]
        setItem(item)
    }, [])

    return (
        <View style={styles.countButtonView}>
            {(item.addedQuantity === 0 || item.addedQuantity === undefined) && <TouchableOpacity onPress={onPress}>
                <Text style={styles.addText}>
                    ADD
                </Text>
            </TouchableOpacity>}
            {item.addedQuantity > 0 &&
                <View style={styles.activeView}>
                    <TouchableOpacity onPress={handleRemoveQuantity}>
                        <FontAwesomeIcon icon="minus" color={Colors.primary} />
                    </TouchableOpacity>
                    <CustomText type="bold" style={styles.countText}>
                        {item.addedQuantity}
                    </CustomText>
                    <TouchableOpacity onPress={handleAddQuantity}>
                        <FontAwesomeIcon icon="plus" color={Colors.primary} />
                    </TouchableOpacity>
                </View>}

        </View>
    )
}

const mapStateToProps = state => {
    return {
        count: state.product.count,
        items: state.product.items
    };
}

export default connect(mapStateToProps)(CountButton);

const styles = StyleSheet.create({
    countButtonView: {
        borderWidth: 1,
        borderColor: Colors.primary,
        width: "100%",
        borderRadius: 5,
        paddingVertical: 5,
        height: heightPercentageToDP(5)
    },
    addText: {
        color: Colors.primary,
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: "Roboto-Regular",
        textAlign: "center",
        textAlignVertical: "center"
    },
    activeView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    countText: {
        color: Colors.lightText
    }
})
