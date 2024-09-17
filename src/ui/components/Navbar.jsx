import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
	const navigate = useNavigate();

	const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	};

	return (
		<div className="bg-dark p-2">
			<nav className="navbar navbar-expand-sm navbar-dark container">
				<Link
					to="/"
					className="navbar-brand"
				>
					HeroesApp
				</Link>

				<div className="navbar-collapse">
					<div className="navbar-nav">
						<NavLink
							className="nav-item nav-link"
							to="/marvel"
						>
							Marvel
						</NavLink>

						<NavLink
							className="nav-item nav-link"
							to="/dc"
						>
							DC
						</NavLink>
						<NavLink
							className="nav-item nav-link"
							to="/search"
						>
							Buscar
						</NavLink>
					</div>
				</div>

				<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
					<ul className="navbar-nav ml-auto">
						<span className="nav-item nav-link text-secondary">Gianmarco</span>
						<button
							type="button"
							onClick={onLogout}
							className="nav-item btn btn-danger"
						>
							Cerrar Sesión
						</button>
					</ul>
				</div>
			</nav>
		</div>
	);
};
