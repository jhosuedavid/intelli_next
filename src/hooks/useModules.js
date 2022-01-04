import {useMemo} from 'react';

import {sortVersions} from '../utils';

const useModules = (props) => {
    const {modules = []} = props;

    const findModule = (moduleId) => {
        let module = null;

        modules.some((moduleItem) => {
            const validation = parseInt(moduleItem["id_module"]) === parseInt(moduleId);
            module = moduleItem;
            return validation;
        })

        return module;
    };

    const menuData = useMemo(() => {
        const data = {};

        modules.map((module) => {
            const paths = module.path.split(".");
            data[module.path] = findModule(paths[paths.length - 1]);
        });

       return data;
    }, [modules]);

    const versionsData = useMemo(() => {
        const versions = [];

        modules.map((module) => {
            versions.push(module.path)
        });

        return sortVersions(versions);
    }, [modules]);

    const menu = useMemo(() => {
        const data = [];

        versionsData.map((version) => {
            if (
                menuData[version].hasOwnProperty("setting_module_config") &&
                menuData[version].setting_module_config.hasOwnProperty("route") &&
                (
                    menuData[version].setting_module_config.route !== undefined &&
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
