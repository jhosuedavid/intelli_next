import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, Text, ScrollView} from 'react-native';

import useModules from '../../hooks/useModules';
import {Color} from '../../resources';

const MenuHook = (props) => {
    const hook = useModules(props);
    console.log(hook);
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
            props.menu.map((item) => (
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

