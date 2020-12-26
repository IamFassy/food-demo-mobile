//Library
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//Utils
import Colors from '../../Utils/Colors';


const CountButton = (props) => {
    return (
        <View style={styles.countButtonView}>
            <TouchableOpacity>
                <Text style={styles.addText}>
                    ADD
                </Text>
            </TouchableOpacity>

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
        paddingVertical: 7
    },
    addText: {
        color: Colors.primary,
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: "Roboto-Regular",
        textAlign: "center"
    }
})
