import React from 'react';
import {bool, func, any, string} from 'prop-types';
import {Modal as ModalRN} from 'react-native';

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
    isVisible: bool,
    hiddenModal: func,
    children: any,
    animationType: string,
};

Modal.defaultProps = {
    isVisible: false,
    hiddenModal: () => {},
    children: <></>,
    animationType: 'fade',
};

export default Modal;
