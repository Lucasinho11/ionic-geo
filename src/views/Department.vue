<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Département</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <DepartmentComponent/>
      
    </ion-content>
    

  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import DepartmentComponent from '@/components/DepartmentComponent.vue';

export default  {
  name: 'Department',
  components: { DepartmentComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>