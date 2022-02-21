import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: './paginas/login/login.module#LoginPageModule' },
 /*  { path: 'login', loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)}, */
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'menu', loadChildren: './paginas/menu/menu.module#MenuPageModule' },
  { path: 'inicio', loadChildren: './paginas/inicio/inicio.module#InicioPageModule' },
  { path: 'kardex', loadChildren: './paginas/inventarios/kardex/kardex.module#KardexPageModule' },
  { path: 'gerente-general', loadChildren: './paginas/Reportes/gerente-general/gerente-general.module#GerenteGeneralPageModule' },
  { path: 'utilidad', loadChildren: './paginas/Reportes/utilidad/utilidad.module#UtilidadPageModule' },
  { path: 'ventas-sucursal', loadChildren: './paginas/Reportes/ventas-sucursal/ventas-sucursal.module#VentasSucursalPageModule' },
  { path: 'ventas-vendedor', loadChildren: './paginas/Reportes/ventas-vendedor/ventas-vendedor.module#VentasVendedorPageModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'mercancia-prestamo', loadChildren: './paginas/inventarios/mercancia-prestamo/mercancia-prestamo.module#MercanciaPrestamoPageModule' },
  { path: 'facturacion', loadChildren: './paginas/Reportes/facturacion/facturacion.module#FacturacionPageModule' },
  { path: 'pospago-segmento', loadChildren: './paginas/Reportes/pospago-segmento/pospago-segmento.module#PospagoSegmentoPageModule' },
  { path: 'ventas-producto', loadChildren: './paginas/Reportes/ventas-producto/ventas-producto.module#VentasProductoPageModule' },
  { path: 'ventas-recarga', loadChildren: './paginas/Reportes/ventas-recarga/ventas-recarga.module#VentasRecargaPageModule' },
  { path: 'ventas-claro-hogar', loadChildren: './paginas/Reportes/ventas-claro-hogar/ventas-claro-hogar.module#VentasClaroHogarPageModule' },
  { path: 'ventas-por-marca', loadChildren: './paginas/Reportes/ventas-por-marca/ventas-por-marca.module#VentasPorMarcaPageModule' },
  { path: 'compras-marca', loadChildren: './paginas/Reportes/compras-marca/compras-marca.module#ComprasMarcaPageModule' },
  { path: 'ventas-horas', loadChildren: './paginas/Reportes/ventas-horas/ventas-horas.module#VentasHorasPageModule' },
  { path: 'ventas-dias', loadChildren: './paginas/Reportes/ventas-dias/ventas-dias.module#VentasDiasPageModule' },
  { path: 'ventas-mes', loadChildren: './paginas/Reportes/ventas-mes/ventas-mes.module#VentasMesPageModule' },
  { path: 'ventas-bimestre', loadChildren: './paginas/Reportes/ventas-bimestre/ventas-bimestre.module#VentasBimestrePageModule' },
  { path: 'ventas-semestre', loadChildren: './paginas/Reportes/ventas-semestre/ventas-semestre.module#VentasSemestrePageModule' },
  { path: 'ventas-anio', loadChildren: './paginas/Reportes/ventas-anio/ventas-anio.module#VentasAnioPageModule' },
  { path: 'recaudos', loadChildren: './paginas/Reportes/recaudos/recaudos.module#RecaudosPageModule' },
  { path: 'gastos', loadChildren: './paginas/Reportes/gastos/gastos.module#GastosPageModule' },
  { path: 'evidentes', loadChildren: './paginas/Reportes/evidentes/evidentes.module#EvidentesPageModule' },
  { path: 'separados', loadChildren: './paginas/Reportes/separados/separados.module#SeparadosPageModule' },
  { path: 'datacredito', loadChildren: './paginas/Reportes/datacredito/datacredito.module#DatacreditoPageModule' },
  { path: 'inconsistencias', loadChildren: './paginas/Reportes/inconsistencias/inconsistencias.module#InconsistenciasPageModule' },
  { path: 'descuentos', loadChildren: './paginas/Reportes/descuentos/descuentos.module#DescuentosPageModule' },
  { path: 'ventas-cliente', loadChildren: './paginas/Reportes/ventas-cliente/ventas-cliente.module#VentasClientePageModule' },
  { path: 'index', loadChildren: './paginas/index/index.module#IndexPageModule' },
  /* { path: 'table', loadChildren: './table/table.module#TableComponentModule' } */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
