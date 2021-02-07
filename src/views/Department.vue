<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Département</ion-title>
        <ion-buttons slot="start">
        <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <DepartmentComponent @searchCitiesInDepartment = 'searchCitiesInDepartment'/>
      <div style="text-align: center">
        <ion-badge v-if="allCitiesDepartment" color="success">{{ allCitiesDepartment.length }} {{ result }}</ion-badge>
      </div>
      <ion-card v-for="data in allCitiesDepartment" :key="data.id">
      <ion-card-header>
        <ion-card-subtitle>{{ data.code }}</ion-card-subtitle>
        <ion-card-title>{{ data.nom}}</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        {{ data.population }} habitants<br>
        Région: {{ data.region.nom }} ({{data.region.code}})<br>
        Département: {{ data.departement.nom }} ({{data.departement.code}})<br>
        <p v-if="data.codesPostaux.length > 1">Codes postaux: {{data.codesPostaux}}</p>
        <p v-if="data.codesPostaux.length == 1">Code postal: {{data.codesPostaux}}</p>
      </ion-card-content>
    </ion-card>
    </ion-content>
    

  </ion-page>
</template>

<script>
import { IonPage, IonBadge, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButtons, IonBackButton} from '@ionic/vue';
import DepartmentComponent from '@/components/DepartmentComponent.vue';

export default  {
  name: 'Department',
  data(){
    return{
      allCitiesDepartment: '',
      result: '',
    }
  },
  components: { DepartmentComponent,IonPage, IonBadge, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButtons, IonBackButton },
  methods:{
    searchCitiesInDepartment(value){
      this.allCitiesDepartment = value
      if(this.allCitiesDepartment.length > 1){
          this.result = 'communes'
      }
      
      else{
        this.result = 'commune'
      }
      console.log(value)
    }
  }
}
</script>