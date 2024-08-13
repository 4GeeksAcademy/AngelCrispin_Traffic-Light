import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TrafficLight from "./trafficLight";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			{/* <h1 className="text-center my-5">Traffic Light</h1> */}
			<TrafficLight texto="asdaswd"/>
		</div>
	);
};

export default Home;
