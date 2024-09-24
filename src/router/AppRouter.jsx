import { Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute, PublicRoute } from '../router';

export const AppRouter = () => {
	return (
		<Routes>
			<Route
				path="/auth/*"
				element={
					<PublicRoute>
						<Routes>
							<Route
								path="login"
								element={<LoginPage />}
							/>
							<Route
								path="register"
								element={<RegisterPage />}
							/>
						</Routes>
					</PublicRoute>
				}
			/>
			<Route
				path="/*"
				element={
					<PrivateRoute>
						<HeroesRoutes />
					</PrivateRoute>
				}
			/>
		</Routes>
	);
};
