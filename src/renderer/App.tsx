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
import AddArtist from './AddArtist';
import AddPickUpLocation from './AddPickUpLocation';
import AddDropOffLocation from './AddDropOffLocation';

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
      <br />
      <button type="button" onClick={() => navigate('addVehicle')}>
        Ajouter un véhicule
      </button>
      <button type="button" onClick={() => navigate('viewVehicles')}>
        Voir véhicules
      </button>
      <br />
      <button type="button" onClick={() => navigate('addArtist')}>
        Ajouter un artiste
      </button>
      <button type="button" onClick={() => navigate('addPickUpLocation')}>
        Ajouter un lieu de prise en charge
      </button>
      <button type="button" onClick={() => navigate('addDropOffLocation')}>
        Ajouter un lieu de dépose
      </button>
      <br />
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
        <Route path="/addArtist" element={<AddArtist />} />
        <Route path="/addPickUpLocation" element={<AddPickUpLocation />} />
        <Route path="/addDropOffLocation" element={<AddDropOffLocation />} />
      </Routes>
    </Router>
  );
}
