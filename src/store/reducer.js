import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        tofu: 0,
        tuna: 0,
        salmon: 0
    },
    totalPrice: 7.5
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    tuna: 1,
    salmon: 1,
    tofu: 0.8
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        default:
            return state;
    }
};

export default reducer;