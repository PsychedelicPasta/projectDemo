import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginCreate() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCreateAccount, setIsCreateAccount] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // You can add your login or create account logic here
  }

  return (
    <div>
      <h1>{isCreateAccount ? 'Create Account' : 'Login'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">{isCreateAccount ? 'Create Account' : 'Login'}</button>
      </form>
      <br />
      <div>
        {isCreateAccount ? (
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        ) : (
          <p>
            Need to create an account? <Link to="/create">Create Account</Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default LoginCreate;
