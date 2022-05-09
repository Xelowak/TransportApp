import {
  MemoryRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import './App.css';
import AddDriver from './AddDriver';
import AddVehicle from './AddVehicle';

const Hello = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>TransportApp</h1>
      <button type="button" onClick={() => navigate('addDriver')}>
        Ajouter un conducteur
      </button>
      <button type="button" onClick={() => navigate('addVehicle')}>
        Ajouter un véhicule
      </button>
      <a
        href="https://github.com/sponsors/electron-react-boilerplate"
        target="_blank"
        rel="noreferrer"
      >
        <button type="button">Ajouter un trajet</button>
      </a>
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
      </Routes>
    </Router>
  );
}
