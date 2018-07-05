
import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation'

import HomeActivity from './activities/ImageHouse/tab3/HomeActivity'
import AboutActivity from './activities/ImageHouse/tab3/AboutActivity'
import SettingActivity from './activities/ImageHouse/tab3/SettingActivity'

class HamburgerIcon extends Component {

    toggleDrawer=()=>{

        console.log(this.props.navigationProps);

        this.props.navigationProps.toggleDrawer();

    }

    render() {

        return (

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >

                    <Image
                        source={{uri : 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png'}}
                        style={{ width: 25, height: 25, marginLeft: 5}}
                    />

                </TouchableOpacity>
            </View>

        );
    }
}

const HomeActivity_StackNavigator = StackNavigator({
    First: {
        screen: HomeActivity,
        navigationOptions: ({ navigation }) => ({
            title: 'Home Activity',
            headerLeft : <HamburgerIcon navigationProps={ navigation }/>,

            headerStyle: {
                backgroundColor: '#FF9800'
            },
            headerTintColor: '#fff',
        })
    },
});

const AboutActivity_StackNavigator = StackNavigator({
    Second: {
        screen: AboutActivity,
        navigationOptions: ({ navigation }) => ({
            title: 'About Activity',
            headerLeft : <HamburgerIcon navigationProps={ navigation }/>,

            headerStyle: {
                backgroundColor: '#FF9800'
            },
            headerTintColor: '#fff',
        })
    },
});

const SettingActivity_StackNavigator = StackNavigator({
    Third: {
        screen: SettingActivity,
        navigationOptions: ({ navigation }) => ({
            title: 'Setting Activity',
            headerLeft : <HamburgerIcon navigationProps={ navigation }/>,

            headerStyle: {
                backgroundColor: '#FF9800'
            },
            headerTintColor: '#fff',
        })
    },
});

export default MyDrawerNavigator = DrawerNavigator({
    Home: {
        screen: HomeActivity_StackNavigator
    },

    About: {
        screen: AboutActivity_StackNavigator
    },

    Setting: {
        screen: SettingActivity_StackNavigator
    }
});
