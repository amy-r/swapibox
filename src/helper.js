
const fetchApi = async (url) => {
    try {
      const fetched = await fetch(url);
      const response = await fetched.json();
      return response;
    } catch (error) {
      this.setState({ errorStatus: 'fetchApi Error'})
    }
  }

  export const getPeople = async() => {
    const people = await fetchApi('https://swapi.co/api/people/?format=json');
    const resolvedPromise = await getPerson(people);
    return resolvedPromise
    // this.setState({people: resolvedPromise})
  }

  const getPerson = (people) => {
    const unreslovedPromises = people.results.map( async (person) => {
      let species = await fetchApi(person.species);
      let homeworld = await fetchApi(person.homeworld);
      return {
        name: person.name,
        species: species.name,
        homeworld: homeworld.name,
        population: homeworld.population
      }
    })
    
  //fetches for homeworld, homeworld population, species

    return Promise.all(unreslovedPromises)
  }

  export const getPlanets = async() => {
    const planets = await fetchApi('https://swapi.co/api/planets/?format=json');
    const resolvedPromise = await getPlanet(planets);
    return resolvedPromise
  }

  const getPlanet = (planets) => {
    const unreslovedPromises = planets.results.map( async (planet) => {

      let unresolvedResidents = await planet.residents.map( async (resident) => {
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

  export const getVehicles = async() => {
    const vehicles = await fetchApi('https://swapi.co/api/vehicles/?format=json');
    const resolvedPromise = await getVehicle(vehicles);
    return resolvedPromise;
  }

  const getVehicle = (vehicles) => {
    const unreslovedPromises = vehicles.results.map( (vehicle) => {
      return {
        name: vehicle.name,
        model: vehicle.model,
        class: vehicle.class,
        passengers: vehicle.passengers,
      }
    })

    return Promise.all(unreslovedPromises)
  }
