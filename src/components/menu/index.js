import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, Text, ScrollView, Dimensions} from 'react-native';

import useModules from '../../hooks/useModules';
import useWindowSize from '../../hooks/useWindows';
import {Color} from '../../resources';

const MenuHook = (props) => {
    useWindowSize();
    const hook = useModules(props);
    return <Menu {...hook} />;
};

const Menu = (props) => (
    <ScrollView style={{backgroundColor: Color.white}}>
        <TouchableOpacity
            style={{paddingLeft: 15}}
            onPress={() => {
                window.location.href = "/superhero"
            }}
        >
            <Text>SUPER HERO</Text>
        </TouchableOpacity>
        {
            props.menu
                .filter((item) => {
                    const isMobile = Dimensions.get('window').width <= 600;
                    return isMobile ? item.is_render_mobile.toString() === '1' : item.is_render.toString() === '1';
                })
                .map((item) => (
                <TouchableOpacity
                    key={item.id_module}
                    style={{paddingLeft: item.path.split('.').length * 15}}
                    onPress={() => {
                        window.location.href = `/${item.setting_module_config.route}`
                    }}
                >
                    <Text>{item.module}</Text>
                </TouchableOpacity>
            ))
        }
    </ScrollView>
);

const mapStateToProps = (state) => ({
    ...state.modules,
});

export default connect(mapStateToProps)(MenuHook);

