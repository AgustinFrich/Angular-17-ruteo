import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'ejemplo-firestore-2024',
          appId: '1:1025426413676:web:ef5d349740c57ae5ea2049',
          storageBucket: 'ejemplo-firestore-2024.appspot.com',
          apiKey: 'AIzaSyCcu7EJjzUrzmB23s7N5ZS9FXN2irsDjxg',
          authDomain: 'ejemplo-firestore-2024.firebaseapp.com',
          messagingSenderId: '1025426413676',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideStorage(() => getStorage())),
  ],
};
