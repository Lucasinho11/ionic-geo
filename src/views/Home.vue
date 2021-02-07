<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
        
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-text color="dark">
          <h2 style="text-align: center">Découpage administratif</h2><br>
          <div class="div-home">
            <h5>- Vous pouvez rechercher des communes par nom ou code postal</h5><br>
            <h5>- Vous pouvez rechercher des communes par département</h5><br>
            <h5>- Vous pouvez rechercher des départements par région</h5><br>
          </div>
          
      </ion-text>
    </ion-content>
  </ion-page>
  
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonText } from '@ionic/vue';


export default  {
  name: 'Home',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonText }
}
</script>
<style scoped>
  .div-home{
    margin: 5%;
  }
</style>