import {useEffect}from 'react';

const useSuperHero = (props) => {
    const {getSuperHeroes = (superHeroId) => {}, hero} = props;

    useEffect(() => {
        let isFetch = true;

        if (isFetch) {
            console.log('Hero: ', 1)
            getSuperHeroes(1);
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
