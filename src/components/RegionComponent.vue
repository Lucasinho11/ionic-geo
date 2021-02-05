<template>
    <div class="alert" v-if="alert.error == true"> {{ alert.message}}</div>
  <form class="label-search" @submit.prevent="verif">
    <ion-header translucent>
      <ion-item>
            <ion-label>Régions</ion-label>
            <ion-select ok-text="Valider"  cancel-text="Annuler" v-model="region" >
              <ion-select-option v-for="data in allRegions" :key="data.id" :value="data.code">{{data.code }} - {{ data.nom }}</ion-select-option> 
            </ion-select>
      </ion-item>
    </ion-header>
      <ion-button expand="block" type="submit">Rechercher</ion-button>
    </form>
    <div class="div-spinner">
        <ion-spinner v-if="submit == true" color="primary" class="spinner-search"></ion-spinner>
    </div>
          
</template>

<script>
import { IonHeader, IonItem,IonLabel, IonSelect, IonSelectOption,IonButton, IonSpinner} from '@ionic/vue';


import axios from 'axios';
export default {
  name: 'RegionComponent',
  data(){
    return{        

      submit: false,
      region: '',
       alert:{
        error: false,
        message: '',
        allRegions: '',
      }
    }
  },
  emits:['regions'],
  methods:{
    spinner(ms){
      this.submit = true
      setTimeout(() => this.submit = false, ms);
    },
    verif(){
        if(this.department.length == 0){
              this.alert.error = true
              this.alert.message = 'Veuillez selectionner une région'
          }
          else{
            this.alert.message = ''
            this.alert.error = false
            this.findDepartments()
          }
    },
    },
    mounted(){
            axios
                .get(`https://geo.api.gouv.fr/regions`)
                .then((response) =>{
                    this.allRegions = response.data
                    this.$emit('regions', this.allRegions);
                    console.log(response.data)
                })
                .catch((error) => {
                console.log(error);
                })
    },
    components: {
    IonHeader, IonItem,IonLabel, IonSelect, IonSelectOption,IonButton, IonSpinner
  },
  
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