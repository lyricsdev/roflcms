const state = {
    loginModal: false,
    registerModal: false,
    balanceModal: false,
    exchangeModal: false,
    bannedModal: false,
};

const getters = {
    loginModal: state => state.loginModal,
    registerModal: state => state.registerModal,
    balanceModal: state => state.balanceModal,
    exchangeModal: state => state.exchangeModal,
    bannedModal: state => state.bannedModal,
};

const actions = {
    ['setLoginModal']: ({commit, state}, newValue) => {
        commit('setLoginModal', newValue);
    },
    ['setRegisterModal']: ({commit, state}, newValue) => {
        commit('setRegisterModal', newValue);
    },
    ['setBalanceModal']: ({commit, state}, newValue) => {
        commit('setBalanceModal', newValue);
    },
    ['setExchangeModal']: ({commit, state}, newValue) => {
        commit('setExchangeModal', newValue);
    },
    ['setBannedModal']: ({commit, state}, newValue) => {
        commit('setBannedModal', newValue);
    },
};

const mutations = {
    ['setLoginModal'] (state, newValue) {
        state.loginModal = newValue;
    },
    ['setRegisterModal'] (state, newValue) {
        state.registerModal = newValue;
    },
    ['setBalanceModal'] (state, newValue) {
        state.balanceModal = newValue;
    },
    ['setExchangeModal'] (state, newValue) {
        state.exchangeModal = newValue;
    },
    ['setBannedModal'] (state, newValue) {
        state.bannedModal = newValue;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
