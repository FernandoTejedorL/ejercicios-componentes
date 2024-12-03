const CalculateSquareArea = ({ side }) => {
	const squareArea = Math.pow(2, side);
	return <h2>The square area is {squareArea}</h2>;
};

export default CalculateSquareArea;
