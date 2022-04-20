<template>
  <div class="container">
    <header>
      <h3>{{ content }}</h3>
    </header>
              <servers></servers>
    <div class="card mb-3" style="max-width: 1000px;" v-for="item in JSON.parse(news)" :key="item.id">
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text">{{ item.content }}</p>
        <p class="card-text"><small class="text-muted">Последнее обновление {{ item.createdAt }} мин. назад</small></p>
        <button href="#" type="button" id="newss" class="btn btn-primary">Подробнее</button>
      </div>
    </div>
</div>
</div>
</template>

<script>
import UserService from "../services/user.service";
import api from '../services/api'
import $ from "jquery";
import  servers  from "./servers.vue"

export default {
    components: {servers},

  name: "Home",
  data() {
return {
     news: null,
     servers: null
    };
  },
 async mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
    await this.getnews()
    await this.getservers()
    
  },
  methods: {
  async getnews() {
    try {
        const response = await api.post('/getnews', {
        })
         console.log(JSON.stringify(response.data))
         return  this.news = JSON.stringify(response.data)
         
        }catch(error) {
        }
    },
  async getservers() {
    try {
        const response = await api.post('/getservers', {
        })
         return  this.servers = JSON.stringify(response.data)
        }catch(error) {
        }
    },
  },
};
</script>
