
export const fetchApi = async (url) => {

  try {
    const fetched = await fetch(url);
    const response = await fetched.json();

    if (fetched.status <= 200) {
      return response;
    } else {
      throw new Error('Bad status code');
    }
  } catch (error) {
    throw new Error('fetchApi error');
  }
}

export const getFilm = async () => {
  const films = await fetchApi('https://swapi.co/api/films/?format=json');
  const resolvedPromise = await getFilms(films);
  const randomFilm = resolvedPromise[Math.floor(Math.random()*resolvedPromise.length)]
  return randomFilm
} 

const getFilms = (films) => {
  const unreslovedPromises = films.results.map(async (film) => {
    return {
      name: film.title,
      episode_id: film.episode_id,
      opening_crawl: film.opening_crawl,
    }
  })

  return Promise.all(unreslovedPromises)
}

export const getPeople = async () => {
  const people = await fetchApi('https://swapi.co/api/people/?format=json');
  const resolvedPromise = await getPerson(people);
  return resolvedPromise
}

const getPerson = (people) => {
  const unreslovedPromises = people.results.map(async (person) => {
    let species = await fetchApi(person.species);
    let homeworld = await fetchApi(person.homeworld);
    return {
      name: person.name,
      species: species.name,
      homeworld: homeworld.name,
      population: homeworld.population
    }
  })

  return Promise.all(unreslovedPromises)
}

export const getPlanets = async () => {
  const planets = await fetchApi('https://swapi.co/api/planets/?format=json');
  const resolvedPromise = await getPlanet(planets);
  return resolvedPromise
}

const getPlanet = (planets) => {
  const unreslovedPromises = planets.results.map(async (planet) => {

    let unresolvedResidents = await planet.residents.map(async (resident) => {
      let residentPage = await fetchApi(resident)
      let name = await residentPage.name;

      return name;
    })

    let residents = await Promise.all(unresolvedResidents);

    // name, terrain, population, climate, residents, favorite
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: residents
    }
  })

  return Promise.all(unreslovedPromises)
}

export const getVehicles = async () => {
  const vehicles = await fetchApi('https://swapi.co/api/vehicles/?format=json');
  const resolvedPromise = await getVehicle(vehicles);
  return resolvedPromise;
}

const getVehicle = (vehicles) => {
  const unreslovedPromises = vehicles.results.map((vehicle) => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.class,
      passengers: vehicle.passengers,
    }
  })

  return Promise.all(unreslovedPromises)
}