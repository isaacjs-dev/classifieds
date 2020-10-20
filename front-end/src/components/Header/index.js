import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderArea } from './styled'

const Header = () => {
  
  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="letter-01">O</span>
            <span className="letter-02">DEV</span>
            <span className="letter-03">X</span>
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link to="">Login</Link></li>
            <li><Link to="">Cadastrar</Link></li>
            <li><Link to="" className='button'>Anúncie Aqui</Link></li>
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
}

export default Header;