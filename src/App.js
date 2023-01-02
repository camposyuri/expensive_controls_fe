import { BrowserRouter } from "react-router-dom";
import RoutesComponents from "./routes";

const App = () => {
	return (
		<BrowserRouter>
			<RoutesComponents />
		</BrowserRouter>
	);
};

export default App;
