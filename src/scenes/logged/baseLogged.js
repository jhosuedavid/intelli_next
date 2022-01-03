import React from 'react';
import {connect} from 'react-redux';
import {View, ScrollView} from 'react-native';

import Button from '../../components/commons/button';
import Menu from '../../components/menu';
import Modal from '../../components/commons/modal';
import useModal from '../../hooks/useModal';
import {sessionClose} from '../../state/ducks/auth/actions';

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
            <ScrollView>
                <View style={{width: 65}}>
                    <Button
                        isActive
                        text="Cerrar"
                        onClick={props.hiddenModal}
                    />
                </View>
                <Menu/>
            </ScrollView>
        </Modal>
        <View style={{width:"100%", flexDirection: "row", justifyContent: "space-between"}}>
        <View style={{width: 65}}>
            <Button
                isActive
                text="Menu"
                onClick={props.showModal}
            />
        </View>
        <View style={{width: 120}}>
            <Button
                isActive
                text="Cerrar sesion"
                onClick={props.sessionClose}
            />
        </View>
        </View>
        {props.children}
    </View>
);

const mapDispatchToProps = (dispatch) => ({
    sessionClose: () => dispatch(sessionClose())
});

export default connect(
    null,
    mapDispatchToProps
)(BaseLoggedHoc);
