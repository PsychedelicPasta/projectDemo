import React from 'react';

function QuoteHistory() {
  const quotes = [
    { id: 1, name: 'John Doe', location: 'Dallas', amount: 100, date: '2022-03-01' },
    { id: 2, name: 'John Doe', location: 'Houston', amount: 200, date: '2022-03-02' },
    { id: 3, name: 'John Doe', location: 'Austin', amount: 300, date: '2022-03-03' },
    { id: 4, name: 'John Doe', location: 'San Antonio', amount: 400, date: '2022-03-04' },
    { id: 5, name: 'John Doe', location: 'Waco', amount: 500, date: '2022-03-05' },
    { id: 6, name: 'John Doe', location: 'Plano', amount: 600, date: '2022-03-06' },
    
  ];

  return (
    <div>
      <h2>Quote History</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote) => (
            <tr key={quote.id}>
              <td>{quote.id}</td>
              <td>{quote.name}</td>
              <td>{quote.location}</td>
              <td>{quote.amount}</td>
              <td>{quote.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
        <br />
      <a href="/calculator">Get a new quote</a>
      <br></br>
      <a href="/dashboard">Return to dashboard</a>
    </div>
  );
}

export default QuoteHistory;
