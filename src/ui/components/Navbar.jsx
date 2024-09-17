import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		<div className="bg-dark p-2">
			<nav className="container navbar navbar-expand-sm navbar-dark">
				<Link
					to="/"
					className="navbar-brand bold"
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
					</div>
				</div>

				<div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
					<ul className="navbar-nav ml-auto">
						<NavLink
							className="nav-item nav-link"
							to="/login"
						>
							Login
						</NavLink>
					</ul>
				</div>
			</nav>
		</div>
	);
};
