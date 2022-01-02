import React from "react";
import {connect} from "react-redux";
import {Text, StyleSheet, View} from "react-native";

const DashboardHoc = (props) => {
    console.log('Props: ', props);
    return <Dashboard />;
};

const Dashboard = () => (
    <View style={style.container}>
        <Text style={style.dashboard}> Bienvenidos </Text>
    </View>
);

const style = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center"
    },
    dashboard: {
        fontSize: 50,
        color: "#ffffff",
        fontWeight: "bold",
        textShadowColor: 'rgb(45,204,125)',
        textShadowOffset: {width: -3, height: 1},
        textShadowRadius: 8
    }
});

const mapStateToProps = (state) => ({
    ...state.auth,
    ...state.devices,
});

export default connect(mapStateToProps)(DashboardHoc);
