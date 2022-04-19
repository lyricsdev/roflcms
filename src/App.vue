<template>

  <div id="app" class=''>
        <navigation-menu></navigation-menu>
    <div class="container">
      <router-view />

    </div>
          <div class="backdrop">
                    <div class="item circle"></div>
                    <div class="item circle"></div>
                    <div class="item circle"></div>
                    <!---->
                    <div class="item circle"></div>
                    <div class="item circle"></div>
                    <div class="item circle"></div>

                </div>
  </div>
</template>

<script>
import EventBus from "./common/EventBus";
import NavigationMenu from "./components/navbar.vue";
    import { mapGetters } from 'vuex';

export default {
  components: {NavigationMenu},
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_MODERATOR');
      }

      return false;
    },
                ...mapGetters(['isLogged', 'isLoaded'])

  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  },
  mounted() {
    EventBus.on("logout", () => {
      this.logOut();
    });
  },
  beforeUnmount() {
    EventBus.remove("logout");
  }
};
</script>
<style lang="scss">
@import "../assets/style.scss";
@import "../assets/modal.scss";


</style>
