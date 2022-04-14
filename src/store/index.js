import { createStore } from "vuex";
import { auth } from "./auth.module";
import header from './header';

const store = createStore({
  modules: {
    auth,
    header,
  },
});

export default store;
