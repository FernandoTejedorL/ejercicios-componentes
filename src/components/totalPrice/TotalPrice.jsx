const TotalPrice = ({ price }) => {
	const total = price * 1.21;
	return <h2>El precio con iva es de {total}€</h2>;
};

export default TotalPrice;
