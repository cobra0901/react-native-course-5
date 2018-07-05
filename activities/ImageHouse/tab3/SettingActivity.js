import React, { Component } from 'react';

import { StyleSheet, View, Animated, Image, Easing } from 'react-native';

export default class App extends Component<{}> {

    constructor () {

        super()

        this.RotateValueHolder = new Animated.Value(0);

    }

    componentDidMount() {

        this.StartImageRotateFunction();

    }

    StartImageRotateFunction () {

        this.RotateValueHolder.setValue(0)

        Animated.timing(
            this.RotateValueHolder,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear
            }
        ).start(() => this.StartImageRotateFunction())

    }
    render() {

        const RotateData = this.RotateValueHolder.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        return (
            <View style={styles.container}>

                <Animated.Image
                    style={{
                        width: 250,
                        height: 230,
                        transform: [{rotate: RotateData}] }}
                    source={{uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/Butterfly.png'}} />

            </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});