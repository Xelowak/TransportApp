/**
 * Page to add a drop off location.
 */
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddDropOffLocation = () => {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  return (
    <div>
      <h2>Ajouter un lieu de dépose</h2>
      <input
        type="text"
        id="dropOffLoc"
        name="dropOffLoc"
        onChange={(event) => setLocation(event.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          window.electron.store.addString('dropOffLocations', location);
          console.log(window.electron.store.getStrings('dropOffLocations'));
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

export default AddDropOffLocation;
