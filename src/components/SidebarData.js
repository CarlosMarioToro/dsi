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
            path: '/generales/centrocostos',
            icon: <AiIcons.AiFillPrinter/>
          },
          {
            title: 'Ciudades',
            path: '/generales/ciudades',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Clientes',
            path: '/generales/clientes',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Departamentos',
            path: '/generales/departamentos',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Empresas Transportadoras',
            path: '/generales/empresastransportadoras',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Paises',
            path: '/generales/paises',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Proveedores',
            path: '/generales/proveedores',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Presupuesto',
            path: '/generales/presupuesto',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Vendedores',
            path: '/generales/vendedoras',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Zonas',
            path: '/generales/zonas',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Barrios',
            path: '/generales/barrios',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Temporadas',
            path: '/generales/temporadas',
            icon: <AiIcons.AiFillCalculator />
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
            path: '/insumos/bodegas',
            icon: <AiIcons.AiFillPrinter/>,
            cName: 'sub-nav'
          },
          {
            title: 'Grupos Inventarios',
            path: '/insumos/gruposinventarios',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Maestro de Insumos',
            path: '/insumos/maestroinsumos',
            icon: <AiIcons.AiFillPrinter/>,
            cName: 'sub-nav'
          },
          {
            title: 'Subgrupos Inventarios',
            path: '/insumos/subgruposinventarios',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Unidades de Movimiento',
            path: '/insumos/unidadesmovimiento',
            icon: <AiIcons.AiFillCalculator />
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
            path: '/printer',
            icon: <AiIcons.AiFillPrinter/>,
            cName: 'sub-nav'
          },
          {
            title: 'Maestro de Gastos',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Subgrupo Gasos',
            path: '/printer',
            icon: <AiIcons.AiFillPrinter/>,
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
            path: '/administrativos/bancostransacciones',
            icon: <AiIcons.AiFillPrinter/>,
            cName: 'sub-nav'
          },
          {
            title: 'Bancos Proveedores',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'CIF',
            path: '/printer',
            icon: <AiIcons.AiFillPrinter/>,
            cName: 'sub-nav'
          },
          {
            title: 'Comision por Recauda',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Maestros Comprobantes',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Maestro de Conceptos',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Parámetros Consecutivos',
            path: '/printer',
            icon: <AiIcons.AiFillPrinter/>,
            cName: 'sub-nav'
          },
          {
            title: 'Parámetros Compras',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Parámetros Facturación',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Parámetros Generales',
            path: '/printer',
            icon: <AiIcons.AiFillPrinter/>,
            cName: 'sub-nav'
          },
          {
            title: 'Parámetros Impuestos',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Periodos',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
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
            path: '/printer',
            icon: <AiIcons.AiFillPrinter/>,
            cName: 'sub-nav'
          },
          {
            title: 'Crear Referencia Diseño',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Crear Referencia',
            path: '/printer',
            icon: <AiIcons.AiFillPrinter/>,
            cName: 'sub-nav'
          },
          {
            title: 'Colores',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Coleccion',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Festivos',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Lineas',
            path: '/printer',
            icon: <AiIcons.AiFillPrinter/>,
            cName: 'sub-nav'
          },
          {
            title: 'Moldes',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Marcas',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Maquinas Confeccion',
            path: '/printer',
            icon: <AiIcons.AiFillPrinter/>,
            cName: 'sub-nav'
          },
          {
            title: 'Operacion Confeccion',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Prendas',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Piezas',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Partes Prenda',
            path: '/printer',
            icon: <AiIcons.AiFillPrinter/>,
            cName: 'sub-nav'
          },
          {
            title: 'Pintas Produccion',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Procesos',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Tallas',
            path: '/printer',
            icon: <AiIcons.AiFillPrinter/>,
            cName: 'sub-nav'
          },
          {
            title: 'Imprimir Codigo Barras',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          },
          {
            title: 'Insumos Por Linea',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          }
        ]
      }
    ]
  },
  {
    title: 'Insumos',
    path: '',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Produccion',
    path: '',
    icon: <RiIcons.RiProductHuntFill/>
  },
  {
    title: 'Proveedores',
    path: '',
    icon: <FaIcons.FaEnvelopeOpenText />
  },
  {
    title: 'Clientes',
    path: '',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Producto Terminado',
    path: '',
    icon: <FaIcons.FaCartPlus />
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
