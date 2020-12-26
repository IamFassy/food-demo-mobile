//Library
import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
//Components
import CustomText from '../../Components/CustomText/CustomText';

class Home extends Component {
    render() {
        return (
            <SafeAreaView>
                <View>
                    <CustomText type="heading">
                        Home
                   </CustomText>
                </View>
            </SafeAreaView>
        )
    }
}

export default Home;
