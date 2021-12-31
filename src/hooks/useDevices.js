import {useEffect, useState} from 'react';

const useDevices = (props) => {
    const {getDevices = () => {}, devices = []} = props;
    const [limit, setLimit] = useState(1);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    useEffect(() => {
        let isFetch = true;

        (() => {
            try {
                getDevices(limit, page, search);
            } catch (error) {}
        })();

        return () => {
            isFetch = false;
        };
    }, [limit, page, search]);

    const changeLimit = (value) => {
        setLimit(value);
    };

    const changePage = (value) => {
        setPage(value);
    };

    const changeSearch = (value) => {
        setSearch(value);
    };

    return {
        devices,
        limit,
        page,
        search,
        changeLimit,
        changePage,
        changeSearch,
    };
};

export default useDevices;
