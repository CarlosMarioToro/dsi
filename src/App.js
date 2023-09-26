import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Printer from './pages/Printer';
import Calculator from './pages/Calculator';
import IndicadoresGestion from './pages/IndicadoresGestion';
import ConsultaPresupuestoVentas from './pages/ConsultaPresupuestoVentas';
import ArchivoPlanoContable from './pages/ArchivoPlanoContable';
import ModificarMovContable from './pages/ModificarMovContable';
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
        <Route exact path='/printer' element={<Printer/>} />
        <Route exact path='/calculator' element={<Calculator/>} />
        <Route exact path='/indicadores-gestion' element={<IndicadoresGestion/>} />
        <Route exact path='/consulta-presupuesto-ventas' element={<ConsultaPresupuestoVentas/>} />
        <Route exact path='/archivo-plano-contable' element={<ArchivoPlanoContable/>} />
        <Route exact path='/mod-mov-cont' element={<ModificarMovContable/>} />
      </Routes>
    </Router>
  );
}

export default App;