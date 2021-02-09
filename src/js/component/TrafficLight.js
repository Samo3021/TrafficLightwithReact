import React, { useState } from "react";

export const TrafficLight = () => {
	const [colorBox, setColorBox] = useState("");

	return (
		<div>
			<div id="trafficTop"></div>
			<div id="container">
				<div
					className={
						"red light " + (colorBox == "red" ? "selected" : "")
					}
					onClick={() => {
						setColorBox("red");
					}}></div>
				<div
					className={
						"yellow light " +
						(colorBox == "yellow" ? "selected" : "")
					}
					onClick={() => {
						setColorBox("yellow");
					}}></div>
				<div
					className={
						"green light " + (colorBox == "green" ? "selected" : "")
					}
					onClick={() => {
						setColorBox("green");
					}}></div>
			</div>
		</div>
	);
};

// import React, { useState } from "react";
// // imports
// //create your first component
// export function ConditionalRenderFunction() {
// 	let colores = ["red", "blue", "green", "purple", "orange"];
// 	let [colorBox, setColorBox] = useState("red");
// 	const cambiarColor = () => {
// 		let color = Math.floor(Math.random() * colores.length);
// 		// console.log(color);
// 		setColorBox((colorBox = colores[color]));
// 	};
// 	return (
// 		<div className="color-box">
// 			<h1>Componente Funcion</h1>
// 			<div className="box" style={{ backgroundColor: colorBox }}></div>
// 			<p>{colorBox}</p>
// 			<button onClick={cambiarColor}>Cambiar Color</button>
// 		</div>
// 	);
// }
