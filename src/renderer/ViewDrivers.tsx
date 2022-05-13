import './App.css';
import { useNavigate } from 'react-router-dom';

/**
 * Page to view registered drivers.
 */
const ViewDrivers = () => {
  const navigate = useNavigate();
  const drivers = window.electron.store.getDrivers();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Adresse</th>
            <th>E-mail</th>
            <th>Macaron parking</th>
            <th>Accréditation</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => {
            return (
              <tr key={driver.email}>
                <th>{driver.name}</th>
                <th>{driver.address}</th>
                <th>{driver.email}</th>
                <th>{driver.hasParkingCard ? 'oui' : 'non'}</th>
                <th>{driver.isAccredited ? 'oui' : 'non'}</th>
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

export default ViewDrivers;
