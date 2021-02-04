<template>
  <form class="label-search" @submit.prevent="findCities">
    <ion-header translucent>
      <ion-item>
            <ion-label>Départements</ion-label>
            <ion-select ok-text="Valider"  cancel-text="Annuler" v-model="searchCities" >
              <ion-select-option v-for="data in allDepartments" :key="data.id" :value="data.code">{{data.code }} - {{ data.nom }}</ion-select-option> 
            </ion-select>
      </ion-item>
    </ion-header>
      <ion-button expand="block" type="submit">Rechercher</ion-button>
    </form>
    <div class="div-spinner">
        <ion-spinner v-if="submit == true" color="primary" class="spinner-search"></ion-spinner>
    </div>
          
    <p style="display: none;">{{searchCities}}</p>
</template>

<script>
import { IonHeader, IonItem,IonLabel, IonSelect, IonSelectOption,IonButton, IonSpinner} from '@ionic/vue';


import axios from 'axios';
export default {
  name: 'DepartmentComponent',
  data(){
    return{        
      searchCities: '', 
      allDepartments: '',
      submit: false,
      
    }
  },
  emits: ['searchCity'],
  methods:{
    spinner(ms){
      this.submit = true
      setTimeout(() => this.submit = false, ms);
    },
    findCities(){
        console.log(this.searchCities)
        axios
        .get(`https://geo.api.gouv.fr/departements/${this.searchCities}/communes`)
        .then((response) =>{
            console.log(response.data);
            console.log(this.searchCities)
        })
        .catch((error) => {
          console.log(error);
        })
      
    }
    },
    mounted(){
            axios
                .get(`https://geo.api.gouv.fr/departements`)
                .then((response) =>{
                    this.allDepartments = response.data
                    //console.log(response.data);
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