<template>
  <div class="alert" v-if="alert.error == true"> {{ alert.message}}</div>
  <form class="label-search" @submit.prevent="verif">
    <ion-header translucent>
      <ion-toolbar>
        <ion-searchbar v-model="searchCity" placeholder="Ville ou code postal"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
      <ion-button expand="block" type="submit">Rechercher</ion-button>
    </form>
    <div class="div-spinner">
        <ion-spinner v-if="submit == true" color="primary" class="spinner-search"></ion-spinner>
    </div>
          
    <p style="display: none;">{{searchCity}}</p>
</template>

<script>
import { IonHeader, IonToolbar, IonSearchbar, IonButton, IonSpinner} from '@ionic/vue';


import axios from 'axios';
export default {
  name: 'CityComponent',
  data(){
    return{        
      searchCity: '', 
      dataCities: '',
      submit: false,
      alert:{
        error: false,
        message: '',
      }
      
    }
  },
  emits: ['searchCity'],
  methods:{
    verif(){
          if(this.searchCity.length == 0){
              this.alert.error = true
              this.alert.message = 'champs vide'
          }
          else if(!isNaN(this.searchCity) && this.searchCity.length != 5){
              this.alert.error = true
              this.alert.message = 'code postal non valide'
          }
          else{
            this.alert.message = ''
            this.alert.error = false
            this.findCity()
          }
      },
    spinner(ms){
      this.submit = true
      setTimeout(() => this.submit = false, ms);
    },
    findCity(){
      this.spinner(500)
        if(isNaN(this.searchCity)){
        axios
        .get(`https://geo.api.gouv.fr/communes?nom=${this.searchCity}&boost=population&fields=code,nom,departement,region,population,codesPostaux`)
        .then((response) =>{
            //console.log(response.data);
            this.dataCities = response.data
            this.$emit('searchCity', this.dataCities);
            console.log(this.searchCity)
        })
        .catch((error) => {
          console.log(error);
        })
      }
      else{
         axios
        .get(`https://geo.api.gouv.fr/communes?codePostal=${this.searchCity}&fields=code,nom,departement,region,population,codesPostaux`)
        .then((response) =>{
            //console.log(response.data);
            this.dataCities = response.data
            this.$emit('searchCity', this.dataCities);
            console.log(this.searchCity)
        })
        .catch((error) => {
          console.log(error);
        })
      }
      
    }
    },
    components: {
    IonHeader, 
    IonToolbar, 
    IonSearchbar,
    IonButton,
    IonSpinner
  },
    mounted(){
      
    }
  
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.div-spinner{
    display: flex;
    justify-content: center;
}
.alert{
  text-align: center;
  background-color: #ff0000;
  padding: 5%;
}
.label-search{
  padding-top: 2%;
}
#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>