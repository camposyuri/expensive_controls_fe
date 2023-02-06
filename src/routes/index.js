import { Route, Routes } from "react-router-dom";

import Menu from "../components/Menu";
import Account from "../pages/Account";
import CustomerForm from "../pages/Customer/form";
import CustomerList from "../pages/Customer/list";
import Home from "../pages/Home";
import LoginForm from "../pages/Login/form";
import Person from "../pages/Person";
import ProviderList from "../pages/Provider/list";
import SignUpForm from "../pages/Signup/form";
import UserForm from "../pages/User/form";
import UserList from "../pages/User/list";
import RequireAuth from "./RequireAuth";

const RoutesComponents = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginForm />} />
			<Route path="/signup" element={<SignUpForm />} />
			<Route element={<Menu />}>
				<Route
					path="home"
					element={
						<RequireAuth>
							<Home />
						</RequireAuth>
					}
				/>

				<Route
					path="user"
					element={
						<RequireAuth>
							<UserList />
						</RequireAuth>
					}
				/>

				<Route
					path="user-form"
					element={
						<RequireAuth>
							<UserForm />
						</RequireAuth>
					}
				/>

				<Route
					path="customer"
					element={
						<RequireAuth>
							<CustomerList />
						</RequireAuth>
					}
				/>

				<Route
					path="provider"
					element={
						<RequireAuth>
							<ProviderList />
						</RequireAuth>
					}
				/>

				<Route
					path="person"
					element={
						<RequireAuth>
							<Person />
						</RequireAuth>
					}
				/>

				<Route
					path="account"
					element={
						<RequireAuth>
							<Account />
						</RequireAuth>
					}
				/>

				<Route
					path="customer-form"
					element={
						<RequireAuth>
							<CustomerForm />
						</RequireAuth>
					}
				/>
			</Route>
		</Routes>
	);
};

export default RoutesComponents;
