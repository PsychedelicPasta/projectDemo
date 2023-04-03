import React, { useState } from 'react';

function FuelQuote() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform form validation and quote submission here
    console.log(`Submitted fuel quote for ${name} in ${location} for ${amount} gallons on ${date}`);
  };

  return (
    <div>
      <h2>Fuel Quote</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Get Quote</button>
      </form>
      <br />
        <a href="/history">View Quote History</a>
        <br></br>
        <a href="/dashboard">Return to dashboard</a>
    </div>
  );
}

export default FuelQuote;
