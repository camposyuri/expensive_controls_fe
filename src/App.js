import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/global";
import defaultTheme from "./assets/styles/theme/default";
import RoutesComponents from "./routes";
import { Container } from "./styles";

const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={defaultTheme}>
				<Container>
					<GlobalStyles />
					<RoutesComponents />
				</Container>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
