import { heroes } from '../data/heroes';

export const getHeroesBySearch = (search) => {
	search = search.trim().toLocaleLowerCase();

	if (!search.length) return [];

	return heroes.filter((hero) =>
		['superhero', 'alter_ego', 'characters'].some((field) =>
			hero[field].toLocaleLowerCase().includes(search)
		)
	);
};
