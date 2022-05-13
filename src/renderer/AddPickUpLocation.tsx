/**
 * Page to add a pick up location.
 */
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddPickUpLocation = () => {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  return (
    <div>
      <h2>Ajouter un lieu de prise en charge</h2>
      <input
        type="text"
        id="dropOffLoc"
        name="dropOffLoc"
        onChange={(event) => setLocation(event.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          window.electron.store.addString('pickUpLocations', location);
          console.log(window.electron.store.getStrings('pickUpLocations'));
        }}
      >
        Ajouter
      </button>
      <button type="button" onClick={() => navigate('../')}>
        Annuler
      </button>
    </div>
  );
};

export default AddPickUpLocation;
