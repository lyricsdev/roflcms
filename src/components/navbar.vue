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

        },
         data(){
            return {
                isLogged: false,
            }
        },
        watch:{

        }
    }
</script>

