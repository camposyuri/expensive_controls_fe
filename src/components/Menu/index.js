import { Link, Outlet } from "react-router-dom";

const Menu = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/home">Home</Link>
					</li>
					<li>
						<Link to="/customer-list">Customer List</Link>
					</li>
					<li>
						<Link to="/customer-form">CustomerForm</Link>
					</li>
					<li>
						<Link to="/">Log Out</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
};

export default Menu;
