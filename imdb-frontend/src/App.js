import React from 'react';
import './App.css';

import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MainBox from './components/MainBox';

function App() {
	return (
		<>
			<div className="App">
				<Header />
       				
  				<MainBox />
			</div>
		</>
	);
}

export default App;






// const Header = () =>{
// 	return (

// 		<section>

// 			 <section>
// 				<nav className="navbar navbar-default">
// 					<div className="container">
// 						<div className="navbar-header">
// 							<a className="navbar-brand" href="/list">Logo</a>
// 						</div>
// 						<div id="navbar" className="navbar-collapse collapse">

// 							<ul className="nav navbar-nav navbar-right">
// 								<li><span className="loggedInUser">email</span></li>
// 								<li><a>Logout</a></li>
// 							</ul>
// 						</div>
// 					</div>
// 				</nav> 
// 			</section>
// 		</section>
// 	);
// }
