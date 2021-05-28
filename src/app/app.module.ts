import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBZrfPb7VF--tPth13bPbZ1wTZ_30RXr20",
        authDomain: "angularcontroleacesso.firebaseapp.com",
        projectId: "angularcontroleacesso",
        storageBucket: "angularcontroleacesso.appspot.com",
        messagingSenderId: "961970735176",
        appId: "1:961970735176:web:fab9493c21aa3e20dcb07d"
      }
    )
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
