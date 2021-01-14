import { getPokemons, getPokemonByNameOrId} from '../api/apiCalls';
import { baseImageUrl } from '../api';
import { pad } from './utils';
import PokemonCard from '../pages/PokemonCard';

interface Pokemon {
  id: number,
  // generation?: string,
  name: string,
  imageUrl: string,
  types: string[]
}

interface PokemonInitialData {
  name: string,
  url: string,
}

interface initialTypeFormat {
  type: {
    name: string
  }
}

const getPokemonNames = (pokemonsData: PokemonInitialData[]): string[] => {
  return pokemonsData.map( (pokemon: PokemonInitialData) => {
    return pokemon.name;
  });
}

const getPokemonsFormatted = async (pokemonsNameList: string[]) => {
  let newPokemonList = pokemonsNameList.map(async pokemonName => {
    const response = await getPokemonByNameOrId(pokemonName);
    const pokeDetailData = response.data;
    return {
      id: pokeDetailData.id,
      name: pokeDetailData.name,
      types: pokeDetailData.types.map( (typeElement: initialTypeFormat) => typeElement.type.name),
      imageUrl: baseImageUrl + pad(pokeDetailData.id, 3) + '.png',
    };
  });

  return Promise.all(newPokemonList);
}

export const getPokemonsDynamically = async (limit: number, offset?: number) => {

  const responseInitialPokemons = await getPokemons(limit, offset);
  // Verificar se está vazio

  const pokemonsNameList =  getPokemonNames(responseInitialPokemons.data.results);

  const pokemonsDetail: Pokemon[] = await getPokemonsFormatted(pokemonsNameList);

  return pokemonsDetail;
}