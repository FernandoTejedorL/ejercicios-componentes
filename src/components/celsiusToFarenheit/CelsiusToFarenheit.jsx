const CelsiusToFarenheit = ({ celsius }) => {
	const farenheit = celsius * 1.8 + 32;
	return <h2>Equivale a {farenheit} grados Farenheit</h2>;
};

export default CelsiusToFarenheit;
