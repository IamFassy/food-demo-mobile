//Library
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//Utils
import Colors from '../../Utils/Colors';
import CustomText from '../CustomText/CustomText';


const CountButton = ({ onPress, count }) => {
    return (
        <View style={styles.countButtonView}>
            {count === 0 && <TouchableOpacity onPress={onPress}>
                <Text style={styles.addText}>
                    ADD
                </Text>
            </TouchableOpacity>}
            {count > 0 &&
                <View style={styles.activeView}>
                    <TouchableOpacity onPress={onPress}>
                        <FontAwesomeIcon icon="minus" color={Colors.primary} />
                    </TouchableOpacity>
                    <CustomText type="bold" style={styles.countText}>
                        {count}
                    </CustomText>
                    <TouchableOpacity onPress={onPress}>
                        <FontAwesomeIcon icon="plus" color={Colors.primary} />
                    </TouchableOpacity>
                </View>}

        </View>
    )
}

export default CountButton;

const styles = StyleSheet.create({
    countButtonView: {
        borderWidth: 1,
        borderColor: Colors.primary,
        width: "100%",
        borderRadius: 5,
        paddingVertical: 5
    },
    addText: {
        color: Colors.primary,
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: "Roboto-Regular",
        textAlign: "center"
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
