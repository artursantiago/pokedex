import api from './';

export const getPokemons = async (limit: number, offset?: number) => {
  return await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
}

export const getPokemonByNameOrId = async (name: number | string) => {
  return await api.get(`/pokemon/${name}`);
}