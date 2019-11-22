import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClienteComponent,
    ListaUsuarioComponent,
    NovoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
