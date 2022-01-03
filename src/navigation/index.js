import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Login from '../scenes/auth/login';
import Dashboard from '../scenes/logged/dashboard';
import Devices from '../scenes/logged/devices';
import SuperHero from '../scenes/logged/superHero';
import BaseLogged from '../scenes/logged/baseLogged';

const ModuleComponent = (props) => (
    <View style={{padding: 10}}>
        <Text>El modulo es: {props.name}</Text>
    </View>
);

const NavigationHoc = (props) => {
    if (props.user["token"]) {
        return <LoggedNavigation {...props} />;
    }

    return <AuthNavigation />;
};

const AuthNavigation = () => (
    <Router>
        <Routes>
            <Route
                path="/login"
                element={<Login/>}
            />
        </Routes>
    </Router>
);

const LoggedNavigation = (props) => (
    <Router>
        <Routes>
            <Route
                path="/dashboard"
                element={
                    <BaseLogged>
                        <Dashboard/>
                    </BaseLogged>
                }
            />
            <Route
                path="/superhero"
                element={
                    <BaseLogged>
                        <SuperHero/>
                    </BaseLogged>
                }
            />
            {
                props.modules.map((module) => (
                    <Route
                        key={module.id_module}
                        path={`/${module.setting_module_config.route}`}
                        element={
                            <BaseLogged>
                                {
                                    module.module === 'DEVICE' || module.module === 'DEVICE_GROUP_INTERCONECT' ?
                                        <Devices/> :
                                        module.module === 'DASHBOARD_PRINCIPAL' ?
                                            <Dashboard/> :
                                            <ModuleComponent name={module.module}/>
                                }
                            </BaseLogged>
                        }
                    />
                ))
            }
        </Routes>
    </Router>
);

const mapStateToProps = (state) => ({
    ...state.auth,
    ...state.modules,
});

export default connect(mapStateToProps)(NavigationHoc);
