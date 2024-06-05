// an element is needed
// react sees everything as an Object {}
// what are the 'props' attributes needed for the app

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'click me to visit google',
};

document.querySelector('#root');
