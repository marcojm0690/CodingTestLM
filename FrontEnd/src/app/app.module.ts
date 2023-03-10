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
import { MatToolbarModule } from '@angular/material/toolbar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { KeyFilterModule } from 'primeng/keyfilter';
import {InputMaskModule} from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextarea, InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
const routes: Routes = [
  { path: 'home', component: UsuariosComponent },
  { path: 'actividad', component: ActividadesComponent }
];
@NgModule({
  declarations: [
    AppComponent, HeaderComponent, ActividadesComponent, UsuariosComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), BrowserAnimationsModule, FormsModule,
    MatButtonModule, MatListModule, MatToolbarModule, MatSidenavModule, MatIconModule, TableModule,
    ToastModule, InputMaskModule,KeyFilterModule,InputTextareaModule, DropdownModule, InputTextModule, CalendarModule, CheckboxModule, ButtonModule, InputTextareaModule, ToolbarModule, DialogModule, RadioButtonModule, InputNumberModule, ConfirmDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
