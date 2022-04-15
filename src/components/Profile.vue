<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.username}}</strong> Profile

      </h3>
    </header>
    <p>
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
    </p>
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
  <div class="row character">
    <div :class="'col-12 col-lg-6 ' + (skinLoading ? 'unload' : '')">
      <div class="section">
        <h3>Внешний вид персонажа</h3>
        <p>Хотите подчеркнуть свою индивидуальность и выглядеть по-настоящему круто? Персонализируйте Вашего игрового персонажа и загрузите скин всего в два клика!</p>
      </div>
            <div class="section preview">
           <div class="row">
                    <div class="col-12 col-sm viewer">
                        <div class="viewer_dim">
                            <div id="skin_container"></div>
                        </div>
                    </div>
                    <div class="col-12 col-sm mt-4 mt-sm-0">
                        <div>
                            <h4>Скин</h4>
                            <p>Вы можете загрузить любой скин в высоком HD качестве!</p>
                            <p class="mt-2">
                                <a href="" class="btn_common" @click.prevent="uploadSkin">Загрузить</a>
                                <a href="#" target="_blank" class="btn_common ml-1" @click.prevent="downloadFile('/skins/' + user.login + '.png', user.login + '_skin.png')">
                                    <i class="fas fa-arrow-alt-to-bottom"></i>
                                </a>
                                <a href="" class="btn_common ml-1" @click.prevent="deleteSkin">
                                    <i class="fas fa-trash-alt"></i>
                                </a>
                            </p>
                        </div>
                        <div class="mt-5">
                            <h4>Плащ</h4>

                            <div>
                                <p>Загрузите плащ в высоком качестве HD разрешения прямо сейчас!</p>
                                <p class="mt-2">
                                    <a href="" class="btn_common" @click.prevent="uploadCloak">Загрузить</a>
                                    <a href="#" target="_blank" class="btn_common ml-1" @click.prevent="downloadFile('/cloaks/' + user.login + '.png', user.login + '_cloak.png')">
                                        <i class="fas fa-arrow-alt-to-bottom"></i>
                                    </a>
                                    <a href="" class="btn_common ml-1" @click.prevent="deleteCloak">
                                        <i class="fas fa-trash-alt"></i>
                                    </a>
                                </p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        <input style="display: none;" id="skin_file" type="file" @change.prevent="uploadSkin($event)">
        <input style="display: none;" id="cloak_file" type="file" @change.prevent="uploadCloak($event)">
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
      capestatus: false

    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
    this.$nextTick(() => {
      this.initSkin();
      });
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
    uploadSkin(event){
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
         console.log(response)
        }catch(error) {
        }
    },
    async initSkin(){
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
          width: 300,
          height: 320,
          skinUrl: skin,
          capeUrl: cape
        });
        let control = skinview3d.createOrbitControls(this.skinViewer);
                control.enableRotate = true;
                control.enableZoom = false;
                control.enablePan = false;
    },
  }
};
</script>
<style scoped>

</style>