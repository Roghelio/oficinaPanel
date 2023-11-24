import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSlideToggleModule, _MatSlideToggleRequiredValidatorModule} from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faPaypal,
  faTwitter,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCheckCircle,
  faCircleUser,
  faCreditCard,
} from '@fortawesome/free-regular-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { HomeComponent } from './components/home/home.component';
import { MembresiasComponent } from './components/membresias/membresias.component';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { MensajeEmergentesComponent } from './components/mensaje-emergentes/mensaje-emergentes.component';
import { MembresiasListaComponent } from './components/membresias-lista/membresias-lista.component';
import { MensajeEliminarComponent } from './components/mensaje-eliminar/mensaje-eliminar.component';
import { MembresiasEditarComponent } from './components/membresias-editar/membresias-editar.component';
import { AltaColaboradoresComponent } from './components/alta-colaboradores/alta-colaboradores.component';
import { EditarColaboradorComponent } from './components/editar-colaborador/editar-colaborador.component';
import { ListarEmpleadosPipe } from 'src/app/pipes/empleado/listar-empleados.pipe';
import { SucursalListaComponent } from './components/sucursal-lista/sucursal-lista.component';
import { SucursalAltaComponent } from './components/sucursal-alta/sucursal-alta.component';
import { SucursalEditarComponent } from './components/sucursal-editar/sucursal-editar.component';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { HorariosComponent } from './components/horarios/horarios.component';
import { HorariosVistaComponent } from './components/horarios-vista/horarios-vista.component';
import { HorarioEditarComponent } from './components/horario-editar/horario-editar.component';
import { AltaProveedorComponent } from './components/alta-proveedor/alta-proveedor.component';
import { ListaProveedorComponent } from './components/lista-proveedor/lista-proveedor.component';
import { ListaProveedorPipe } from 'src/app/pipes/proveedor/lista-proveedor.pipe';
import { EditarProveedorComponent } from './components/editar-proveedor/editar-proveedor.component';
import { ListaCategoriaComponent } from './components/lista-categoria/lista-categoria.component';
import { AltaCategoriaComponent } from './components/alta-categoria/alta-categoria.component';
import { EditarCategoriaComponent } from './components/editar-categoria/editar-categoria.component';
import { ListarCategoriaPipe } from 'src/app/pipes/categoria/listar-categoria.pipe';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { ListarProductoPipe } from 'src/app/pipes/productos/listar-producto.pipe';
import { ListarSucursalesPipe } from 'src/app/pipes/sucursales/listar-sucursales.pipe';
import { ListarMembresiaPipe } from 'src/app/pipes/membresias/lista-proveedor.pipe';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { MensajeCargandoComponent } from './components/mensaje-cargando/mensaje-cargando.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MembresiasComponent,
    ColaboradoresComponent,
    MensajeEmergentesComponent,
    MembresiasListaComponent,
    MensajeEliminarComponent,
    MembresiasEditarComponent,
    AltaColaboradoresComponent,
    EditarColaboradorComponent,
    ListarEmpleadosPipe,
    SucursalListaComponent,
    SucursalAltaComponent,
    SucursalEditarComponent,
    HorariosComponent,
    HorariosVistaComponent,
    HorarioEditarComponent,
    AltaProveedorComponent,
    ListaProveedorComponent,
    ListaProveedorPipe,
    EditarProveedorComponent,
    ListaCategoriaComponent,
    AltaCategoriaComponent,
    EditarCategoriaComponent,
    ListarCategoriaPipe,
    AltaProductoComponent,
    ListaProductoComponent,
    EditarProductoComponent,
    ListarProductoPipe,
    ListarSucursalesPipe,
    ListarMembresiaPipe,
    NotificacionesComponent,
    MensajeCargandoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatDialogModule,
    MatSlideToggleModule,
    _MatSlideToggleRequiredValidatorModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule
  ],
})
export class AdminModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faFacebook,
      faGoogle,
      faInstagram,
      faTwitter,
      faCircleUser,
      faCreditCard,
      faPaypal,
      faXTwitter,
      faCheckCircle,
      faPowerOff
    );
  }
}
