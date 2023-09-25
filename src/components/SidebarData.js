import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Archivo',
    path: '',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Configurar Impresora',
        path: '/printer',
        icon: <AiIcons.AiFillPrinter/>
      },
      {
        title: 'Calculadora',
        path: '/calculator',
        icon: <AiIcons.AiFillCalculator />
      }
    ]
  },
  {
    title: 'Maestros',
    path: '/reports',
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
      },
      {
        title: 'Insumos',
        path: '',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Gastos',
        path: '',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Administrativos',
        path: '',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Produccion',
        path: '',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Insumos',
    path: '/products',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Produccion',
    path: '/team',
    icon: <RiIcons.RiProductHuntFill/>
  },
  {
    title: 'Proveedores',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />
  },
  {
    title: 'Clientes',
    path: '/support',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Producto Terminado',
    path: '/products',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Consultas',
    path: '/team',
    icon: <RiIcons.RiPieChartFill />
  },
  {
    title: 'Inventario Fisico',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />
  },
  {
    title: 'Gestion Administrativa',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Seguridad',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Cerrar Mes',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Indicadores de Gestion',
        path: '/indicadores-gestion',
        icon: <IoIcons.IoIosPaper />
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
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Modificar Mov Contable',
        path: '/mod-mov-cont',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reportes Contables',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reportes Iva',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Reportes Retefuente',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Saldos Iniciales Cartera',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Consulta Ventas Caja General',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Rotacion Cartera',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Recordatorios Cartera',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Consulta Recordatorios Cartera',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Recaudar Kardex Insumos',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Actualizar Cartera Perdida',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Documentos Electronicos HGI',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Modificar Factura CXP',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  }
];
