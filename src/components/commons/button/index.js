import React from "react";
import PropTypes from "prop-types";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

import {Color} from '../../../resources';

const Button = (props) => (
    <TouchableOpacity
        onPress={
            props.isActive ?
                props.onClick :
                null
        }
        style={
            props.isActive ?
                styles.active_button :
                styles.deactive_button
        }
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    active_button: {
        backgroundColor: Color.blue,
        color: Color.white,
        padding: 7,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 7,
        display: 'inline-block',
    },
    deactive_button: {
        backgroundColor: Color.gray,
        color: Color.white,
        padding: 7,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 7,
        display: 'inline-block',
    },
    text: {
        color: Color.white,
    },
});

Button.propTypes = {
    text: PropTypes.string,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    text: "",
    isActive: false,
    onClick: () => {},
};

export default Button;
