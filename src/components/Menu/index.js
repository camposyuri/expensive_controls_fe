import { Hidden, IconButton } from "@mui/material";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Container, Header, Logout, MenuUl, Title } from "./styles";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Menu = () => {
	const { signout } = useAuth();
	const [openMenu, setOpenMenu] = useState(false);

	const handleToggleMenu = () => setOpenMenu(!openMenu);

	return (
		<Container>
			<Header>
				<Title>
					<Link to="/home">Controle de Gastos</Link>
				</Title>
				<Hidden mdUp>
					<IconButton onClick={() => handleToggleMenu()}>
						{!openMenu ? <MenuIcon /> : <CloseIcon />}
					</IconButton>
					{openMenu && (
						<nav>
							<MenuUl>
								<li>
									<Link to="/user">Usuário</Link>
								</li>
								<li>
									<Link to="/customer">Cliente</Link>
								</li>
								<li>
									<Link to="/provider">Fornecedor</Link>
								</li>
								<li>
									<Link to="/person">Pessoa</Link>
								</li>
								<li>
									<Link to="/account">Conta</Link>
								</li>
								<Link onClick={() => signout()}>
									<Logout>Log Out</Logout>
								</Link>
							</MenuUl>
						</nav>
					)}
				</Hidden>
				<Hidden smDown mdDown>
					<nav>
						<MenuUl>
							<li>
								<Link to="/user">Usuário</Link>
							</li>
							<li>
								<Link to="/customer">Cliente</Link>
							</li>
							<li>
								<Link to="/provider">Fornecedor</Link>
							</li>
							<li>
								<Link to="/person">Pessoa</Link>
							</li>
							<li>
								<Link to="/account">Conta</Link>
							</li>
						</MenuUl>
					</nav>

					<Link onClick={() => signout()}>
						<Logout>Log Out</Logout>
					</Link>
				</Hidden>
			</Header>
			<Outlet />
		</Container>
	);
};

export default Menu;
