//Custom text component for reusability

//Library
import React from 'react';
import { StyleSheet, Text } from 'react-native';
//Components
import Colors from '../../Utils/Colors';

const CustomText = (props) => {
    return (
        <Text style={[
            props.type === "heading" ? styles.headingText : styles.commonText,
            {
                color: Colors.textPrimary,
                ...props.style
            }]}>
            {props.children}
        </Text>
    )
}

export default CustomText;

const styles = StyleSheet.create({
    commonText: {
        fontFamily: "Roboto-Regular",
        fontSize: 16
    },
    headingText: {
        fontFamily: "Roboto-Medium",
        fontSize: 18
    }

})
