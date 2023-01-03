import { Route, Routes } from "react-router-dom";

import Menu from "../components/Menu";
import CustomerForm from "../pages/Customer/form";
import CustomerList from "../pages/Customer/list";
import Home from "../pages/Home";

import LoginForm from "../pages/Login/form";

const RoutesComponents = () => {
	return (
		<Routes>
			<Route index element={<LoginForm />} />
			<Route path="/" element={<Menu />}>
				<Route path="home" element={<Home />} />
				<Route path="customer-list" element={<CustomerList />} />
				<Route path="customer-form" element={<CustomerForm />} />
			</Route>
		</Routes>
	);
};

export default RoutesComponents;
