<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="city" href="/home/city">
          <ion-icon :icon="businessOutline" />
          <ion-label>Commune</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="department" href="/home/department">
          <ion-icon :icon="locationOutline" />
          <ion-label>Département</ion-label>
        </ion-tab-button>
       
        <ion-tab-button tab="region" href="/home/region">
          <ion-icon :icon="mapOutline" />
          <ion-label>Région</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { locationOutline, businessOutline, mapOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      locationOutline, 
      businessOutline, 
      mapOutline,
    }
  }
}
</script>