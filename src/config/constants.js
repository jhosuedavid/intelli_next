export const ENDPOINTS = {
    auth: {
        login: {
            url: '/login',
            method: 'post',
        },
    },
    devices: {
        get: {
            url: '/devices',
            method: 'get',
        },
    },
};

export const SUPER_HERO_ENDPOINTS = {
    heroes: {
        get: {
            url: '/:id',
            method: 'get',
        },
        work: {
            url: '/:id/work',
            method: 'get',
        },
    },
};
