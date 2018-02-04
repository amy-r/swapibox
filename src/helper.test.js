import React from 'react';
import ReactDOM from 'react-dom';
import { fetchApi, getPerson } from './helper';
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
   beforeEach(() => {
      const peopleData =
      [{
        "name": "Luke Skywalker",
        "homeworld": "Tatooine",
        "species": "Human",
        "population": "200000"
      }, {
        "name": "C-3PO",
        "homeworld": "Tatooine",
        "species": "Droid",
        "population": "200000"
      }, {
        "name": "R2-D2",
        "homeworld": "Naboo",
        "species": "Droid",
        "population": "4500000000"
      }, {
        "name": "Darth Vader",
        "homeworld": "Tatooine",
        "species": "Human",
        "population": "200000"
      }, {
        "name": "Leia Organa",
        "homeworld": "Alderaan",
        "species": "Human",
        "population": "2000000000"
      }, {
        "name": "Owen Lars",
        "homeworld": "Tatooine",
        "species": "Human",
        "population": "200000"
      }, {
        "name": "Beru Whitesun lars",
        "homeworld": "Tatooine",
        "species": "Human",
        "population": "200000"
      }, {
        "name": "R5-D4",
        "homeworld": "Tatooine",
        "species": "Droid",
        "population": "200000"
      }, {
        "name": "Biggs Darklighter",
        "homeworld": "Tatooine",
        "species": "Human",
        "population": "200000"
      }, {
        "name": "Obi-Wan Kenobi",
        "homeworld": "Stewjon",
        "species": "Human",
        "population": "unknown"
      }];
      
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockArr)
        }))
    })



    it('should call fetchApi with the expected parameters', () => {
      const url = 'https://swapi.co/api/people/?format=json';
      getPeople();
      expect(window.fetch).toHaveBeenCalledWith(url)
    })
  })

// is it being called (app)
// should call fetch with expected parameters (helper methods)
// what kind of thing does it return (data type) that where you give it mock dta 
// and it returns cleaned data
// does it return an error if the thing is rejected. 

})