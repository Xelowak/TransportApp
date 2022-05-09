import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Vehicle from '../objects/Vehicle';

/**
 * Page to add a vehicle.
 */
const AddVehicle = () => {
  const [vfNumber, setVfNumber] = useState(0);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [seats, setSeats] = useState(0);
  const [registration, setRegistration] = useState('');

  const navigate = useNavigate();
  const handleSubmit = () => {
    const vehicle = new Vehicle({
      vfNumber,
      brand,
      model,
      seats,
      registration,
    });
    console.log(vehicle);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="vfnumber">
          Numéro VF :
          <input
            type="number"
            id="vfnumber"
            name="vfnumber"
            onChange={(event) => setVfNumber(parseInt(event.target.value, 10))}
          />
        </label>
        <br />
        <label htmlFor="brand">
          Marque :
          <input
            type="text"
            id="brand"
            name="brand"
            onChange={(event) => setBrand(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="model">
          Modèle :
          <input
            type="text"
            id="model"
            name="model"
            onChange={(event) => setModel(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="seats">
          Nombre de places :
          <input
            type="number"
            id="seats"
            name="seats"
            onChange={(event) => setSeats(parseInt(event.target.value, 10))}
          />
        </label>
        <br />
        <label htmlFor="registration">
          Immatriculation cantonale :
          <input
            type="text"
            id="registration"
            name="registration"
            onChange={(event) => setRegistration(event.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Ajouter" onClick={handleSubmit} />
      </form>
      <button type="button" onClick={() => navigate('../')}>
        Annuler
      </button>
    </div>
  );
};

export default AddVehicle;
