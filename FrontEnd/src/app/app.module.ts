import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/shared/header.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule, } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {TableModule} from 'primeng/table';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
const routes: Routes = [
  { path: 'home', component: UsuariosComponent },
  { path: 'actividad', component: ActividadesComponent }
];
@NgModule({
  declarations: [
    AppComponent, HeaderComponent, ActividadesComponent, UsuariosComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), BrowserAnimationsModule,
    MatButtonModule, MatListModule,MatToolbarModule , MatSidenavModule, MatIconModule, TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
