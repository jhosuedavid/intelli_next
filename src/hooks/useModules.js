import {useMemo} from 'react';

import {sortVersions} from '../utils';

const useModules = (props) => {
    const {modules = []} = props;

    const findModule = (moduleId) => {
        let m = null;

        modules.some((module) => {
            const validation = parseInt(module["id_module"]) === parseInt(moduleId);
            m = module;
            return validation;
        })

        return m;
    };

    const menuData = useMemo(() => {
        const data = {};

        modules.map((module) => {
            const paths = module.path.split(".");
            data[module.path] = findModule(paths[paths.length - 1]);
        });

       return data;
    }, [modules]);

    const v = useMemo(() => {
        const versions = [];

        modules.map((module) => {
            versions.push(module.path)
        });

        return sortVersions(versions);
    }, [modules]);

    const menu = useMemo(() => {
        const data = [];
        v.map((version) => {
            if (
                menuData[version]["setting_module_config"] &&
                menuData[version]["setting_module_config"]["route"] &&
                (
                    menuData[version].setting_module_config.route !== undefined ||
                    menuData[version].setting_module_config.route !== null
                )
            ) {
                data.push(menuData[version])
            }
        })

        return data;
    });

    return {
        menu,
    };
};

export default useModules;
