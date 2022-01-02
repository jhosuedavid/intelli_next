import React from 'react';
import {string, func} from 'prop-types';
import {TextInput, StyleSheet, View} from 'react-native';

const Input = (props) => (
    <View style={style.container}>

        <TextInput
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChange}
            style={style.input}
        />
    </View>
);

const style =  StyleSheet.create({
    container: {
        height: 44,
        width: "40%",
        border: "1px solid #949090 ",
        borderRadius: 8,

    },
    containerSmall: {
        margin: 17,
        width: 10,
        height: 10,
        backgroundColor: "#000000"
    },
    input: {
        fontSize: 12,
        padding: 13,
        border: "none"
    },
})

Input.propTypes = {
    placeholder: string,
    type: string,
    value: string,
    onChange: func,
};

Input.defaultProps = {
    placeholder: "",
    type: "text",
    value: "",
    onChange: () => {},
};

export default Input;
