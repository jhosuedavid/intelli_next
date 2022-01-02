import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {StyleSheet, View, Text} from "react-native";

import useLogin from "../../../hooks/useLogin";
import Input from "../../../components/commons/input";
import Button from "../../../components/commons/button";
import Br from "../../../components/commons/br";
import {login} from "../../../state/ducks/auth/actions";

const LoginHoc = (props) => {
    const hook = useLogin(props);
    return <Login {...hook} />;
};

const Login = (props) => (
    <View style={style.containerFather}>
        {props.error && (
            <View style={style.containerError} >
                <Text style={style.errors}>Error: {props.error}</Text>
            </View>
        )}
        <View style={style.container}>
            <Input
                placeholder="Ingrese Correo"
                value={props.email}
                onChange={props.changeEmail}
            />
            <Br/>
            <Input
                type="password"
                placeholder="Ingrese Contraseña"
                value={props.password}
                onChange={props.changePassword}
            />
            <Br/>
            <Button
                text="Iniciar sesion"
                onClick={props.signIn}
                isActive={props.isValidForm}
            />
        </View>
    </View>
);

Login.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    isValidForm: PropTypes.bool,
    changeEmail: PropTypes.func,
    changePassword: PropTypes.func,
    signIn: PropTypes.func,
};

Login.defaultProps = {
    email: '',
    password: '',
    isValidForm: false,
    changeEmail: () => {},
    changePassword:  () => {},
    signIn:  () => {},
};

const style = StyleSheet.create({
    container:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },
    containerFather:{
        position:"fixed",
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    containerError:{
      padding:10,
    },
    errors:{
    color: "#f00",
        fontSize: 20,
    }
});

const mapStateToProps = (state) => ({
    ...state.auth,
});

const mapDispatchToProps = (dispatch) => ({
    login: (payload) => dispatch(login(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginHoc);
