import CalculateCircleArea from './components/calculateCircleArea/CalculateCircleArea';
import CalculateSquareArea from './components/calculateSquareArea/CalculateSquareArea';
import CalculateTriangleArea from './components/calculateTriangleArea/CalculateTriangleArea';
import CelsiusToFarenheit from './components/celsiusToFarenheit/CelsiusToFarenheit';
import FarenheitToCelsius from './components/farenheitToCelsius/FarenheitToCelsius';
import SayHello from './components/sayHello/SayHello';
import TotalPrice from './components/totalPrice/TotalPrice';
import WriteMessage from './components/writeMessage/WriteMessage';

// {} -> <>
const App = () => {
	return (
		<>
			<SayHello name='Fer' />
			<CalculateSquareArea side={4} />
			<CalculateTriangleArea base={3} height={4} />
			<CalculateCircleArea radio={5} />
			<CelsiusToFarenheit celsius={20} />
			<FarenheitToCelsius farenheit={68} />
			<TotalPrice price={10} />
			<WriteMessage name='Fernando' material='PVC' size='XXL' note='gracias' />
		</>
	);
};

export default App;
