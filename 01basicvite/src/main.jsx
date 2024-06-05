import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click me to visit google',
};

function MyApp() {
  return (
    <div>
      <h1>Custome React App</h1>
    </div>
  );
}
const AnotherElement = (
  <a href='https://google.com' target='_blank'>
    Google
  </a>
);
const areactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit google'
);

ReactDOM.createRoot(document.getElementById('root')).render(areactElement);
