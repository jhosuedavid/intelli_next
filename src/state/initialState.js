const initialState = {
    auth: {
        error: '',
        user: {},
    },
    devices: {
        devices: [],
        count: 0,
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
