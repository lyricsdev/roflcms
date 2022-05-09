<template>
   <nav class="header_menu">
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
                        
                <ul class="d-none d-lg-block" v-if="this.IsAdmin">
                    <li class="d-lg-none d-xl-inline-block">
                        <a href="#" id="goToLogin" class="link">admin panel</a>
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
                
                <div class="btn-group">
                <button class="btni btn-github animate-pulse"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> EdgeCMS</button>
                <!-- <button class="btni btn-start-game animate-pulse">Начать игру</button> -->
					<button class="btni button button--mimas animate-pulse"><span>Начать игру</span></button>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
    import {mapActions, mapGetters} from 'vuex';
    import UserService from '../services/user.service';


    export default {
        
        name: "NavigationMenu",
        computed:{
                currentUser() {
                   return this.$store.state.auth.user;
                    },
            ...mapGetters(['menu']),
            
        },
        mounted() {
            UserService.getadminrole().then(
                response => {
                    this.IsAdmin = response.data;
                },
                error => {
                    this.content = "hui";
                }
                );
                
        },
        methods:{
            openLoginModal(){
                this.$store.dispatch('setLoginModal', true);
            }
        },
         data(){
            return {
                isLogged: true,
                IsAdmin: false,
                content: ''

            }
        },
        watch:{

        }
    }
</script>

