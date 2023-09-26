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
            title: 'Generales-Sub',
            path: '/printer',
            icon: <AiIcons.AiFillPrinter/>
          },
          {
            title: 'Generales-Sub2',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          }
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
            path: '/printer',
            icon: <AiIcons.AiFillPrinter/>,
            cName: 'sub-nav'
          },
          {
            title: 'Grupos Inventarios',
            path: '/calculator',
            icon: <AiIcons.AiFillCalculator />
          }
        ]
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
