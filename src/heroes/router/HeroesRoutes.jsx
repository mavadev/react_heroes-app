import { Navigate, Route, Routes } from 'react-router-dom';
import { DcPage, MarvelPage, SearchPage, HeroPage } from '../pages';
import { Navbar } from '../../ui';

export const HeroesRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container my-4">
				<Routes>
					<Route
						path="/"
						element={<Navigate to="/marvel" />}
					/>
					<Route
						path="marvel"
						element={<MarvelPage />}
					/>
					<Route
						path="dc"
						element={<DcPage />}
					/>
					<Route
						path="search"
						element={<SearchPage />}
					/>
					<Route
						path="hero/:id"
						element={<HeroPage />}
					/>
				</Routes>
			</div>
		</>
	);
};
