import React from "react";
import {Modal as ModalRN} from "react-native";
import {bool, func, any, string} from "prop-types";

const Modal = (props) => (
    <ModalRN
        animationType={props.animationType}
        transparent={true}
        visible={props.isVisible}
        onRequestClose={props.hiddenModal}
    >
        {props.children}
    </ModalRN>
);

Modal.propTypes = {
    isvisible: bool,
    hiddenModal: func,
    children: any,
    animationType: string,
};

Modal.defaultProps = {
    isvisible: false,
    hiddenModal: () => {},
    children: <></>,
    animationType: 'fade',
};

export default Modal;
