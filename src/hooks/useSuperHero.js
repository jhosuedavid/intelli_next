import {useEffect} from 'react';

const useSuperHero = (props) => {
    const {getSuperHeroes = () => {}, hero} = props;

    useEffect(() => {
        let isFetch = true;

        if (isFetch) {
            getSuperHeroes(1)
        }

        return () => {
            isFetch = false;
        };
    }, [])

    return {
        hero,
    };
};

export default  useSuperHero;
