/**
 * Page to add an artist.
 */
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddArtist = () => {
  const [artistName, setArtistName] = useState('');
  const navigate = useNavigate();

  return (
    <div>
      <h2>Ajouter un artiste</h2>
      <input
        type="text"
        id="artist"
        name="artist"
        onChange={(event) => setArtistName(event.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          window.electron.store.addString('artists', artistName);
          console.log(window.electron.store.getStrings('artists'));
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

export default AddArtist;
