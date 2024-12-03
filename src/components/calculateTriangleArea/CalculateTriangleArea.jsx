const CalculateTriangleArea = ({ base, height }) => {
	const triangleArea = (base * height) / 2;
	return <h2>The triangle area is {triangleArea}</h2>;
};

export default CalculateTriangleArea;
