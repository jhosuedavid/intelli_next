import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, View} from "react-native";

import useLogin from "../../../hooks/useLogin";
import Input from "../../../components/commons/input";
import Button from "../../../components/commons/button";
import Br from "../../../components/commons/br";

const LoginHoc = () => {
    const hook = useLogin();
    return <Login {...hook} />;
};

const Login = (props) => (
    <View style={style.containerFather}>
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
})

export default LoginHoc;
