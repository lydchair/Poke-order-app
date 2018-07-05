import React from 'react';
import renderer from 'react-test-renderer';

import reducer from './reducer';

describe('reducer ', () => {
    it('should return initial state', () => {
      expect(reducer(undefined, {})).toMatchSnapshot();
    });
  
    it('should handle ADD_INGREDIENT', () => {
      const action = {
        type: 'ADD_INGREDIENT',
        ingredient: '',
        totalPrice:'',
      };
  
      expect(reducer(undefined, action)).toMatchSnapshot();
    });
  
    it('should handle UPDATE_NAME', () => {
      const action = {
        type: 'REMOVE_INGREDIENT',
        ingredient: '',
        totalPrice:'',
      };
  
      expect(reducer(undefined, action)).toMatchSnapshot();
    });
  });