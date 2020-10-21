import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderArea } from './styled'

import { isLogged } from '../../helpers/AuthHandler'

const Header = () => {
  const logged = isLogged();

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
            { logged && 
              <>
                <li><Link to="/my-account">Minha conta</Link></li>
                <li><Link to="/logout">Cadastrar</Link></li> 
                
              </>
            }
            { !logged && 
              <>
                <li><Link to="/signin">Login</Link></li>
                <li><Link to="/signup">Cadastrar</Link></li> 
              </>
            }
            <li><Link to={logged ? "/post-an-ad" : "/signin"} className='button'>Anúncie Aqui</Link></li>
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
}

export default Header;