import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { MenuRodapeComponent } from './menu-rodape/menu-rodape.component';
import { SobreComponent } from './menu-corpo/sobre/sobre.component';
import { HomeComponent } from './menu-corpo/home/home.component';
import { ProjetosComponent } from './menu-corpo/projetos/projetos.component';
import { HabilidadesComponent } from './menu-corpo/habilidades/habilidades.component';
import { PageErrorComponent } from './menu-corpo/page-error/page-error.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTopComponent,
    MenuRodapeComponent,
    SobreComponent,
    HomeComponent,
    ProjetosComponent,
    HabilidadesComponent,
    PageErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
