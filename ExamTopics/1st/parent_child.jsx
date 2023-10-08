// Example: 

// Filename: App.js In this file, we will embed the child component to the parent component. Also, we pass multiple props to the child component.

// import React, { Component } from 'react';
// import Child from './components/child.js';
 
// // Child component embedded to parent component
// // with props value
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>This is a parent component</h1>
//                 <ul>
//                     <li>
//                         <Child gfgcolor="green" usercolor="blue" />
//                     </li>
//                 </ul>
//             </div>
//         );
//     }
// }
 
// export default App;

 
// Filename: Child.js In the child.js file, we will access props from the parent component and render them inside the child component. 

// import React, { Component } from 'react';
 
// // Accessing the props value using this.props
// class Child extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>This is a child component</h1>
//                 <h1 style={{ color: this.props.gfgcolor }}>
//                     GeeksForGeeks
//                 </h1>
//                 <h1 style={{ color: this.props.usercolor }}>
//                     hello user
//                 </h1>
//             </div>
//         );
//     }
// }
 
// export default Child;
