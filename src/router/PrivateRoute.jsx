import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth';

export const PrivateRoute = ({ children }) => {
	const { logged } = useContext(AuthContext);
	const { pathname, search } = useLocation();

	useEffect(() => {
		const lastPath = pathname + search;
		localStorage.setItem('lastPath', lastPath);
	}, [pathname, search]);

	return logged ? children : <Navigate to="/auth/login" />;
};

PrivateRoute.propTypes = {
	children: PropTypes.element,
};
