<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Région</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Région</ion-title>
        </ion-toolbar>
      </ion-header>
      
      
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';


export default  {
  name: 'Region',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>