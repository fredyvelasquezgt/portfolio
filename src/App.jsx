/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Works from './components/Works/Works';
import './components/Navbar/Navbar.css';
import './components/Contact/Contact.css';
import './components/Works/Works.css';
import './App.css';

export function App() {
  return (
    <div>
      <Navbar />

      <Works />

      <Contact />

      <br />
      <br />
      <br />
      <br />

      <footer>
        <p>&copy; 2022. Hecho con ❤ en Guatemala.</p>
      </footer>
    </div>
  );
}

export default App;
