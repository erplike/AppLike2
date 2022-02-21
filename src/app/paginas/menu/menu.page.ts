import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { SessionService } from '../../session.service';
import { JsonService } from '../../json.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  menu = this.jsonService.menu();
  user = this.sessionService.getSessionLogged().user;

  pages = [
    {
      title: this.sessionService.getSessionLogged().company,
      url: '/menu/inicio',
      icon: 'home'
    },
    {
      title: 'Inventarios',
      children: [
        {
          title: 'Kardex',
          url: '/menu/kardex',
          icon: 'albums'
        },
        {
          title: 'Mercancia en prestamo',
          url: '/menu/mercancia-prestamo',
          icon: 'md-clipboard'
        }
      ]
    },
    {
      title: 'Flujo de caja',
      children: [
        {
          title: 'Mi cierre de caja',
          url: '/menu/cierre-caja',
          icon: 'checkbox-outline'
        },
        {
          title: 'Egresos',
          url: '/menu/egresos',
          icon: 'cut'
        }
      ]
    },
    {
      title: 'Reportes',
      children: [
        {
          title: '1. Gerente General',
          url: '/menu/gerente-general',
          icon: '1'
        },
        {
          title: '2. Utilidad',
          url: '/menu/utilidad',
          icon: ''
        },
        {
          title: ' 3. Ventas por sucursal',
          url: '/menu/ventas-sucursal',
          icon: ''
        },
        {
          title: '4. Ventas por vendedor',
          url: '/menu/ventas-vendedor',
          icon: ''
        },
        {
          title: '5. Reporte facturación',
          url: '/menu/facturacion',
          icon: ''
        },
        {
          title: '6. Pospago por segmento',
          url: '/menu/pospago-segmento',
          icon: ''
        },
        {
          title: '7. Ventas por producto',
          url: '/menu/ventas-producto',
          icon: ''
        },
        {
          title: '8. Ventas por recargas',
          url: '/menu/ventas-recarga',
          icon: ''
        },
        {
          title: '9. Ventas Claro hogar',
          url: '/menu/ventas-claro-hogar',
          icon: ''
        },
        {
          title: '10. Ventas por marca',
          url: '/menu/ventas-marca',
          icon: ''
        },
        {
          title: '11. Compras por marca',
          url: '/menu/compras-marca',
          icon: ''
        },
        {
          title: '12. Ventas por horas',
          url: '/menu/ventas-horas',
          icon: ''
        },
        {
          title: '13. Ventas por dia',
          url: '/menu/ventas-dias',
          icon: ''
        },
        {
          title: '14. Ventas por mes',
          url: '/menu/ventas-mes',
          icon: ''
        },
        {
          title: '15. Ventas por bimestre',
          url: '/menu/ventas-bimestre',
          icon: ''
        },
        {
          title: '16. Ventas por semestre',
          url: '/menu/ventas-semestre',
          icon: ''
        },
        {
          title: '17. Ventas por año',
          url: '/menu/ventas-anio',
          icon: ''
        },
        {
          title: '18. Recuados cps/cvs',
          url: '/menu/recaudos',
          icon: ''
        },
        {
          title: '19. Ingresos y gastos',
          url: '/menu/gastos',
          icon: ''
        },
        {
          title: '20. Evidentes',
          url: '/menu/evidentes',
          icon: ''
        },
        {
          title: '21. Separados',
          url: '/menu/separados',
          icon: ''
        },
        {
          title: '22. Datacredito',
          url: '/menu/datacredito',
          icon: ''
        },
        {
          title: '23. Inconsistencias',
          url: '/menu/inconsistencias',
          icon: ''
        },
        {
          title: '24. Descuentos',
          url: '/menu/descuentos',
          icon: ''
        },
        {
          title: '25. Ventas por cliente',
          url: '/menu/ventas-cliente',
          icon: ''
        }
      ]
    },
    {
      title: 'Auditoria',
      children: [
        {
          title: 'Próximos a vencer CAD',
          url: '/menu/proximos-vencer',
          icon: 'md-briefcase'
        },
        {
          title: 'Reporte remisión salida',
          url: '/menu/reporte-salida',
          icon: 'md-cash'
        },
        {
          title: 'Resoluciones próximas a vencer',
          url: '/menu/resoluciones-vencer',
          icon: 'md-home'
        },
        {
          title: 'Devoluciones de venta',
          url: '/menu/devoluciones-venta',
          icon: 'md-people'
        },
        {
          title: 'Traslados sin registro de entrada',
          url: '/menu/traslado-sin-registro',
          icon: 'md-people'
        }
      ]
    },
    {
      title: 'Cuentas por cobrar',
      children: [
        {
          title: 'Reporte edades',
          url: '/menu/reporte-edades',
          icon: 'time'
        }
      ]
    },
    {
      title: 'Cuentas por pagar',
      children: [
        {
          title: 'Reporte edades',
          url: '/menu/reporte-edades2',
          icon: 'time'
        }
      ]
    }

  ];

  paginaSeleccionada = '';
  constructor(private router: Router, public sessionService: SessionService,
              public jsonService: JsonService) {
    this.router.events.subscribe((event: RouterEvent ) => {
    if (event && event.url) {
      this.paginaSeleccionada = event.url;
    }
  });
}

  ngOnInit() {
  }

  backLogin(event) {
    alert('Sessión cerrada');
    this.sessionService.setSessionLoggedOut();
  }

}
