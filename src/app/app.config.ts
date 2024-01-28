import { provideAnimations } from "@angular/platform-browser/animations";
import { TuiRootModule } from "@taiga-ui/core";
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), provideRouter(routes), importProvidersFrom(TuiRootModule), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"shop-9d673","appId":"1:815399851467:web:c8291c2f7310b342c1d24e","storageBucket":"shop-9d673.appspot.com","apiKey":"AIzaSyDOco-L74-jyMIu0_ynTCx7e6ExnkBcEew","authDomain":"shop-9d673.firebaseapp.com","messagingSenderId":"815399851467","measurementId":"G-T6B33HHYBF"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"shop-9d673","appId":"1:815399851467:web:c8291c2f7310b342c1d24e","storageBucket":"shop-9d673.appspot.com","apiKey":"AIzaSyDOco-L74-jyMIu0_ynTCx7e6ExnkBcEew","authDomain":"shop-9d673.firebaseapp.com","messagingSenderId":"815399851467","measurementId":"G-T6B33HHYBF"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, UserTrackingService, importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"shop-9d673","appId":"1:815399851467:web:c8291c2f7310b342c1d24e","storageBucket":"shop-9d673.appspot.com","apiKey":"AIzaSyDOco-L74-jyMIu0_ynTCx7e6ExnkBcEew","authDomain":"shop-9d673.firebaseapp.com","messagingSenderId":"815399851467","measurementId":"G-T6B33HHYBF"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
