import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// Menu Archivo
import Printer from './pages/Archivo/Printer';
import Calculator from './pages/Archivo/Calculator';
// Menu Maestros
import CentroCostos from './pages/Maestros/Generales/CentroCostos'
import Ciudades from './pages/Maestros/Generales/Ciudades'
import Clientes from './pages/Maestros/Generales/Clientes'
import Departamentos from './pages/Maestros/Generales/Departamentos'
import EmpTransportadoras from './pages/Maestros/Generales/EmpTransportadoras'
import Paises from './pages/Maestros/Generales/Paises'
import Proveedores from './pages/Maestros/Generales/Proveedores'
import Presupuesto from './pages/Maestros/Generales/Presupuesto'
import Vendedoras from './pages/Maestros/Generales/Vendedoras'
import Zonas from './pages/Maestros/Generales/Zonas'
import Barrios from './pages/Maestros/Generales/Barrios'
import Temporadas from './pages/Maestros/Generales/Temporadas'
import Bodegas from './pages/Maestros/Insumos/Bodegas';
import GruposInventarios from './pages/Maestros/Insumos/GruposInventarios';
import MaestroInsumos from './pages/Maestros/Insumos/MaestroInsumos';
import SubGrupoInv from './pages/Maestros/Insumos/SubGrupoInv';
import UnidadesMov from './pages/Maestros/Insumos/UnidadesMov';
import GrupoGastos from './pages/Maestros/Gastos/GrupoGastos';
import MaestroGastos from './pages/Maestros/Gastos/MaestroGastos';
import SubgrupoGastos from './pages/Maestros/Gastos/SubgrupoGastos';
import BancosTransacciones from './pages/Maestros/Administrativos/BancosTransacciones';
import BancosProveedores from './pages/Maestros/Administrativos/BancosProveedores';
import Cif from './pages/Maestros/Administrativos/Cif';
import ComisionRecaudo from './pages/Maestros/Administrativos/ComisionRecaudo';
import MaestrosComprobantes from './pages/Maestros/Administrativos/MaestrosComprobantes';
import MaestroConceptos from './pages/Maestros/Administrativos/MaestroConceptos';
import ParamConsecutivos from './pages/Maestros/Administrativos/ParamConsecutivos';
import ParamCompras from './pages/Maestros/Administrativos/ParamCompras';
import ParamConfiguracion from './pages/Maestros/Administrativos/ParamConfiguracion';
import ParamGrales from './pages/Maestros/Administrativos/ParamGrales';
import ParamImpuestos from './pages/Maestros/Administrativos/ParamImpuestos';
import Periodos from './pages/Maestros/Administrativos/Periodos';
import AuditProcesos from './pages/Maestros/Produccion/AuditProcesos';
import CrearRefDiseno from './pages/Maestros/Produccion/CrearRefDiseno';
import CrearRef from './pages/Maestros/Produccion/CrearRef';
import Colores from './pages/Maestros/Produccion/Colores';
import Coleccion from './pages/Maestros/Produccion/Coleccion';
import Festivos from './pages/Maestros/Produccion/Festivos';
import Lineas from './pages/Maestros/Produccion/Lineas';
import Moldes from './pages/Maestros/Produccion/Moldes';
import Marcas from './pages/Maestros/Produccion/Marcas';
import MaquinasConfeccion from './pages/Maestros/Produccion/MaquinasConfeccion';
import OperacionesConfeccion from './pages/Maestros/Produccion/OperacionesConfeccion';
import Prendas from './pages/Maestros/Produccion/Prendas';
import Piezas from './pages/Maestros/Produccion/Piezas';
import PartesPrendas from './pages/Maestros/Produccion/PartesPrendas';
import PintasProd from './pages/Maestros/Produccion/PintasProd';
import Procesos from './pages/Maestros/Produccion/Procesos';
import Tallas from './pages/Maestros/Produccion/Tallas';
import ImpCodBarr from './pages/Maestros/Produccion/ImpCodBarr';
import InsumosLinea from './pages/Maestros/Produccion/InsumosLinea';
// Menu Insumos
import OrdenCompra from './pages/Insumos/OrdenCompra';
import OrdenCompraProdInsumos from './pages/Insumos/OrdenCompraProdInsumos';
import OrdenCompraPedidos from './pages/Insumos/OrdenCompraPedidos';
import OrdenCompraProdTelas from './pages/Insumos/OrdenCompraProdTelas';
import EntradaCompraconOC from './pages/Insumos/EntradaCompraconOC';
import EntradaCompracsinOC from './pages/Insumos/EntradaCompracsinOC';
import EntradaComprasProvOC from './pages/Insumos/EntradaComprasProvOC';
import DevolCompras from './pages/Insumos/DevolCompras';
import OtrosMov from './pages/Insumos/OtrosMov';
import PlanearComprasMP from './pages/Insumos/PlanearComprasMP';
import TrasladoBodegas from './pages/Insumos/TrasladoBodegas';
import SalidaInsumosRepro from './pages/Insumos/SalidaInsumosRepro';
import EntradaInsumosRepro from './pages/Insumos/EntradaInsumosRepro';
// Menu Produccion
import Pedidos from './pages/Produccion/Pedidos';
import PedidosExcelTalla from './pages/Produccion/PedidosExcelTalla';
import RegistrarTrazo from './pages/Produccion/RegistrarTrazo';
import OrdenProduccion from './pages/Produccion/OrdenProduccion';
import Movimientos from './pages/Produccion/Movimientos';
import DespachoInsOP from './pages/Produccion/DespachoInsOP';
import DespachoTelasOP from './pages/Produccion/DespachoTelasOP';
import DevolInsOP from './pages/Produccion/DevolInsOP';
import DevolTelasOP from './pages/Produccion/DevolTelasOP';
import RecalcOP from './pages/Produccion/RecalcOP';
import ModificarOP from './pages/Produccion/ModificarOP';
import AnularMov from './pages/Produccion/AnularMov';
import InactivarRefPedido from './pages/Produccion/InactivarRefPedido';
import CopiarPedido from './pages/Produccion/CopiarPedido';
import EntradaProcCodBar from './pages/Produccion/EntradaProcCodBar';
import RemOtrosConc from './pages/Produccion/RemOtrosConc';
// Menu Proveedores
import RegistrarGastos from './pages/Proveedores/RegistrarGastos';
import NotasCredito from './pages/Proveedores/NotasCredito';
import EgresoProveedores from './pages/Proveedores/EgresoProveedores';
import EgresosLibres from './pages/Proveedores/EgresosLibres';
import EgresosCajaMenor from './pages/Proveedores/EgresosCajaMenor';
import EgresoNomina from './pages/Proveedores/EgresoNomina';
import ModificarEgreso from './pages/Proveedores/ModificarEgreso';
import AplicarNotaCredito from './pages/Proveedores/AplicarNotaCredito';
import AplicarEgreso from './pages/Proveedores/AplicarEgreso';
import FacturaCompras from './pages/Proveedores/Anular/FacturaCompras';
import Egreso from './pages/Proveedores/Anular/Egreso';
import NotaCredito from './pages/Proveedores/Anular/NotaCredito';
import RadicarFacInsumos from './pages/Proveedores/RadicarFacInsumos';
import RadicarFacProcesos from './pages/Proveedores/RadicarFacProcesos';
import AprobarPagos from './pages/Proveedores/AprobarPagos';
// Menu Clientes
import FacturarPedidos from './pages/Clientes/Facturar/FacturarPedidos';
import FacturarRemisiones from './pages/Clientes/Facturar/FacturarRemisiones';
import FacturarOtros from './pages/Clientes/Facturar/FacturarOtros';
import FacturarCodBarras from './pages/Clientes/Facturar/FacturarCodBarras';
import Vmi from './pages/Clientes/Facturar/Vmi';
import Pdv from './pages/Clientes/Facturar/Pdv';
import Factura from './pages/Clientes/Devoluciones/Factura';
import Referencia from './pages/Clientes/Devoluciones/Referencia';
import CodBarras from './pages/Clientes/Devoluciones/CodBarras';
import NotaCreditoClientes from './pages/Clientes/NotaCreditoClientes';
import ReciboCajaClientes from './pages/Clientes/ReciboCajaClientes';
import ModificarReciboCaja from './pages/Clientes/ModificarReciboCaja';
import AplicarNotaCreditoCliente from './pages/Clientes/AplicarNotaCredito';
import AplicarReciboCaja from './pages/Clientes/AplicarReciboCaja';
import AnularNotaCredito from './pages/Clientes/Anular/AnularNotaCredito';
import AnularReciboCaja from './pages/Clientes/Anular/AnularReciboCaja';
//
import IndicadoresGestion from './pages/GestionAdministrativa/IndicadoresGestion';
import ConsultaPresupuestoVentas from './pages/GestionAdministrativa/ConsultaPresupuestoVentas';
import ArchivoPlanoContable from './pages/GestionAdministrativa/ArchivoPlanoContable';
import ModificarMovContable from './pages/GestionAdministrativa/ModificarMovContable';
// import Login from './components/Login';
// import useToken from './customHook/useToken';

function App() {
  // const { token, setToken } = useToken();

  // if(!token){
  //   return <Login setToken={setToken}/>
  // }
  
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route exact path='/archivo/printer' element={<Printer/>} />
        <Route exact path='/archivo/calculator' element={<Calculator/>} />

        <Route exact path='maestros/generales/centrocostos' element={<CentroCostos/>} />
        <Route exact path='maestros/generales/ciudades' element={<Ciudades/>} />
        <Route exact path='maestros/generales/clientes' element={<Clientes/>} />
        <Route exact path='maestros/generales/departamentos' element={<Departamentos/>} />
        <Route exact path='maestros/generales/empresastransportadoras' element={<EmpTransportadoras/>} />
        <Route exact path='maestros/generales/paises' element={<Paises/>} />
        <Route exact path='maestros/generales/proveedores' element={<Proveedores/>} />
        <Route exact path='maestros/generales/presupuesto' element={<Presupuesto/>} />
        <Route exact path='maestros/generales/vendedoras' element={<Vendedoras/>} />
        <Route exact path='maestros/generales/zonas' element={<Zonas/>} />
        <Route exact path='maestros/generales/barrios' element={<Barrios/>} />
        <Route exact path='maestros/generales/temporadas' element={<Temporadas/>} />
        
        <Route exact path='maestros/insumos/bodegas' element={<Bodegas/>} />
        <Route exact path='maestros/insumos/gruposinventarios' element={<GruposInventarios/>} />
        <Route exact path='maestros/insumos/maestroinsumos' element={<MaestroInsumos/>} />
        <Route exact path='maestros/insumos/subgruposinventarios' element={<SubGrupoInv/>} />
        <Route exact path='maestros/insumos/unidadesmovimiento' element={<UnidadesMov/>} />

        <Route exact path='maestros/gastos/grupo' element={<GrupoGastos/>} />
        <Route exact path='maestros/gastos/maestro' element={<MaestroGastos/>} />
        <Route exact path='maestros/gastos/subgrupo' element={<SubgrupoGastos/>} />

        <Route exact path='maestros/administrativos/bancostransacciones' element={<BancosTransacciones/>} />
        <Route exact path='maestros/administrativos/bancosproveedores' element={<BancosProveedores/>} />
        <Route exact path='maestros/administrativos/cif' element={<Cif/>} />
        <Route exact path='maestros/administrativos/comisionrecaudo' element={<ComisionRecaudo/>} />
        <Route exact path='maestros/administrativos/maestroscomprobantes' element={<MaestrosComprobantes/>} />
        <Route exact path='maestros/administrativos/maestrosconceptos' element={<MaestroConceptos/>} />
        <Route exact path='maestros/administrativos/paramconsecutivos' element={<ParamConsecutivos/>} />
        <Route exact path='maestros/administrativos/paramcompras' element={<ParamCompras/>} />
        <Route exact path='maestros/administrativos/paramfacturacion' element={<ParamConfiguracion/>} />
        <Route exact path='maestros/administrativos/paramgrales' element={<ParamGrales/>} />
        <Route exact path='maestros/administrativos/paramimpuestos' element={<ParamImpuestos/>} />
        <Route exact path='maestros/administrativos/periodos' element={<Periodos/>} />
        
        <Route exact path='maestros/produccion/auditoresprocesos' element={<AuditProcesos/>} />
        <Route exact path='maestros/produccion/crearrefdiseno' element={<CrearRefDiseno/>} />
        <Route exact path='maestros/produccion/crearref' element={<CrearRef/>} />
        <Route exact path='maestros/produccion/colores' element={<Colores/>} />
        <Route exact path='maestros/produccion/coleccion' element={<Coleccion/>} />
        <Route exact path='maestros/produccion/festivos' element={<Festivos/>} />
        <Route exact path='maestros/produccion/lineas' element={<Lineas/>} />
        <Route exact path='maestros/produccion/moldes' element={<Moldes/>} />
        <Route exact path='maestros/produccion/marcas' element={<Marcas/>} />
        <Route exact path='maestros/produccion/maquinasconfeccion' element={<MaquinasConfeccion/>} />
        <Route exact path='maestros/produccion/operacionconfeccion' element={<OperacionesConfeccion/>} />
        <Route exact path='maestros/produccion/prendas' element={<Prendas/>} />
        <Route exact path='maestros/produccion/piezas' element={<Piezas/>} />
        <Route exact path='maestros/produccion/partesprendas' element={<PartesPrendas/>} />
        <Route exact path='maestros/produccion/pintasproduccion' element={<PintasProd/>} />
        <Route exact path='maestros/produccion/procesos' element={<Procesos/>} />
        <Route exact path='maestros/produccion/tallas' element={<Tallas/>} />
        <Route exact path='maestros/produccion/imprimircodbarras' element={<ImpCodBarr/>} />
        <Route exact path='maestros/produccion/insumoslinea' element={<InsumosLinea/>} />

        <Route exact path='insumos/ordencompra' element={<OrdenCompra/>} />
        <Route exact path='insumos/ordencompraprodinsumos' element={<OrdenCompraProdInsumos/>} />
        <Route exact path='insumos/ordencomprapedidos' element={<OrdenCompraPedidos/>} />
        <Route exact path='insumos/ordencompraprodtelas' element={<OrdenCompraProdTelas/>} />
        <Route exact path='insumos/entradacompraOC' element={<EntradaCompraconOC/>} />
        <Route exact path='insumos/entradacomprasinOC' element={<EntradaCompracsinOC/>} />
        <Route exact path='insumos/entradacompraprovOC' element={<EntradaComprasProvOC/>} />
        <Route exact path='insumos/devolcompras' element={<DevolCompras/>} />
        <Route exact path='insumos/otrosmov' element={<OtrosMov/>} />
        <Route exact path='insumos/plancomprasMP' element={<PlanearComprasMP/>} />
        <Route exact path='insumos/trasladoentrebodegas' element={<TrasladoBodegas/>} />
        <Route exact path='insumos/salidainsumosrepro' element={<SalidaInsumosRepro/>} />
        <Route exact path='insumos/entradasinsumosrepro' element={<EntradaInsumosRepro/>} />

        <Route exact path='/produccion/pedidos' element={<Pedidos/>} />
        <Route exact path='/produccion/pedidosExcelTalla' element={<PedidosExcelTalla/>} />
        <Route exact path='/produccion/registrarTrazo' element={<RegistrarTrazo/>} />
        <Route exact path='/produccion/ordenProduccion' element={<OrdenProduccion/>} />
        <Route exact path='/produccion/movimientos' element={<Movimientos/>} />
        <Route exact path='/produccion/despachoInsumos' element={<DespachoInsOP/>} />
        <Route exact path='/produccion/despachoTelas' element={<DespachoTelasOP/>} />
        <Route exact path='/produccion/devolucionInsumos' element={<DevolInsOP/>} />
        <Route exact path='/produccion/devolucionTelas' element={<DevolTelasOP/>} />
        <Route exact path='/produccion/recalcularOP' element={<RecalcOP/>} />
        <Route exact path='/produccion/modificarOP' element={<ModificarOP/>} />
        <Route exact path='/produccion/anularMovimiento' element={<AnularMov/>} />
        <Route exact path='/produccion/inactivarRefPed' element={<InactivarRefPedido/>} />
        <Route exact path='/produccion/copiarPedido' element={<CopiarPedido/>} />
        <Route exact path='/produccion/entradaProcCodBar' element={<EntradaProcCodBar/>} />
        <Route exact path='/produccion/remisionOtrosConcepto' element={<RemOtrosConc/>} />

        <Route exact path='/proveedores/registrarGastos' element={<RegistrarGastos/>} />
        <Route exact path='/proveedores/notasCredito' element={<NotasCredito/>} />
        <Route exact path='/proveedores/egresosProveedores' element={<EgresoProveedores/>} />
        <Route exact path='/proveedores/egresosLibres' element={<EgresosLibres/>} />
        <Route exact path='/proveedores/egresosCajaMenor' element={<EgresosCajaMenor/>} />
        <Route exact path='/proveedores/egresoNomina' element={<EgresoNomina/>} />
        <Route exact path='/proveedores/modificarEgresos' element={<ModificarEgreso/>} />
        <Route exact path='/proveedores/aplicarNotaCredito' element={<AplicarNotaCredito/>} />
        <Route exact path='/proveedores/aplicarEgreso' element={<AplicarEgreso/>} />
        <Route exact path='/proveedores/anular/facturaCompras' element={<FacturaCompras/>} />
        <Route exact path='/proveedores/anular/egreso' element={<Egreso/>} />
        <Route exact path='/proveedores/anular/notaCredito' element={<NotaCredito/>} />
        <Route exact path='/proveedores/radicarFacturaInsumos' element={<RadicarFacInsumos/>} />
        <Route exact path='/proveedores/radicarFacturasProcesos' element={<RadicarFacProcesos/>} />
        <Route exact path='/proveedores/aprobarPagos' element={<AprobarPagos/>} />

        <Route exact path='/clientes/facturar/pedidos' element={<FacturarPedidos/>} />
        <Route exact path='/clientes/facturar/remisiones' element={<FacturarRemisiones/>} />
        <Route exact path='/clientes/facturar/otrosConceptos' element={<FacturarOtros/>} />
        <Route exact path='/clientes/facturar/codBarras' element={<FacturarCodBarras/>} />
        <Route exact path='/clientes/facturar/vmi' element={<Vmi/>} />
        <Route exact path='/clientes/facturar/pdv' element={<Pdv/>} />
        <Route exact path='/clientes/devoluciones/factura' element={<Factura/>} />
        <Route exact path='/clientes/devoluciones/referencia' element={<Referencia/>} />
        <Route exact path='/clientes/devoluciones/codBarras' element={<CodBarras/>} />
        <Route exact path='/clientes/notaCredito' element={<NotaCreditoClientes/>} />
        <Route exact path='/clientes/reciboCaja' element={<ReciboCajaClientes/>} />
        <Route exact path='/clientes/modificarReciboCaja' element={<ModificarReciboCaja/>} />
        <Route exact path='/clientes/aplicarNotaCredito' element={<AplicarNotaCreditoCliente/>} />
        <Route exact path='/clientes/aplicarReciboCaja' element={<AplicarReciboCaja/>} />
        <Route exact path='/clientes/anular/notaCredito' element={<AnularNotaCredito/>} />
        <Route exact path='/clientes/anular/reciboCaja' element={<AnularReciboCaja/>} />

        <Route exact path='/indicadores-gestion' element={<IndicadoresGestion/>} />
        <Route exact path='/consulta-presupuesto-ventas' element={<ConsultaPresupuestoVentas/>} />
        <Route exact path='/archivo-plano-contable' element={<ArchivoPlanoContable/>} />
        <Route exact path='/mod-mov-cont' element={<ModificarMovContable/>} />
      </Routes>
    </Router>
  );
}

export default App;