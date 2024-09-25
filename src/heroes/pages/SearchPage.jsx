import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeroCard } from '../components';
import { useForm } from '../../hooks/useForm';
import { getHeroesBySearch } from '../helpers/getHeroesBySearch';

export const SearchPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { q: query = '' } = queryString.parse(location.search);
	const heroes = getHeroesBySearch(query);

	const showMessage = query.length === 0;
	const showError = query.length > 0 && !heroes.length;

	const { searchText, onInputChange } = useForm({
		searchText: query,
	});

	const onSearchSubmit = (event) => {
		event.preventDefault();
		navigate(`?q=${searchText}`);
	};

	return (
		<div>
			<h1>Búsqueda</h1>
			<form
				onSubmit={onSearchSubmit}
				className="d-flex align-items-end gap-2"
			>
				<input
					type="text"
					name="searchText"
					value={searchText}
					autoComplete="off"
					className="form-control"
					onChange={onInputChange}
					placeholder="Ingresa un heroe"
				/>
				<button className="btn btn-primary my-2">Buscar</button>
			</form>

			<hr />
			<div
				className="alert alert-primary"
				style={{ display: showMessage ? 'block' : 'none' }}
			>
				Busca algún heroe, Que tal <b>...man</b>?
			</div>
			<div
				className="alert alert-danger"
				style={{ display: showError ? 'block' : 'none' }}
			>
				No se encontraron resultados para <b>{query}</b>
			</div>

			<div className="row rows-cols-1 row-cols-md-3 g-3">
				{heroes.map((hero) => (
					<HeroCard
						key={hero.id}
						{...hero}
					/>
				))}
			</div>
		</div>
	);
};
