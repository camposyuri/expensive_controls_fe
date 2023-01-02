import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

import Menu from "../components/Menu";
import CustomerForm from "../pages/Customer/form";
import CustomerList from "../pages/Customer/list";

const RoutesComponents = () => {
	return (
		<Routes>
			<Route path="/" element={<Menu />}>
				<Route index element={<Home />} />
				<Route path="customer-list" element={<CustomerList />} />
				<Route path="customer-form" element={<CustomerForm />} />
			</Route>
		</Routes>
	);
};

export default RoutesComponents;
