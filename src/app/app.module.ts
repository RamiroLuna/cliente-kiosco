import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { AdministracionModule } from './administracion/administracion.module';
import { KioscoModule } from './kiosco/kiosco.module';


import { AppComponent } from './app.component';

const routes: Routes = [
 // { path: '', redirectTo: '/login', pathMatch: 'full' }
 { path: 'administracion', loadChildren: './administracion/administracion.module#AdministracionModule' },
 { path: 'portal', loadChildren: './kiosco/kiosco.module#KioscoModule' },
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    AdministracionModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
