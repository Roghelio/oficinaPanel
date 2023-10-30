import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { MembresiasComponent } from './components/membresias/membresias.component';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { MembresiasListaComponent } from './components/membresias-lista/membresias-lista.component';
import { MembresiasEditarComponent } from './components/membresias-editar/membresias-editar.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'membresias', component: MembresiasComponent },
      { path: 'colaboradores', component: ColaboradoresComponent },
      { path: 'listaMembresias', component: MembresiasListaComponent},
      { path: 'editarMembresias/:id', component: MembresiasEditarComponent},
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
