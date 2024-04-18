import React, { useState, useEffect } from "react";

function counter(){
	const [count, setCount] = useState(0);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		let timer = null;
		if (isActive){
			timer = setInterval(() =>{
				setCount((prevCount) => prevCount + 1);
			}, [1000]);
		} else if (!isActive && timer !== null){
			clearInterval(timer);
		}
		return () => clearInterval(timer);
	}, [isActive]);

	const startCounter = () => setIsActive(true);
	const stopCounter = () => setIsActive(false);
	const resetCounter = () => {
		setIsActive(false);
    	setCount(0);
	};
	const formattedCount = count 
		.toString()
		.padStart(6, "0")
		.split("")
		.map((digit, index) => (
			<div key={index} className="digit">{digit}</div>
		));


		return (
			<div className="counter">
			  <i className="fas fa-clock"></i>
			  {formattedCount}
			  <div className="buttons">
				<button onClick={startCounter}>Start</button>
				<button onClick={stopCounter}>Stop</button>
				<button onClick={resetCounter}>Reset</button>
			  </div>
			</div>
		  );


}

export default counter;