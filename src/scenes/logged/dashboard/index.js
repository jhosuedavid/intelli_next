import React from "react";
import {connect} from "react-redux";
import {Text, StyleSheet, View} from "react-native";

const DashboardHoc = (props) => {
    console.log('Props: ', props);
    return <Dashboard />;
};

const Dashboard = () => (
    <View>
        <Text> hola como estas</Text>
    </View>
);

const style = StyleSheet.create({
    dashboard: {

    }
});

const mapStateToProps = (state) => ({
    ...state.auth,
    ...state.devices,
});

export default connect(mapStateToProps)(DashboardHoc);
