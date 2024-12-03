const CalculateCircleArea = ({ radio }) => {
	const circleArea = radio * radio * 3.141516;
	return <h2>El area del círculo es {circleArea.toFixed(2)}</h2>;
};

export default CalculateCircleArea;
