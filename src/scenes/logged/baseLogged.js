import React from 'react';
import {View} from 'react-native';

import Button from '../../components/commons/button';
import Menu from '../../components/menu';
import Modal from '../../components/commons/modal';
import useModal from '../../hooks/useModal';

const BaseLoggedHoc = (props) => {
    const hook = useModal();
    return <BaseLogged {...hook} {...props} />;
};

const BaseLogged = (props) => (
    <View>
        <Modal
            isVisible={props.isVisible}
            hiddenModal={props.hiddenModal}
        >
            <Menu />
        </Modal>
        <Button
            isActive
            text="Menu"
            onClick={props.showModal}
        />
        {props.children}
    </View>
);

export default BaseLoggedHoc;
