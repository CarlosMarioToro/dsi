import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Printer from './pages/Archivo/Printer';
import Calculator from './pages/Archivo/Calculator';
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
import IndicadoresGestion from './pages/GestionAdministrativa/IndicadoresGestion';
import ConsultaPresupuestoVentas from './pages/GestionAdministrativa/ConsultaPresupuestoVentas';
import ArchivoPlanoContable from './pages/GestionAdministrativa/ArchivoPlanoContable';
import ModificarMovContable from './pages/GestionAdministrativa/ModificarMovContable';
import BancosTransacciones from './pages/Maestros/Administrativos/BancosTransacciones';
import Bodegas from './pages/Maestros/Insumos/Bodegas';
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

        <Route exact path='/generales/centrocostos' element={<CentroCostos/>} />
        <Route exact path='/generales/ciudades' element={<Ciudades/>} />
        <Route exact path='/generales/clientes' element={<Clientes/>} />
        <Route exact path='/generales/departamentos' element={<Departamentos/>} />
        <Route exact path='/generales/empresastransportadoras' element={<EmpTransportadoras/>} />
        <Route exact path='/generales/paises' element={<Paises/>} />
        <Route exact path='/generales/proveedores' element={<Proveedores/>} />
        <Route exact path='/generales/presupuesto' element={<Presupuesto/>} />
        <Route exact path='/generales/vendedoras' element={<Vendedoras/>} />
        <Route exact path='/generales/zonas' element={<Zonas/>} />
        <Route exact path='/generales/barrios' element={<Barrios/>} />
        <Route exact path='/generales/temporadas' element={<Temporadas/>} />
        
        <Route exact path='/insumos/bodegas' element={<Bodegas/>} />
        <Route exact path='/insumos/gruposinventarios' element={<Calculator/>} />
        <Route exact path='/insumos/maestroinsumos' element={<Calculator/>} />
        <Route exact path='/insumos/subgruposinventarios' element={<Calculator/>} />
        <Route exact path='/insumos/unidadesmovimiento' element={<Calculator/>} />

        <Route exact path='/administrativos/bancostransacciones' element={<BancosTransacciones/>} />
        <Route exact path='/administrativos/ciudades' element={<Calculator/>} />
        <Route exact path='/administrativos/clientes' element={<Calculator/>} />
        <Route exact path='/administrativos/departamentos' element={<Calculator/>} />
        <Route exact path='/administrativos/empresastransportadoras' element={<Calculator/>} />
        <Route exact path='/administrativos/paises' element={<Calculator/>} />
        <Route exact path='/administrativos/proveedores' element={<Calculator/>} />
        <Route exact path='/administrativos/presupuesto' element={<Calculator/>} />
        <Route exact path='/administrativos/vendedoras' element={<Calculator/>} />
        <Route exact path='/administrativos/zonas' element={<Calculator/>} />
        <Route exact path='/administrativos/barrios' element={<Calculator/>} />
        <Route exact path='/administrativos/temporadas' element={<Calculator/>} />

        <Route exact path='/indicadores-gestion' element={<IndicadoresGestion/>} />
        <Route exact path='/consulta-presupuesto-ventas' element={<ConsultaPresupuestoVentas/>} />
        <Route exact path='/archivo-plano-contable' element={<ArchivoPlanoContable/>} />
        <Route exact path='/mod-mov-cont' element={<ModificarMovContable/>} />
      </Routes>
    </Router>
  );
}

export default App;