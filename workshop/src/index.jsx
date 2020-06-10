import '../assets/stylesheets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

// const Hello = (props) => {
//   return <h1>Hello { props.firstName }</h1>;
// };

// shortcut rcc + tab
// change export class with export default
// comment out import React from 'react';
// to get rid of error message paste eslint-disable-next-line react/prefer-stateless-function

// import React, { Component } from 'react';

// // eslint-disable-next-line react/prefer-stateless-function
// export default class Hello extends Component {
//   render() {
//     return (
//       <h1>Hello { this.props.firstName }!</h1>
//     );
//   }
// }


// const reactContainer = document.querySelector("#root");
// ReactDOM.render(<Hello firstName="Yann" />, reactContainer);

const reactContainer = document.querySelector("#root");
ReactDOM.render(<App />, reactContainer);
