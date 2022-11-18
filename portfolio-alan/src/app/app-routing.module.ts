import { PageErrorComponent } from './menu-corpo/page-error/page-error.component';
import { HomeComponent } from './menu-corpo/home/home.component';
import { HabilidadesComponent } from './menu-corpo/habilidades/habilidades.component';
import { ProjetosComponent } from './menu-corpo/projetos/projetos.component';
import { SobreComponent } from './menu-corpo/sobre/sobre.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'sobre',component:SobreComponent},
  {path:'projetos',component:ProjetosComponent},
  {path:'habilidades',component:HabilidadesComponent},
  {path:'404',component:PageErrorComponent},
  {path:'**',redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
