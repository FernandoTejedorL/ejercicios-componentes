const FarenheitToCelsius = ({ farenheit }) => {
	const celsius = (farenheit - 32) / 1.8;
	return <h2>Equivale a {celsius} grados Celsius</h2>;
};

export default FarenheitToCelsius;
