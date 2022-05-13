import './App.css';
import { useNavigate } from 'react-router-dom';

/**
 * Page to see registered vehicles.
 */
const ViewVehicles = () => {
  const navigate = useNavigate();
  const vehicles = window.electron.store.getVehicles();

  return (
    <div>
      <h2>Véhicules</h2>
      <table>
        <thead>
          <tr>
            <th>Numéro VF</th>
            <th>Marque</th>
            <th>Modèle</th>
            <th>Nombre de places</th>
            <th>Immatriculation cantonale</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => {
            return (
              <tr key={vehicle.registration}>
                <th>{vehicle.vfNumber}</th>
                <th>{vehicle.brand}</th>
                <th>{vehicle.model}</th>
                <th>{vehicle.seats}</th>
                <th>{vehicle.registration}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button type="button" onClick={() => navigate('../')}>
        Retour
      </button>
    </div>
  );
};

export default ViewVehicles;
