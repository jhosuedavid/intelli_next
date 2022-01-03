const initialState = {
    auth: {
        error: '',
        user: {},
    },
    devices: {
        devices: [],
        count: 0,
    },
    modules: {
        modules: [],
    },
    superHero: {
        hero: {
            powerstats: {
                combat: "",
                durability: "",
                intelligence: "",
                power: "",
                speed: "",
                strength: "",
            },
            name: '',
            image: {
                uri: '',
            },
        },
    },
};

export default initialState;
