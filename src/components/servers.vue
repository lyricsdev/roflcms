<template>
  <div class="monitor-body mb-3" style="width: 300px;" v-for="item in JSON.parse(servers)" :key="item.id">
    <h5 class="monitor-title">{{item.name}}</h5>
    <p class="monitor-title">Версия: 1.7.10</p>
    <div class="monitor-title" style="color: #000; margin-left: 12rem;font-size: 14px;">{{item.online + "/" + item.max}}</div>
    <div сlass="mt-3" style="background-color: #9966cc; height: 5px;"></div>
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

