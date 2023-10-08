// GET API => Fetch()

// Defination 
// The fetch() method starts the process of fetching a resource from a server.

// The fetch() method returns a Promise that resolves to a Response object.


// Syntax
// fetch(file)

// Syntax :

// Example :

// import React from "react";
// import './App.css';
// class App extends React.Component {

// 	// Constructor 
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			items: [],
// 			DataisLoaded: false
// 		};
// 	}

// 	// ComponentDidMount is used to
// 	// execute the code 
// 	componentDidMount() {
// 		fetch(
// "https://jsonplaceholder.typicode.com/users")
// 			.then((res) => res.json())
// 			.then((json) => {
// 				this.setState({
// 					items: json,
// 					DataisLoaded: true
// 				});
// 			})
// 	}
// 	render() {
// 		const { DataisLoaded, items } = this.state;
// 		if (!DataisLoaded) return <div>
// 			<h1> Pleses wait some time.... </h1> </div> ;

// 		return (
// 		<div className = "App">
// 			<h1> Fetch data from an api in react </h1> {
// 				items.map((item) => ( 
// 				<ol key = { item.id } >
// 					User_Name: { item.username }, 
// 					Full_Name: { item.name }, 
// 					User_Email: { item.email } 
// 					</ol>
// 				))
// 			}
// 		</div>
// 	);
// }
// }

// export default App;
