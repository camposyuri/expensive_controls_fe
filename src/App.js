import { GoogleOAuthProvider } from "@react-oauth/google";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/global";
import defaultTheme from "./assets/styles/theme/default";
import { AuthProvider } from "./hooks/useAuth";
import RoutesComponents from "./routes";
import { Container } from "./styles";

const App = () => {
	return (
		<GoogleOAuthProvider clientId="81066842807-a6iq3s229rgiagc2upnmv11j462r67m3.apps.googleusercontent.com">
			<HashRouter>
				<ThemeProvider theme={defaultTheme}>
					<AuthProvider>
						<Container>
							<GlobalStyles />
							<RoutesComponents />
						</Container>
					</AuthProvider>
				</ThemeProvider>
			</HashRouter>
		</GoogleOAuthProvider>
	);
};

export default App;
