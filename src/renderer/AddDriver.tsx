import './App.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Driver, { DayParts } from '../objects/Driver';

/**
 * Page to add a Driver.
 */
const AddDriver = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [isAccredited, setIsAccredited] = useState(false);
  const [hasParkingCard, setHasParkingCard] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = () => {
    window.electron.store.addDriver(
      new Driver({
        name,
        address,
        email,
        isAccredited,
        hasParkingCard,
        availability: new Map<Date, DayParts[]>([
          [new Date(Date.now()), [DayParts.DAY]],
        ]),
      })
    );
    console.log(window.electron.store.getDrivers());
  };

  return (
    <div>
      <form>
        <label htmlFor="name">
          Nom et prénom :
          <input
            type="text"
            id="name"
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="address">
          Addresse :
          <input
            type="text"
            id="address"
            name="address"
            onChange={(event) => setAddress(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="email">
          E-mail :
          <input
            type="text"
            id="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="isAccredited">
          Accréditation :
          <input
            type="checkbox"
            id="isAccredited"
            name="isAccredited"
            onChange={(event) => setIsAccredited(event.target.checked)}
          />
        </label>
        <br />
        <label htmlFor="hasParkingCard">
          Macaron parking :
          <input
            type="checkbox"
            id="hasParkingCard"
            name="hasParkingCard"
            onChange={(event) => setHasParkingCard(event.target.checked)}
          />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Ajouter
        </button>
      </form>
      <button type="button" onClick={() => navigate('../')}>
        Annuler
      </button>
    </div>
  );
};

export default AddDriver;
