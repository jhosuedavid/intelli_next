import React from 'react';
import {connect} from 'react-redux';
import {Text, StyleSheet, View} from 'react-native';

import Input from '../../../components/commons/input';
import useDevices from '../../../hooks/useDevices';
import Image from '../../../components/commons/image';
import Button from '../../../components/commons/button';
import Br from '../../../components/commons/br';
import {Color} from '../../../resources';
import {getDevices} from '../../../state/ducks/devices/actions';

const DevicesHoc = (props) => {
    const hook = useDevices(props);
    return <Devices {...hook} />;
};

const Devices = (props) => (
    <View>
        <View style={style.input}>
            <Input
                placeholder="Busqueda"
                value={props.search}
                onChange={props.changeSearch}
            /> <Br/>
            <Button
                isActive
                text="Cargar mas"
                onClick={props.increaseLimit}
            />
        </View>
        <View style={style.container}>
            {props.devices.map((device) => (
                <View style={style.fhaterContainer}>
                    <Image style={style.image} source={{uri: device.photo}} />
                <View style={style.dashboard} key={device.id_device}>
                    <Text style={style.textTitule}> Dispositivos</Text>
                    <Text style={style.text}>
                        Id: {device.id_device}
                    </Text>
                <Text  style={style.text}>
                    Nombre: {device.device_name}
                </Text>
                <Text  style={style.text}>
                    Id del modelo: {device.id_device_model}
                </Text>
                <Text  style={style.text}>
                    Modelo: {device.device_model}
                </Text>
                    </View>
                </View>
            ))}
        </View>
    </View>
);

const style = StyleSheet.create({
    dashboard: {
        marginLeft: "5%",
        marginTop: "3%" ,
        padding: 5,
    },
    text: {
        fontWeight: 'bold',
        padding: 3,
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: "center",
    },
    fhaterContainer: {
        flexDirection: 'row',
        width: 400,
        height: 200,
        margin: 10,
        backgroundColor: Color.green,
        borderRadius: 10,
    },
    textTitule: {
        fontSize: 25,
        color: Color.white,
        fontWeight: 'bold',
        textShadowColor: Color.black,
        textShadowOffset: {width: -2, height: 2},
        textShadowRadius: 6,
        paddingBottom: 10,
    },
    image: {
        width: 150,
        height: 200,
    },
    input: {
        alignItems: 'center',
        marginTop: 20,
    },
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
