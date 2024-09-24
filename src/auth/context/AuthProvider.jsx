import PropTypes from 'prop-types';
import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

const initState = () => {
	const user = JSON.parse(localStorage.getItem('user'));

	return {
		logged: !!user,
		user,
	};
};

export const AuthProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(authReducer, {}, initState);

	const login = () => {
		const newUser = {
			id: 1,
			nombre: 'Gianmarco',
			email: 'gianmarco@correo.com',
		};

		const action = {
			type: types.login,
			payload: newUser,
		};
		dispatch(action);

		localStorage.setItem('user', JSON.stringify(newUser));
	};

	const logout = () => {
		const action = { type: types.logout };
		dispatch(action);

		localStorage.removeItem('user');
	};

	return (
		<AuthContext.Provider value={{ ...authState, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.element,
};
