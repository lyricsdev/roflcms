const state = {
    menu: [
        {
            title: 'Главная страница',
            to: {name: ''}
        },
        {
            title: 'Наши сервера',
            to: {name: 'home'}

        },
        {
            title: 'Помощь',
            to: {name: 'home'}

        },
        {
            title: 'Магазин блоков',
            class: 'shop',
            to: {name: 'home'}
        },
        {
            title: 'Кабинет',
            to: {name: 'profile'}
        }
    ]
};

const getters = {
    menu: state => state.menu,
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}

