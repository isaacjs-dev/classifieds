import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  const email = useSelector(state => state.user.email);

  return (
    <BrowserRouter>
      <div>Olá Mundo {email} </div>
    </BrowserRouter>
  );
}