 /* eslint-disable */ 
import React from 'react';
import ReactDOM from 'react-dom';
import { fetchApi, getPerson, getPlanet, getVehicle } from './helper';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('helper', () => {

  describe('fetchApi', () => {

    describe('when fetch throws an exception', () => {
      beforeEach( () => {
        window.fetch = jest.fn().mockImplementation(() => {
          Promise.resolve({
            status: 500
          })
        });
      });  

      it('should throw an error if the response status is over 200', () => {

        const expected = Error('fetchApi error');
        const actual = fetchApi('nonsenseurl');

        expect(actual).rejects.toEqual(expected)
      });  
    })

    beforeEach(() => {
      const mockObj = {
        "name": 'luke',
        "homeworld": 'tattoine'
      }
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockObj)
        }))
    })

    it('fetchApi should return API data once promise resolves', async () => {
      const expected = {
        "name": 'luke',
        "homeworld": 'tattoine'
      }
      const actual = await fetchApi();
      expect(actual).toEqual(expected)
    })

    it('should call the data with the correct params', () => {
      const url = 'https://swapi.co/api/people/?format=json';

      fetchApi(url);
      expect(window.fetch).toHaveBeenCalledWith(url);
    })
  })

  describe('getPerson', () => {
      const peopleData =
      { results : [ {
              "name": "Luke Skywalker",
              "homeworld": undefined,
              "species": undefined,
              "population": undefined
            }, {
              "name": "C-3PO",
              "homeworld": undefined,
              "species": undefined,
              "population": undefined
            }, {
              "name": "R2-D2",
              "homeworld": undefined,
              "species": undefined,
              "population": undefined
            }, {
              "name": "Darth Vader",
              "homeworld": undefined,
              "species": undefined,
              "population": undefined
            }, {
              "name": "Leia Organa",
              "homeworld": undefined,
              "species": undefined,
              "population": undefined
            }, {
              "name": "Owen Lars",
              "homeworld": undefined,
              "species": undefined,
              "population": undefined
            }, {
              "name": "Beru Whitesun lars",
              "homeworld": undefined,
              "species": undefined,
              "population": undefined
            }, {
              "name": "R5-D4",
              "homeworld": undefined,
              "species": undefined,
              "population": undefined
            }, {
              "name": "Biggs Darklighter",
              "homeworld": undefined,
              "species": undefined,
              "population": undefined
            }, {
              "name": "Obi-Wan Kenobi",
              "homeworld": undefined,
              "species": undefined,
              "population": undefined
            }]};
   beforeAll(() => {
      
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(peopleData)
        }))

    })

    it('should be called with the expected parameters', async () => {
      const getPerson = jest.fn().mockImplementation( () => {
        return peopleData.results
      })

      getPerson(peopleData);
      expect(getPerson).toHaveBeenCalledWith(peopleData);
    })

    it('should be calling the window.fetch', () => {
      getPerson(peopleData);

      expect(window.fetch).toHaveBeenCalled();
    })

    it('should return an array of people', async() => {
      
      const people = await window.fetch();
      const data = await people.json()
      const array = await getPerson(data);
      expect(array).toEqual(peopleData.results);
    })
  })

  describe('getPlanet', () => {
    const planetData = {
      results: [{
        "name": "Alderaan",
        "climate": "temperate",
        "terrain": "grasslands, mountains",
        "population": "2000000000",
        "residents": [
          undefined
        ],
      }, {
        "name": "Yavin IV",
        "climate": "temperate, tropical",
        "terrain": "jungle, rainforests",
        "population": "1000",
        "residents": [
          undefined
        ],
      }]
    }
   beforeAll(() => {
      
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(planetData)
        }))

    })

    it('should be called with the expected parameters', async () => {
      const getPlanet = jest.fn().mockImplementation( () => {
        return planetData.results
      })

      getPlanet(planetData);
      expect(getPlanet).toHaveBeenCalledWith(planetData);
    })

    it('should be calling the window.fetch', () => {
      getPlanet(planetData);

      expect(window.fetch).toHaveBeenCalled();
    })

    it('should return an array of planet', async() => {
      
      const planet = await window.fetch();
      const data = await planet.json()
      const array = await getPlanet(data);
      expect(array).toEqual(planetData.results);
    })
  })
// is it being called (app)
// should call fetch with expected parameters (helper methods)
// what kind of thing does it return (data type) that where you give it mock dta 
// and it returns cleaned data
// does it return an error if the thing is rejected. 

  describe('getVehicle', () => {
    const vehicleData = {
      results: [
        {
            "name": "Sand Crawler", 
            "model": "Digger Crawler", 
            "passengers": "30", 
            "class": "wheeled", 
        }, 
        {
            "name": "T-16 skyhopper", 
            "model": "T-16 skyhopper", 
            "passengers": "1", 
            "class": "repulsorcraft", 
        }]
    }
   beforeAll(() => {
      
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(vehicleData)
        }))

    })

    it('should be called with the expected parameters', async () => {
      const getVehicle = jest.fn().mockImplementation( () => {
        return vehicleData.results
      })

      getVehicle(vehicleData);
      expect(getVehicle).toHaveBeenCalledWith(vehicleData);
    })

    it('should return an array of planet', async() => {
      
      const planet = await window.fetch();
      const data = await planet.json()
      const array = await getVehicle(data);
      expect(array).toEqual(vehicleData.results);
    })
  })
})