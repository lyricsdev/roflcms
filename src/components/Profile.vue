<template>
  <div class="container">
<div class="row">
    <div class="col-xl-12 col-md-12 cabinet mt-5">
      <div class="col-xl-1 col-md-12 cabinet-navbar">
      <button @click="handleClick" name= "Информация" href="#" type="button" class="cabinet-btn mb-3 far fa-user-tie">
      
      </button>

      <button @click="handleClick" name= "Настройки" href="#" type="button" class="cabinet-btn mb-3 far fa-hammer"></button>
      <button  @click="handleClick" name= "Магазин" href="#" type="button" class="cabinet-btn mb-3 far fa-trash"></button>
      <button @click="handleClick" name= "Безопасность" href="#" type="button" class="cabinet-btn mb-3 far fa-shield-check"></button>
      
      </div>
      <div class="col-xl-4 col-md-12 cabinet-skinviewer">
        <div id="skin_container" v-show="buttons.first == true">
        </div>
        <p v-show="buttons.first == true" style="color: #fff;display: contents;">Всем игрокам доступна загрузка скинов в классическом 64x64 разрешении.</p>
        <input style="display: none;" id="skin_file" accept=".png" type="file" @change.prevent="uploadSkin($event)">

        <button v-show="buttons.first == true" id="skin_file" type="button" class="cabinet-btnup" @click.prevent="uploadSkin">Загрузить скин</button>
        <br>
        <p v-show="buttons.first == true" style="color: #fff;display: contents;">Всем игрокам доступна загрузка скинов в классическом 64x64 разрешении.</p>
        <input  style="display: none;" id="cloak_file" accept=".png"  type="file" @change.prevent="uploadCloak($event)">

        <button v-show="buttons.first == true" id="cloak_file" type="button"  class="cabinet-btnup" @click.prevent="uploadCloak">Загрузить Плащ</button>

      <div v-if="buttons.first != true">
         <img v-for="item in shop" :key="item.id" v-bind:src="item.icon">
      </div>

      </div>
       
            <div class="col-xl-3 col-md-12 cabinet-info">
               <div class="cabinet-text mt-4" style="color:#fff;" v-for=" (item ,i) in PlayerInfo" :key="i">{{i + " : " + item}}</div>
      
      </div>
    </div>
  </div>

</div>
       
</template>
<script>
import * as skinview3d from "skinview3d";
import { saveAs } from 'file-saver';
import $ from "jquery";
import api from '../services/api'
export default {
  name: 'Profile',
  data(){
    return {
      skinViewer: null,
      walk: false,
      rotate: false,
      run: false,
      flatSkin: false,
      skinLoading: false,
      status: false ,
      capestatus: false,
      servers: null,
      buttons: {
        first: true,
        second: false
      },
      PlayerInfo: null,
      shop: null
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  async mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
    this.$nextTick(() => {
      this.initSkin();
      });

      await this.getservers()

      this.PlayerInfo = {
        "Никнейм" : this.currentUser.username,
        "Баланс": this.currentUser.balance,
        "Почта": this.currentUser.email,
      }
      await this.getitemsfromshop()

  },
  watch: {
  '$route': function () {
    this.$nextTick(() => {
      this.initSkin();
      });
     
    },
  },
  methods: {
    downloadFile(url, name){
      saveAs(url, name);
    },
      async handleClick(e) {
      var names = {
        player: 'Информация',
        settings: 'Настройки',
        Shop: 'Магазин',
        Security: 'Безопасность',
      }
        if(e.target.name == 'Информация')
        {


          this.buttons.first = true;
          this.buttons.second = !this.buttons.second;
        }
        if(e.target.name == 'Настройки')
        {

          this.buttons.first = false;
          this.buttons.second = !this.buttons.second;
        }
    },
    uploadSkin(event){
      console.log(event.target.id)
      if (event.target.files) 
      {
        var formData = new FormData();
        formData.append("type", 'skin');
        formData.append("body", this.currentUser.username);
        formData.append("file", event.target.files[0]);
        this.upload(formData);

      }
      else $('#skin_file').click();
    },
    uploadCloak(event){
            console.log(event.target.id)

      if (event.target.files) {
        var formData = new FormData();
        formData.append("body", this.currentUser.username);
        formData.append("file", event.target.files[0]);
        this.upload1(formData);
        }
      else $('#cloak_file').click();
    },
    updateSkin(){
      this.skinViewer.skinUrl = this.skinViewer.skinUrl
      this.skinViewer.capeUrl = this.skinViewer.capeUrl
    },
    upload(formData){
      this.skinLoading = true;
      api.post('skins/upload', formData, {headers: {'Content-Type': 'multipart/form-data'}})
          .then(response => {
            this.updateSkin();
            this.skinLoading = false;
          });
    },
    upload1(formData){
      this.skinLoading = true;
      api.post('cloaks/upload', formData, {headers: {'Content-Type': 'multipart/form-data'}})
          .then(response => {
            this.updateSkin();
            this.skinLoading = false;
          });
    },
    deleteSkin(){
      this.skinLoading = true;
      api.post('skins/delete', {
        username: this.currentUser.username
      }).then(response => {
        this.updateSkin();

        this.skinLoading = false;
      });
    },
    deleteCloak(){
      this.skinLoading = true;
      api.post('cloaks/delete', {
        username: this.currentUser.username
      }).then(response => {
        this.updateSkin();
        this.skinLoading = false;
      });
    },
    testFunction()
    {
      return this.status = true
    },
    testFunction1()
    {
      return this.status = false
    },
    async getitemsfromshop() {
    try {
        const response = await api.post('/getactiveshop', {
        })
         return  this.shop = response.data
        }catch(error) {
        }
    },
     async checkskin() {
    try {
        const response = await api.post('/skins/checkexist', {
        username: this.currentUser.username
        })
         return  this.status = response.data
        }catch(error) {
        }
    },
    async checkcloak() {
    try {
        const response = await api.post('/cloaks/checkexist', {
        username: this.currentUser.username
        })
         return  this.capestatus = response.data
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
    async initSkin(){
      if(this.buttons.first == true)
      {
        let element = document.getElementById("skin_container");
        let numberOfChildren = element.getElementsByTagName('*').length;
        if (numberOfChildren == 1) return;

        let cape,skin
        await this.checkskin()
        await this.checkcloak()

        if(this.status === true) {
          skin = '/skins/' + this.currentUser.username + '.png'
        } else {
          skin = '/skins/' + "default" + '.png';
        }
        if(this.capestatus === true) cape = '/cloaks/' + this.currentUser.username + '.png'; else cape = ""

          
        this.skinViewer = new skinview3d.SkinViewer({
          domElement: document.getElementById("skin_container"),
          width: 340,
          height: 360,
          skinUrl: skin,
          capeUrl: cape
        });
        let control = skinview3d.createOrbitControls(this.skinViewer);
                control.enableRotate = true;
                control.enableZoom = false;
                control.enablePan = false;
      }
    },
  }
};
</script>
<style scoped>

</style>