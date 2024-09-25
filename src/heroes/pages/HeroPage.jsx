import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';
import { useMemo } from 'react';

export const HeroPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const onNavigateBack = () => {
		navigate(-1);
	};

	const hero = useMemo(() => getHeroById(id), [id]);
	if (!hero) {
		return <Navigate to="/marvel" />;
	}

	return (
		<div className="row mt-5">
			<div className="col-4 animate__animated animate__fadeInLeft">
				<img
					alt={hero.superhero}
					className="img-thumbnail"
					src={`/heroes/${id}.jpg`}
				/>
			</div>

			<div className="col-8">
				<h3>{hero.superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Alter Ego:</b> {hero.alter_ego}
					</li>
					<li className="list-group-item">
						<b>Publicado por:</b> {hero.publisher}
					</li>
					<li className="list-group-item">
						<b>Primera apariencia en:</b> {hero.first_appearance}
					</li>
				</ul>

				<h5 className="mt-3">Personajes</h5>
				<p>{hero.characters}</p>

				<button
					onClick={onNavigateBack}
					className="btn btn-outline-primary"
				>
					Regresar
				</button>
			</div>
		</div>
	);
};
