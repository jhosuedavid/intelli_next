import {useEffect, useState} from 'react';

const useDevices = (props) => {
    const {getDevices = () => {}, devices = []} = props;
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    useEffect(() => {
        let isFetch = true;

        if (isFetch) {
            getDevices(limit, page, search);
        }

        return () => {
            isFetch = false;
        };
    }, [limit, page, search]);

    const changeSearch = (value) => {
        setSearch(value);
    };

    const increaseLimit = () => {
        setLimit(limit + 2);
    };

    return {
        devices,
        limit,
        page,
        search,
        changeSearch,
        increaseLimit,
    };
};

export default useDevices;
