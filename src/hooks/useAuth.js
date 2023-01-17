import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services";
import { signin } from "../services/login";

const initialValues = {
	values: { admin: false, email: "", exp: 0, iat: 0, status: false, token: "" },
	isAuthenticated: false,
};

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(initialValues.values);
	const isAuthenticated = useMemo(() => !!user.token, [user]);

	const navigate = useNavigate();

	useEffect(() => {
		const storagedUser = sessionStorage.getItem("@App:user");
		const storagedToken = sessionStorage.getItem("@App:token");

		if (storagedToken && storagedUser) {
			setUser(JSON.parse(storagedUser));
			api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
		}
	}, []);

	const signIn = async (data) => {
		const response = await signin(data);

		setUser(response);

		api.defaults.headers.Authorization = `Bearer ${response.token}`;

		sessionStorage.setItem("@App:user", JSON.stringify(response));
		sessionStorage.setItem("@App:token", response.token);

		if (isAuthenticated) return navigate("/home");
	};

	const logout = () => setUser(initialValues.values);

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated,
				signIn,
				logout,
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
