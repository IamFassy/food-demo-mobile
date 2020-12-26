//Custom text component for reusability

//Library
import React from 'react';
import { StyleSheet, Text } from 'react-native';
//Components
import Colors from '../../Utils/Colors';

const CustomText = (props) => {
    return (
        <Text style={[
            props.size === "heading" ? styles.headingText : props.size === "subHeading" ? styles.subHeadingText : styles.commonText,
            {
                color: Colors.textPrimary,
                fontFamily: "Roboto-Regular",
                fontWeight: props.type === "bold" ? "bold" : "normal",
                ...props.style
            }]}>
            {props.children}
        </Text>
    )
}

export default CustomText;

const styles = StyleSheet.create({
    commonText: {
        // fontFamily: "Roboto-Regular",
        fontSize: 16,
    },
    headingText: {
        // fontFamily: "Roboto-Medium",
        fontSize: 20,
        paddingVertical: 15
    },
    subHeadingText: {
        // fontFamily: "Roboto-Medium",
        fontSize: 18,
    }

})
