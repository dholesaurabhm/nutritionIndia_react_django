import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';       // added bootstrap
import 'antd/dist/antd.css';
import { Dropdown } from "./components/Dropdown/Dropdown";
import { NotFound } from "./NotFound";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import "./components/Navbar/navbar.css";


//header images
import mhf from './image_logos/mhf.png'
import nil from './image_logos/nutrition-logo.svg'
import pa from './image_logos/pa.png'


// footer images
import nilf from "./image_logos/nutrition-logo-footer.svg";
import clf from "./image_logos/ctara-logo.png";
import unil from "./image_logos/unicefLogo.png";


const App = ()=> {
return(<> 
			
<main id='main_app_container' className='flex flex-col max-h-screen'>

	<div  id="brand_container" className="grid grid-cols-3 p-4 m-2">
		{/* <div className="d-flex col-12 align-items-center p-4 main-head"> */}
			<div ><a href="https://www.mohfw.gov.in/" target="_blank" rel=" noreferrer" title="Visit Ministry of Health & Family Welfare"><img src={mhf} alt="" className="health-ministry"/></a></div>
		<div className=" mt-4 mx-auto">	<a href="/" target="" title="NutritionINDIA"><img src={nil} alt="" className="nutrition-india"/></a></div>
		<div>	<a href="http://poshanabhiyaan.gov.in/#/" target="_blank" rel=" noreferrer" title="Visit POSHAN Abhiyan" > <img src={pa} alt="" className="poshan-abhiyan"/></a></div> 
		{/* </div> */}
	</div>
	<Router  basename={'/dashboard'}>
		<Switch>
			<Route exact path="/">
				<Dropdown/>
			</Route>

			<Route exact path="/:queryLifecycle">
				<Dropdown/>
			</Route>
			<Route exact path="/:queryLifecycle/:queryCategory">
				<Dropdown/>
			</Route>
			<Route exact path="/:queryLifecycle/:queryCategory/:queryIndicator">
				<Dropdown/>
			</Route>
		
			<Route component={NotFound} />
		</Switch>
	</Router>   


	<footer className="footer p-0 mt-4">
			<div className="row  p-0 m-0 align-items-center">
				<div className="col-4">
					<a href="https://nutritionindia.info/" target="_blank" rel=" noreferrer"><img src={nilf} alt="" className="nutrition-image"/></a>
				</div>
				<div className="col-4">
					<a href="https://www.ctara.iitb.ac.in/" target="_blank" rel=" noreferrer"><img src={clf} alt="" title="CTARA" className="iitb-image"/></a>
				</div>
			
				<div className="col-4">
					<a href="http://unicef.in/" target="_blank" rel=" noreferrer"><img src={unil} alt="" className="unichef-image"/></a>
				</div>
			</div> 
		</footer>

</main>      
</>);
  }

 
export default App;