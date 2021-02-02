<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Commune</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <CityComponent @searchCity='searchCity'/>
      <ion-card v-for="data in dataCities" :key="data.id">
      <ion-card-header>
        <ion-card-subtitle>{{ data.code }}</ion-card-subtitle>
        <ion-card-title>{{ data.nom}}</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        {{ data.population }} habitants<br>
        Région: {{ data.region.nom }}<br>
        Département: {{ data.departement.nom }}<br>
        Codes postaux: {{data.codesPostaux}}
      </ion-card-content>
    </ion-card>
    </ion-content>
    

  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent} from '@ionic/vue';
import CityComponent from '@/components/CityComponent.vue';

export default  {
  name: 'City',
  data(){
    return{        
      dataCities: '',
    }
  },
  components: { CityComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent },
  methods:{
    searchCity(value) {
      this.dataCities = value
      console.log(value)
    },
  }
}
</script>