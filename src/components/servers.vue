<template>

<div class="monitor" style="width: 20rem;" v-for="item in JSON.parse(servers)" :key="item.id">
  <div class="monitor-body">
    <h5 class="card-title">DTM</h5>
    <img src="https://imgur.com/XizWKdq.png" class="card-img-top" alt="https://imgur.com/XizWKdq.png">
    <p class="monitor-text">Версия: 1.7.10</p>
    <p class="monitor-text">Иновационный проект, мы пиздец какие крутые, глядя на наш ахуенный сайт вы станете реальным Boss of the Gym, и это только начала нашего калла!</p>

  </div>
</div>
</template>

<script>
import api from '../services/api'

    export default {
        name: "servers",
          data() {
return {
     servers: null
    };
  },
 async mounted() {

    await this.getservers()

  },
  methods: {
 
  async getservers() {
    try {
        const response = await api.post('/getservers', {
        })
         return  this.servers = JSON.stringify(response.data)
        }catch(error) {
        }
    },
  },
    }
</script>

