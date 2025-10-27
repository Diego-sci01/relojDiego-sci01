import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";

                  {/*Metodo del tutorial*/}

function SecondsCounter(props) {
	return (
		<div className="bigCounter">
			<div className="calendario">
				<i className="fa-regular fa-clock"></i>
			</div>
			<div className="cuatro">{props.digitCuatro}</div>
			<div className="tres">{props.digitTres}</div>
			<div className="dos">{props.digitDos}</div>
			<div className="uno">{props.digitUno}</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	digitCuatro: PropTypes.number,
	digitTres: PropTypes.number,
	digitDos: PropTypes.number,
	digitUno: PropTypes.number
};

const root = ReactDOM.createRoot(document.getElementById("root"));

let counter = 0;
setInterval(() => {
	const uno = Math.floor(counter / 1) % 10;
	const dos = Math.floor(counter / 10) % 10;
	const tres = Math.floor(counter / 100) % 10;
	const cuatro = Math.floor(counter / 1000) % 10;

	root.render(
		<SecondsCounter digitUno={uno} digitDos={dos} digitTres={tres} digitCuatro={cuatro}/>
	);

	counter++;
}, 1000);

export default SecondsCounter;
