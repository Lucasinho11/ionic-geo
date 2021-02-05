<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Région</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <RegionComponent @regions='regions'/>
      
      
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import RegionComponent from '@/components/RegionComponent.vue';

export default  {
  name: 'Region',
  data(){
    return{
      allRegions: '',
    }
  },
  components: {RegionComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  methods:{
    regions(value){
      console.log(value)
      this.allRegions = value

    }
  }
}
</script>