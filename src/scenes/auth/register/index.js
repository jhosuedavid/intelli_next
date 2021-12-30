import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View} from "react-native";

import Input from "../../../components/commons/input";
import Button from "../../../components/commons/button";
import useRegister from "../../../hooks/useRegister";
import Br from "../../../components/commons/br";

const RegisterHoc = () => {
    const hook = useRegister();
    return <Register {...hook} />;
}

const Register = (props) => (
    <View style={style.containerFather}>
        <View style={style.container}>
            <Input
                placeholder="Ingresar su Nombre"
                value={props.firstName}
                onChange={props.changeFirstName}
            />
            <Br/>
            <Input
                placeholder="Ingrese su Apellido"
                value={props.lastName}
                onChange={props.changeLastName}
            />
            <Br/>
            <Input
                placeholder="Ingrese su Correo"
                value={props.email}
                onChange={props.changeEmail}
            />
            <Br/>
            <Input
                type="password"
                placeholder="Ingrese una contraseña"
                value={props.password}
                onChange={props.changePassword}
            />
            <Br/>
            <Input
                type="password"
                placeholder="Confirmar Contraseña"
                value={props.confirmPassword}
                onChange={props.changeConfirmPassword}
            />
            <Br/>
            <Button
                text="Registrarse"
                onClick={props.register}
                isActive={props.isValidForm}
            />
        </View>
    </View>
)

Register.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
    changeLastName: PropTypes.func,
    changeFirstName: PropTypes.func,
    changeEmail: PropTypes.func,
    changePassword: PropTypes.func,
    changeConfirmPassword: PropTypes.func,
    isValidForm: PropTypes.bool,
    register: PropTypes.func,
}

Register.defaultProps = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    changeLastName: () => {},
    changeFirstName: () => {},
    changeEmail: () => {},
    changePassword: () => {},
    changeConfirmPassword: () => {},
    isValidForm: false,
    register: () => {},
}

const style=  StyleSheet.create({
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
});

export default RegisterHoc;
