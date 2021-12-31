import React from "react";
import {connect} from "react-redux";
import {Text, StyleSheet, View} from "react-native";

import Input from "../../../components/commons/input";
import useDevices from "../../../hooks/useDevices";
import {getDevices} from "../../../state/ducks/devices/actions";

const DevicesHoc = (props) => {
    const hook = useDevices(props);
    return <Devices {...hook} />;
};

const Devices = (props) => (
    <View>
        <Input
            placeholder="limite"
            value={props.limit}
            onChange={props.changeLimit}
        />
        <Input
            placeholder="Pagina"
            value={props.page}
            onChange={props.changePage}
        />
        <Input
            placeholder="Busqueda"
            value={props.search}
            onChange={props.changeSearch}
        />
        {props.devices.map((device) => (
            <View style={{display: 'flex', flexDirection: 'row'}} key={device.id_device}>
                <Text>{device.id_device}   {device.device_name}</Text>
            </View>
        ))}
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
    getDevices: (limit, page, search) => dispatch(getDevices(limit, page, search)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DevicesHoc);
