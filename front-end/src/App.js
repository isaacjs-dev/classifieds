import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Template } from './components/MainComponents';
import Header from './components/Header'
import Footer from './components/Footer'

import Routes from './Routes';

import './App.css';

export default function App() {
  const email = useSelector(state => state.user.email);

  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routes />
        <Footer />
      </Template>
    </BrowserRouter>
  );
}