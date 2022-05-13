import {
  MemoryRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import './App.css';
import AddDriver from './AddDriver';
import AddVehicle from './AddVehicle';
import ViewDrivers from './ViewDrivers';
import ViewVehicles from './ViewVehicles';

const Hello = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>TransportApp</h1>
      <button type="button" onClick={() => navigate('addDriver')}>
        Ajouter un conducteur
      </button>
      <button type="button" onClick={() => navigate('viewDrivers')}>
        Voir conducteurs
      </button>
      <button type="button" onClick={() => navigate('addVehicle')}>
        Ajouter un véhicule
      </button>
      <button type="button" onClick={() => navigate('viewVehicles')}>
        Voir véhicules
      </button>
      <button
        type="button"
        onClick={() => {
          window.electron.store.clear();
          console.log('Storage cleared');
        }}
      >
        Clear storage
      </button>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/addDriver" element={<AddDriver />} />
        <Route path="/addVehicle" element={<AddVehicle />} />
        <Route path="/viewDrivers" element={<ViewDrivers />} />
        <Route path="/viewVehicles" element={<ViewVehicles />} />
      </Routes>
    </Router>
  );
}
