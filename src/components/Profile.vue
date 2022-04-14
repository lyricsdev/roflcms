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
            <div class="viewer_dim" v-if="!flatSkin">
              <div id="skin_container"></div>
            </div>
          </div>
          <div>
            <h4>Скин</h4>

            <p class="mt-2">
              <a href="" class="btn_common" @click.prevent="uploadSkin">Загрузить</a>
              <a href="#" target="_blank" class="btn_common ml-1" @click.prevent="downloadFile('/skins/' + currentUser.username + '.png', currentUser.username + '_skin.png')">
                <i class="fas fa-arrow-alt-to-bottom"></i>
              </a>
              <a href="" class="btn_common ml-1" @click.prevent="deleteSkin">
                <i class="fas fa-trash-alt"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
        <input style="display: none;" id="skin_file" type="file" @change.prevent="uploadSkin($event)">
        <input style="display: none;" id="cloak_file" type="file" @change.prevent="uploadCloak($event)">
  </div>
  </div>


</template>

<script>
import * as skinview3d from "skinview3d";
import { saveAs } from 'file-saver';
import $ from "jquery";
import api from '../services/api'
import axios from "axios";
    import moment from "moment";
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
            show: true

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
              console.log(formData)

      }
      else $('#skin_file').click();
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
    deleteSkin(){
      this.skinLoading = true;
        let data = {
          type: 'skin',
            username: this.currentUser.username

        }
      api.post('skins/delete', {
       data
      }).then(response => {
        this.updateSkin();

        this.skinLoading = false;
      });
    },
    deleteCloak(){
      this.skinLoading = true;
      api.post('skins/delete', {
        type: 'cloak'
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
 async savePerson() {
 
  try {
    const response = await api.post('/skins/checkexist', {
      username: this.currentUser.username
    })
  return  this.status = response.data
  } catch(error) {
  }
},
 async  initSkin(){
      let element = document.getElementById("skin_container");
      let numberOfChildren = element.getElementsByTagName('*').length;
      if (numberOfChildren == 1) return;

      let path
      console.log(this.status)
      await  this.savePerson()
    console.log(this.status)

      if(this.status === true)
        path = '/skins/' + this.currentUser.username + '.png';
     else 
             path = '/skins/' + "default" + '.png';

      console.log(path)

      this.skinViewer = new skinview3d.SkinViewer({
        domElement: document.getElementById("skin_container"),
        width: 300,
        height: 320,
        skinUrl: path,
        capeUrl: '/cloaks/' + this.currentUser.username + '.png'
      });

      console.log("Init skin view");
      console.log(this.skinViewer);

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