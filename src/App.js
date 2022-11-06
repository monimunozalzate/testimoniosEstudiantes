import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos</h1>
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='Emma'
          descFoto='Foto de Emma'
          cargo='Ingeniero de Software'
          empresa='Spotify'
          testimonio='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni laborum aut eligendi, quam tempore qui natus, nam sunt quae earum consequuntur sint? Eos labore iusto at atque, non hic exercitationem!' />
        <Testimonio
          nombre='Shawn Pepito'
          pais='Singapur'
          imagen='Juan'
          descFoto="Foto de Juan"
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni laborum aut eligendi, quam tempore qui natus, nam sunt quae earum consequuntur sint? Eos labore iusto at atque, non hic exercitationem!' />
        <Testimonio
          nombre='Sara Chima'
          pais='Nigeria'
          imagen='Sara'
          descFoto='Foto de Sara'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni laborum aut eligendi, quam tempore qui natus, nam sunt quae earum consequuntur sint? Eos labore iusto at atque, non hic exercitationem!' />
      </div>
      
    </div>
  );
}

export default App;
