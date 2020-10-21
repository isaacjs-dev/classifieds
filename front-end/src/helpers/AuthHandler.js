import Cookies from 'js-cookie';

export const isLogged = () => Cookies.get('token') ? true : false ;

