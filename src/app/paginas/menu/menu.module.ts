import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: '',
        redirectTo: '/menu/inicio',
        pathMatch: 'full'
      },
      {
        path: 'inicio',
        loadChildren: '../inicio/inicio.module#InicioPageModule',
        pathMatch: 'full'
      },
      {
        path: 'kardex',
        loadChildren: '../inventarios/kardex/kardex.module#KardexPageModule',
        pathMatch: 'full'
      },
      {
        path: 'mercancia-prestamo',
        loadChildren:  '../inventarios/mercancia-prestamo/mercancia-prestamo.module#MercanciaPrestamoPageModule' ,
        pathMatch: 'full'
      },
      {
        path: 'gerente-general',
        loadChildren:  '../Reportes/gerente-general/gerente-general.module#GerenteGeneralPageModule' ,
        pathMatch: 'full'
      },
      {
        path: 'utilidad',
        loadChildren:  '../Reportes/utilidad/utilidad.module#UtilidadPageModule' ,
        pathMatch: 'full'
      },
      {
        path: 'ventas-sucursal',
        loadChildren:   '../Reportes/ventas-sucursal/ventas-sucursal.module#VentasSucursalPageModule' ,
        pathMatch: 'full'
      },
      {
        path: 'ventas-vendedor',
        loadChildren:  '../Reportes/ventas-vendedor/ventas-vendedor.module#VentasVendedorPageModule'  ,
        pathMatch: 'full'
      },
      {
        path: 'cierre-caja',
        loadChildren:  '../flujoCaja/cierres-caja/cierres-caja.module#CierresCajaPageModule'  ,
        pathMatch: 'full'
      },
      {
        path: 'proximos-vencer',
        loadChildren:  '../auditoria/proximos-vencer/proximos-vencer.module#ProximosVencerPageModule'  ,
        pathMatch: 'full'
      },
      {
        path: 'reporte-salida',
        loadChildren:  '../auditoria/reporte-salida/reporte-salida.module#ReporteSalidaPageModule'  ,
        pathMatch: 'full'
      },
      {
        path: 'resoluciones-vencer',
        loadChildren:  '../auditoria/resoluciones-vencer/resoluciones-vencer.module#ResolucionesVencerPageModule'  ,
        pathMatch: 'full'
      },
      {
        path: 'devoluciones-venta',
        loadChildren:  '../auditoria/devoluciones-venta/devoluciones-venta.module#DevolucionesVentaPageModule'  ,
        pathMatch: 'full'
      },
      {
        path: 'traslado-sin-registro',
        loadChildren:  '../auditoria/traslado-sin-registro/traslado-sin-registro.module#TrasladoSinRegistroPageModule'  ,
        pathMatch: 'full'
      },
      {
        path: 'egresos',
        loadChildren:  '../flujoCaja/egresos/egresos.module#EgresosPageModule'  ,
        pathMatch: 'full'
      },
      {
        path: 'reporte-edades',
        loadChildren:  '../cxc/reportes-edades/reportes-edades.module#ReportesEdadesPageModule'  ,
        pathMatch: 'full'
      },
      {
        path: 'reporte-edades2',
        loadChildren:  '../cxp/reportes-edades/reportes-edades.module#ReportesEdadesPageModule'  ,
        pathMatch: 'full'
      },
      { path: 'facturacion',
        loadChildren: '../Reportes/facturacion/facturacion.module#FacturacionPageModule',
        pathMatch: 'full' },
      { path: 'pospago-segmento',
        loadChildren: '../Reportes/pospago-segmento/pospago-segmento.module#PospagoSegmentoPageModule',
        pathMatch: 'full' },
      { path: 'ventas-producto',
        loadChildren: '../Reportes/ventas-producto/ventas-producto.module#VentasProductoPageModule',
        pathMatch: 'full' },
      { path: 'ventas-recarga',
        loadChildren: '../Reportes/ventas-recarga/ventas-recarga.module#VentasRecargaPageModule',
        pathMatch: 'full' },
      { path: 'ventas-claro-hogar',
        loadChildren: '../Reportes/ventas-claro-hogar/ventas-claro-hogar.module#VentasClaroHogarPageModule',
        pathMatch: 'full' },
      { path: 'ventas-marca',
        loadChildren: '../Reportes/ventas-por-marca/ventas-por-marca.module#VentasPorMarcaPageModule',
        pathMatch: 'full' },
      { path: 'compras-marca',
        loadChildren: '../Reportes/compras-marca/compras-marca.module#ComprasMarcaPageModule',
        pathMatch: 'full' },
      { path: 'ventas-horas',
        loadChildren: '../Reportes/ventas-horas/ventas-horas.module#VentasHorasPageModule',
        pathMatch: 'full' },
      { path: 'ventas-dias',
        loadChildren: '../Reportes/ventas-dias/ventas-dias.module#VentasDiasPageModule',
        pathMatch: 'full' },
      { path: 'ventas-mes',
        loadChildren: '../Reportes/ventas-mes/ventas-mes.module#VentasMesPageModule',
        pathMatch: 'full' },
      { path: 'ventas-bimestre',
        loadChildren: '../Reportes/ventas-bimestre/ventas-bimestre.module#VentasBimestrePageModule',
        pathMatch: 'full' },
      { path: 'ventas-semestre',
        loadChildren: '../Reportes/ventas-semestre/ventas-semestre.module#VentasSemestrePageModule',
        pathMatch: 'full' },
      { path: 'ventas-anio',
        loadChildren: '../Reportes/ventas-anio/ventas-anio.module#VentasAnioPageModule',
        pathMatch: 'full' },
      { path: 'recaudos',
        loadChildren: '../Reportes/recaudos/recaudos.module#RecaudosPageModule',
        pathMatch: 'full' },
      { path: 'gastos',
        loadChildren: '../Reportes/gastos/gastos.module#GastosPageModule',
        pathMatch: 'full' },
      { path: 'evidentes',
        loadChildren: '../Reportes/evidentes/evidentes.module#EvidentesPageModule',
        pathMatch: 'full' },
      { path: 'separados',
        loadChildren: '../Reportes/separados/separados.module#SeparadosPageModule',
        pathMatch: 'full' },
      { path: 'datacredito',
        loadChildren: '../Reportes/datacredito/datacredito.module#DatacreditoPageModule',
        pathMatch: 'full' } ,
      { path: 'inconsistencias',
        loadChildren: '../Reportes/inconsistencias/inconsistencias.module#InconsistenciasPageModule',
        pathMatch: 'full' },
      { path: 'descuentos',
        loadChildren: '../Reportes/descuentos/descuentos.module#DescuentosPageModule',
        pathMatch: 'full' },
      { path: 'ventas-cliente',
        loadChildren: '../Reportes/ventas-cliente/ventas-cliente.module#VentasClientePageModule',
        pathMatch: 'full' },
    ]
  }
];
/* window.addEventListener('offline', function(e) { alert('offline'); }); */

/* window.addEventListener('online', function(e) { alert('online'); }); */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
