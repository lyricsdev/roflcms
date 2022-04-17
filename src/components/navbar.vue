<template>
   <nav>
        <div class="wrapper">
             <div class="nav_menu">
                <ul class="d-none d-lg-block">
                    <li v-for="item in menu"  v-bind:key="item">
                        <router-link :to="item.to.name" class="link">{{ item.title }}</router-link>

                        <div v-if="item.cols">
                            <span class="link">{{ item.title}}</span>
                        </div>

                        <div v-if="item.child">
                            <span class="link">{{ item.title }}</span>

                        </div>
                    </li>
                </ul>
                <ul class="d-none d-lg-block" v-if="!this.isLogged">
                    <li class="d-lg-none d-xl-inline-block">
                        <a href="#" id="goToLogin" class="link" @click.prevent="openLoginModal">Вход на сайт</a>
                    </li>
                    <li>
                        <a href="#" id="goToReg" class="btn_common primary" @click.prevent="openRegisterModal">Регистрация</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "NavigationMenu",
        computed:{
                currentUser() {
                   return this.$store.state.auth.user;
                    },
            ...mapGetters(['menu']),
            
        },
        methods:{
            openLoginModal(){
                this.$store.dispatch('setLoginModal', true);
            }
        },
         data(){
            return {
                isLogged: true,
            }
        },
        watch:{

        }
    }
</script>

