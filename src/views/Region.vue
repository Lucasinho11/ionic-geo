<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Région</ion-title>
        <ion-buttons slot="start">
        <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
        <RegionComponent @searchDepartments="searchDepartments"/>
        <div style="text-align: center">
        <ion-badge v-if="allDepartmentsSearch" color="success">{{ allDepartmentsSearch.length }} {{ result }}</ion-badge>
      </div>
      <ion-card v-for="data in allDepartmentsSearch" :key="data.id">
      <ion-card-header>

        <ion-card-title>{{ data.nom}}</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        Code INSEE: {{ data.code }}<br>
      </ion-card-content>
    </ion-card>
    </ion-content>

  </ion-page>
</template>
<script>
import { IonPage, IonBadge, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonBackButton} from '@ionic/vue';
import RegionComponent from '@/components/RegionComponent.vue';


export default  {
  name: 'Region',
  data(){
    return{
        allDepartmentsSearch: '',
        result: '',
    }
  },
  components: { RegionComponent, IonPage, IonBadge, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonBackButton },
  methods:{
   searchDepartments(value){
       console.log(value)
       this.allDepartmentsSearch = value
       if(this.allDepartmentsSearch.length > 1){
          this.result = 'départements'
      }
      
      else{
        this.result = 'département'
      }
       
   }
  }
}
</script>