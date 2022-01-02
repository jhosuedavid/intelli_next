import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import {Color} from '../../../resources';

const Dashboard = () => (
    <View style={style.container}>
        <Text style={style.dashboard}>
            Bienvenidos
        </Text>
    </View>
);

const style = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
    },
    dashboard: {
        fontSize: 50,
        color: Color.white,
        fontWeight: "bold",
        textShadowColor: Color.green,
        textShadowOffset: {width: -3, height: 1},
        textShadowRadius: 8,
    },
});

export default Dashboard;
