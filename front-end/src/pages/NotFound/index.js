import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  
  return (
    <div>
      404<br/>Página não encontrada
      <Link to="/">Voltar para a Home</Link>
    </div>
    
  );
}

export default NotFound;