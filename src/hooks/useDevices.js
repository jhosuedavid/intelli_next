import {useEffect} from 'react';

const useDevices = (props) => {
    const {getDevices = () => {}, devices = []} = props;

    useEffect(() => {
        let isFetch = true;

        (() => {
            try {
                getDevices();
                isFetch = false;
            } catch (error) {}
        })();

        return () => {
            isFetch = false;
        };
    }, []);

    return {
        devices,
    };
};

export default useDevices;
