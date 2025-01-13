import React from 'react';
import './styles/globals.css'; 

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Enter from './components/auth/Registration';

function SafeComponent(Component) {
  try {
    return React.createElement(Component, null);
  } catch (error) {
    console.error(`Error in component: ${Component.name}`, error);
    return React.createElement('div', null, `Error in ${Component.name}`);
  }
}

function App() {
  return React.createElement(
    'div',
    { className: 'min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white' },
    SafeComponent(Header),
    React.createElement('main', null,
      SafeComponent(Enter)
    ),
    SafeComponent(Footer)
  );
}

export default App;
