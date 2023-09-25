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
        <Route path='/printer' exact component={Printer} />
        <Route path='/calculator' exact component={Calculator} />
        <Route path='/indicadores-gestion' exact component={IndicadoresGestion} />
        <Route path='/consulta-presupuesto-ventas' exact component={ConsultaPresupuestoVentas} />
        <Route path='/archivo-plano-contable' exact component={ArchivoPlanoContable} />
        <Route path='/mod-mov-cont' exact component={ModificarMovContable} />
      </Routes>
    </Router>
  );
}

export default App;