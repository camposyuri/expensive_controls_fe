import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../services";
import { signin } from "../services/login";

const initialValues = {
	values: {
		admin: false,
		email: "",
		name: "",
		exp: 0,
		iat: 0,
		status: false,
		token: "",
	},
};

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(initialValues.values);

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const storagedUser = localStorage.getItem("@App:user");
		const storagedToken = localStorage.getItem("@App:token");

		if (storagedToken && storagedUser) {
			setUser(JSON.parse(storagedUser));
			api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
			return navigate(location.pathname);
		}
	}, []);

	const isAuthenticated = useMemo(() => !!user.token, [user]);

	const signIn = async (data) => {
		const response = await signin(data);

		setUser(response);

		api.defaults.headers.Authorization = `Bearer ${response.token}`;

		localStorage.setItem("@App:user", JSON.stringify(response));
		localStorage.setItem("@App:token", response.token);
		navigate("/home");
	};

	const signout = () => {
		setUser(initialValues.values);
		localStorage.removeItem("@App:user");
		localStorage.removeItem("@App:token");
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated,
				signIn,
				signout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	return context;
};
