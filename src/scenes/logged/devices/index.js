import React from "react";
import {connect} from "react-redux";
import {Text, StyleSheet, View} from "react-native";

import useDevices from "../../../hooks/useDevices";
import {getDevices} from "../../../state/ducks/devices/actions";

const DevicesHoc = (props) => {
    const {devices} = useDevices(props);
    console.log('devices: ', devices);
    return <Devices />;
};

const Devices = () => (
    <View>
        <Text> hola como estas</Text>
    </View>
);

const style = StyleSheet.create({
    dashboard: {

    }
});

const mapStateToProps = (state) => ({
    ...state.devices,
});

const mapDispatchToProps = (dispatch) => ({
    getDevices: (payload) => dispatch(getDevices(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DevicesHoc);
