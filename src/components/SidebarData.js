import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Archivo',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Configurar Impresora',
        path: '/archivo/printer',
        icon: <AiIcons.AiFillPrinter/>
      },
      {
        title: 'Calculadora',
        path: '/archivo/calculator',
        icon: <AiIcons.AiFillCalculator />
      }
    ]
  },
  {
    title: 'Maestros',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Generales',
        path: '',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: 'Centro de Costos',
            path: '/maestros/generales/centrocostos',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Ciudades',
            path: '/maestros/generales/ciudades',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Clientes',
            path: '/maestros/generales/clientes',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Departamentos',
            path: '/maestros/generales/departamentos',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Empresas Transportadoras',
            path: '/maestros/generales/empresastransportadoras',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Paises',
            path: '/maestros/generales/paises',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Proveedores',
            path: '/maestros/generales/proveedores',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Presupuesto',
            path: '/maestros/generales/presupuesto',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Vendedores',
            path: '/maestros/generales/vendedoras',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Zonas',
            path: '/maestros/generales/zonas',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Barrios',
            path: '/maestros/generales/barrios',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Temporadas',
            path: '/maestros/generales/temporadas',
            icon: <IoIcons.IoIosPaper />
          },
        ]
      },
      {
        title: 'Insumos',
        path: '',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: 'Bodegas',
            path: '/maestros/insumos/bodegas',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Grupos Inventarios',
            path: '/maestros/insumos/gruposinventarios',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Maestro de Insumos',
            path: '/maestros/insumos/maestroinsumos',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Subgrupos Inventarios',
            path: '/maestros/insumos/subgruposinventarios',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Unidades de Movimiento',
            path: '/maestros/insumos/unidadesmovimiento',
            icon: <IoIcons.IoIosPaper />
          }
        ]
      },
      {
        title: 'Gastos',
        path: '',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: 'Grupo Gastos',
            path: 'maestros/gastos/grupo',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Maestro de Gastos',
            path: 'maestros/gastos/maestro',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Subgrupo Gasos',
            path: 'maestros/gastos/subgrupo',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          }
        ]
      },
      {
        title: 'Administrativos',
        path: '',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: 'Bancos Transacciones',
            path: 'maestros/administrativos/bancostransacciones',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Bancos Proveedores',
            path: 'maestros/administrativos/bancosproveedores',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'CIF',
            path: 'maestros/administrativos/cif',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Comision por Recaudo',
            path: 'maestros/administrativos/comisionrecaudo',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Maestros Comprobantes',
            path: 'maestros/administrativos/maestroscomprobantes',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Maestro de Conceptos',
            path: 'maestros/administrativos/maestrosconceptos',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Parámetros Consecutivos',
            path: 'maestros/administrativos/paramconsecutivos',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Parámetros Compras',
            path: 'maestros/administrativos/paramcompras',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Parámetros Facturación',
            path: 'maestros/administrativos/paramfacturacion',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Parámetros Generales',
            path: 'maestros/administrativos/paramgrales',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Parámetros Impuestos',
            path: 'maestros/administrativos/paramimpuestos',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Periodos',
            path: 'maestros/administrativos/periodos',
            icon: <IoIcons.IoIosPaper />
          }
        ]
      },
      {
        title: 'Produccion',
        path: '',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: 'Auditores Procesos',
            path: 'maestros/produccion/auditoresprocesos',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Crear Referencia Diseño',
            path: 'maestros/produccion/crearrefdiseno',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Crear Referencia',
            path: 'maestros/produccion/crearref',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Colores',
            path: 'maestros/produccion/colores',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Coleccion',
            path: 'maestros/produccion/coleccion',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Festivos',
            path: 'maestros/produccion/festivos',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Lineas',
            path: 'maestros/produccion/lineas',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Moldes',
            path: 'maestros/produccion/moldes',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Marcas',
            path: 'maestros/produccion/marcas',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Maquinas Confeccion',
            path: 'maestros/produccion/maquinasconfeccion',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Operacion Confeccion',
            path: 'maestros/produccion/operacionconfeccion',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Prendas',
            path: 'maestros/produccion/prendas',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Piezas',
            path: 'maestros/produccion/piezas',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Partes Prenda',
            path: 'maestros/produccion/partesprendas',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Pintas Produccion',
            path: 'maestros/produccion/pintasproduccion',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Procesos',
            path: 'maestros/produccion/procesos',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Tallas',
            path: 'maestros/produccion/tallas',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Imprimir Codigo Barras',
            path: 'maestros/produccion/imprimircodbarras',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Insumos Por Linea',
            path: 'maestros/produccion/insumoslinea',
            icon: <IoIcons.IoIosPaper />
          }
        ]
      }
    ]
  },
  {
    title: 'Insumos',
    path: '',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Orden de Compra',
        path: '/insumos/ordencompra',
        icon: <FaIcons.FaCartPlus />,
        cName: 'sub-nav'
      },
      {
        title: 'Ordenes de Compra Producción Insumos',
        path: '/insumos/ordencompraprodinsumos',
        icon: <FaIcons.FaCartPlus />
      },
      {
        title: 'Orden de Compra Pedidos',
        path: '/insumos/ordencomprapedidos',
        icon: <FaIcons.FaCartPlus />,
        cName: 'sub-nav'
      },
      {
        title: 'Orden Compra Producción Telas',
        path: '/insumos/ordencompraprodtelas',
        icon: <FaIcons.FaCartPlus />
      },
      {
        title: 'Entrada de Compra Con O. de C.',
        path: '/insumos/entradacompraOC',
        icon: <FaIcons.FaCartPlus />
      },
      {
        title: 'Entrada de Compra Sin O. de C.',
        path: '/insumos/entradacomprasinOC',
        icon: <FaIcons.FaCartPlus />
      },
      {
        title: 'Entrada de Compra Proveedor O. de C.',
        path: '/insumos/entradacompraprovOC',
        icon: <FaIcons.FaCartPlus />,
        cName: 'sub-nav'
      },
      {
        title: 'Devolucion por Compras',
        path: '/insumos/devolcompras',
        icon: <FaIcons.FaCartPlus />
      },
      {
        title: 'Otros Movimientos',
        path: '/insumos/otrosmov',
        icon: <FaIcons.FaCartPlus />
      },
      {
        title: 'Planear Compras MP',
        path: '/insumos/plancomprasMP',
        icon: <FaIcons.FaCartPlus />,
        cName: 'sub-nav'
      },
      {
        title: 'Traslado Entre Bodegas',
        path: '/insumos/trasladoentrebodegas',
        icon: <FaIcons.FaCartPlus />
      },
      {
        title: 'Salidas Insumos Reproceso',
        path: '/insumos/salidainsumosrepro',
        icon: <FaIcons.FaCartPlus />
      },
      {
        title: 'Entradas Insumos Reproceso',
        path: '/insumos/entradasinsumosrepro',
        icon: <FaIcons.FaCartPlus />
      }
    ]
  },
  {
    title: 'Produccion',
    path: '',
    icon: <RiIcons.RiProductHuntFill/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Pedidos',
        path: '/produccion/pedidos',
        icon: <RiIcons.RiProductHuntFill/>,
        cName: 'sub-nav'
      },
      {
        title: 'Pedidos Excel Talla',
        path: '/produccion/pedidosExcelTalla',
        icon: <RiIcons.RiProductHuntFill/>
      },
      {
        title: 'Registrar Trazo',
        path: '/produccion/registrarTrazo',
        icon: <RiIcons.RiProductHuntFill/>,
        cName: 'sub-nav'
      },
      {
        title: 'Orden de Produccion',
        path: '/produccion/ordenProduccion',
        icon: <RiIcons.RiProductHuntFill/>
      },
      {
        title: 'Movimientos',
        path: '/produccion/movimientos',
        icon: <RiIcons.RiProductHuntFill/>
      },
      {
        title: 'Despacho de Insumos O.P',
        path: '/produccion/despachoInsumos',
        icon: <RiIcons.RiProductHuntFill/>
      },
      {
        title: 'Despacho de Telas O.P.',
        path: '/produccion/despachoTelas',
        icon: <RiIcons.RiProductHuntFill/>,
        cName: 'sub-nav'
      },
      {
        title: 'Devolucion de Insumos O.P.',
        path: '/produccion/devolucionInsumos',
        icon: <RiIcons.RiProductHuntFill/>
      },
      {
        title: 'Devolucion de Telas O.P.',
        path: '/produccion/devolucionTelas',
        icon: <RiIcons.RiProductHuntFill/>
      },
      {
        title: 'Recalcular Orden de Producción',
        path: '/produccion/recalcularOP',
        icon: <RiIcons.RiProductHuntFill/>,
        cName: 'sub-nav'
      },
      {
        title: 'Modificar Orden de Producción',
        path: '/produccion/modificarOP',
        icon: <RiIcons.RiProductHuntFill/>
      },
      {
        title: 'Anular Movimiento',
        path: '/produccion/anularMovimiento',
        icon: <RiIcons.RiProductHuntFill/>
      },
      {
        title: 'Inactivar Referencias Pedido',
        path: '/produccion/inactivarRefPed',
        icon: <RiIcons.RiProductHuntFill/>
      },
      {
        title: 'Copiar Pedido',
        path: '/produccion/copiarPedido',
        icon: <RiIcons.RiProductHuntFill/>
      },
      {
        title: 'Entrada Proceso Cod Barras',
        path: '/produccion/entradaProcCodBar',
        icon: <RiIcons.RiProductHuntFill/>
      },
      {
        title: 'Remisionar Otros Conceptos',
        path: '/produccion/remisionOtrosConcepto',
        icon: <RiIcons.RiProductHuntFill/>
      }
    ]
  },
  {
    title: 'Proveedores',
    path: '',
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Registrar Gastos',
        path: '/proveedores/registrarGastos',
        icon: <RiIcons.RiProductHuntFill/>,
        cName: 'sub-nav'
      },
      {
        title: 'Notas Credito',
        path: '/proveedores/notasCredito',
        icon: <RiIcons.RiProductHuntFill/>
      },
      {
        title: 'Egresos Proveedores',
        path: '/proveedores/egresosProveedores',
        icon: <RiIcons.RiProductHuntFill/>,
        cName: 'sub-nav'
      },
      {
        title: 'Egresos Libres',
        path: '/proveedores/egresosLibres',
        icon: <RiIcons.RiProductHuntFill/>
      },
      {
        title: 'Egresos Caja Menor',
        path: '/proveedores/egresosCajaMenor',
        icon: <RiIcons.RiProductHuntFill/>
      },
      {
        title: 'Egresos Nómina',
        path: '/proveedores/egresoNomina',
        icon: <RiIcons.RiProductHuntFill/>
      },
      {
        title: 'Modificar Egresos',
        path: '/proveedores/modificarEgresos',
        icon: <RiIcons.RiProductHuntFill/>,
        cName: 'sub-nav'
      },
      {
        title: 'Aplicar Nota Crédito',
        path: '/proveedores/aplicarNotaCredito',
        icon: <RiIcons.RiProductHuntFill/>
      },
      {
        title: 'Aplicar Egreso',
        path: '/proveedores/aplicarEgreso',
        icon: <RiIcons.RiProductHuntFill/>
      },
      {
        title: 'Anular',
        path: '',
        icon: <RiIcons.RiProductHuntFill/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: 'Anular Factura Compras',
            path: '/proveedores/anular/facturaCompras',
            icon: <RiIcons.RiProductHuntFill/>,
            cName: 'sub-nav'
          },
          {
            title: 'Anular Egreso',
            path: '/proveedores/anular/egreso',
            icon: <RiIcons.RiProductHuntFill/>
          },
          {
            title: 'Anular Nota Crédito',
            path: '/proveedores/anular/notaCredito',
            icon: <RiIcons.RiProductHuntFill/>,
            cName: 'sub-nav'
          }
        ]
      },
      {
        title: 'Radicar Facturas Insumos',
        path: 'proveedores/radicarFacturaInsumos',
        icon: <RiIcons.RiProductHuntFill/>
      },
      {
        title: 'Radicar Facturas Procesos',
        path: 'proveedores/radicarFacturasProcesos',
        icon: <RiIcons.RiProductHuntFill/>
      },
      {
        title: 'Aprobar Pagos',
        path: 'proveedores/aprobarPagos',
        icon: <RiIcons.RiProductHuntFill/>
      }
    ]
  },
  {
    title: 'Clientes',
    path: '',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Facturar',
        path: '',
        icon: <IoIcons.IoMdPeople />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: 'Facturar Pedidos',
            path: '/clientes/facturar/pedidos',
            icon: <IoIcons.IoMdPeople />,
            cName: 'sub-nav'
          },
          {
            title: 'Facturar Remisiones',
            path: '/clientes/facturar/remisiones',
            icon: <IoIcons.IoMdPeople />
          },
          {
            title: 'Facturar Otros Conceptos',
            path: '/clientes/facturar/otrosConceptos',
            icon: <IoIcons.IoMdPeople />,
            cName: 'sub-nav'
          },
          {
            title: 'Facturar con Código de Barras',
            path: '/clientes/facturar/codBarras',
            icon: <IoIcons.IoMdPeople />
          },
          {
            title: 'Facturar VMI',
            path: '/clientes/facturar/vmi',
            icon: <IoIcons.IoMdPeople />,
            cName: 'sub-nav'
          },
          {
            title: 'Facturar Punto de Venta',
            path: '/clientes/facturar/pdv',
            icon: <IoIcons.IoMdPeople />
          }
        ]
      },
      {
        title: 'Devoluciones',
        path: '',
        icon: <IoIcons.IoMdPeople />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: 'Por Factura',
            path: '/clientes/devoluciones/factura',
            icon: <IoIcons.IoMdPeople />,
            cName: 'sub-nav'
          },
          {
            title: 'Por Referencia',
            path: '/clientes/devoluciones/referencia',
            icon: <IoIcons.IoMdPeople />
          },
          {
            title: 'Por Codigo de Barras',
            path: '/clientes/devoluciones/codBarras',
            icon: <IoIcons.IoMdPeople />,
            cName: 'sub-nav'
          },
        ]
      },
      {
        title: 'Notas Crédito',
        path: '/clientes/notasCredito',
        icon: <IoIcons.IoMdPeople />,
        cName: 'sub-nav'
      },
      {
        title: 'Recibo de Caja',
        path: '/clientes/reciboCaja',
        icon: <IoIcons.IoMdPeople />
      },
      {
        title: 'Modificar Recibo caja',
        path: '/clientes/modificarReciboCaja',
        icon: <IoIcons.IoMdPeople />,
        cName: 'sub-nav'
      },
      {
        title: 'Aplicar Nota Crédito',
        path: '/clientes/aplicarNotaCredito',
        icon: <IoIcons.IoMdPeople />
      },
      {
        title: 'Aplicar Recibo de Caja',
        path: '/clientes/aplicarReciboCaja',
        icon: <IoIcons.IoMdPeople />,
        cName: 'sub-nav'
      },
      {
        title: 'Anular',
        path: '',
        icon: <IoIcons.IoMdPeople />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: 'Anular Nota Crédito',
            path: '/clientes/anular/notaCredito',
            icon: <IoIcons.IoMdPeople />,
            cName: 'sub-nav'
          },
          {
            title: 'Anular Recibo de Caja',
            path: '/clientes/anular/reciboCaja',
            icon: <IoIcons.IoMdPeople />
          }
        ]
      },
      {
        title: 'Despacho Lista de Empaque',
        path: '',
        icon: <IoIcons.IoMdPeople />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: 'Crear Lista de Empaque Pedidos',
            path: '/clientes/despacho/crearLista',
            icon: <IoIcons.IoMdPeople />,
            cName: 'sub-nav'
          },
          {
            title: 'Remisionar Lista de Empaque',
            path: '/clientes/despacho/remisionar',
            icon: <IoIcons.IoMdPeople />
          }
        ]
      },
      {
        title: 'Remisionar Pedidos (VMI/En Firme)',
        path: '/clientes/remisionarPedido',
        icon: <IoIcons.IoMdPeople />
      },
      {
        title: 'Modificar Remision Pedido',
        path: '/clientes/modRemisionPedido',
        icon:<IoIcons.IoMdPeople />,
        cName: 'sub-nav'
      },
      {
        title: 'Separar Pedidos',
        path: '/clientes/separarPedidos',
        icon: <IoIcons.IoMdPeople />
      },
      {
        title: 'Modificar Factura',
        path: '/clientes/modFactura',
        icon: <IoIcons.IoMdPeople />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Producto Terminado',
    path: '',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Lista de Precios',
        path: '/productoTerminado/listaPrecios',
        icon: <FaIcons.FaCartPlus />,
        cName: 'sub-nav'
      },
      {
        title: 'Otros Movimientos',
        path: '/productoTerminado/otrosMovimientos',
        icon: <FaIcons.FaCartPlus />
      },
      {
        title: 'Traslado Entre Bodegas',
        path: '/productoTerminado/trasladoEntreBodegas',
        icon: <FaIcons.FaCartPlus />,
        cName: 'sub-nav'
      },
      {
        title: 'Actualizar Costos Referencia',
        path: '/productoTerminado/actualizarCReferencia',
        icon: <FaIcons.FaCartPlus />
      },
      {
        title: 'Actualizar Costos Inventario',
        path: '/productoTerminado/actualizarCInventario',
        icon: <FaIcons.FaCartPlus />
      },
      {
        title: 'Actualizar Costos Ordenes Prod',
        path: '/productoTerminado/actualizarCOrdenes',
        icon: <FaIcons.FaCartPlus />
      },
      {
        title: 'Entrada por Compras',
        path: '/productoTerminado/entradaXCompras',
        icon: <FaIcons.FaCartPlus />,
        cName: 'sub-nav'
      },
      {
        title: 'Entrada Compras Orden de Compra',
        path: '/productoTerminado/entradaOrdenCompra',
        icon: <FaIcons.FaCartPlus />
      },
      {
        title: 'Traslado en Consignación',
        path: '/productoTerminado/trasladoConsignacion',
        icon: <FaIcons.FaCartPlus />
      },
      {
        title: 'Devolucion Factura Producto Terminado',
        path: '/productoTerminado/devFacProdTer',
        icon: <FaIcons.FaCartPlus />,
        cName: 'sub-nav'
      },
      {
        title: 'Traslado Entre Referencias',
        path: '/productoTerminado/trasladoEntreReferencias',
        icon: <FaIcons.FaCartPlus />
      },
      {
        title: 'Salida Muestra Producción',
        path: '/productoTerminado/salidaMuestraProd',
        icon: <FaIcons.FaCartPlus />
      }
    ]
  },
  {
    title: 'Consultas',
    path: '',
    icon: <RiIcons.RiPieChartFill />
  },
  {
    title: 'Inventario Fisico',
    path: '',
    icon: <FaIcons.FaEnvelopeOpenText />
  },
  {
    title: 'Gestion Administrativa',
    path: '',
    icon: <IoIcons.IoMdHelpCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Seguridad',
        path: '',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Cerrar Mes',
        path: '',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Indicadores de Gestion',
        path: '/indicadores-gestion',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Consulta Presupuesto Ventas',
        path: '/consulta-presupuesto-ventas',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Archivo Plano Mov Contable',
        path: 'archivo-plano-contable',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Modificar Mov Contable',
        path: '/mod-mov-cont',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reportes Contables',
        path: '',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reportes Iva',
        path: '',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reportes Retefuente',
        path: '',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Saldos Iniciales Cartera',
        path: '',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Consulta Ventas Caja General',
        path: '',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Rotacion Cartera',
        path: '',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Recordatorios Cartera',
        path: '',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Consulta Recordatorios Cartera',
        path: '',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Recaudar Kardex Insumos',
        path: '',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Actualizar Cartera Perdida',
        path: '',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Documentos Electronicos HGI',
        path: '',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Modificar Factura CXP',
        path: '',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  }
];
