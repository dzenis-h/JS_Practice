import * as actionTypes from './actionTypes';

// Using Action Creators so I'll be able to make async code work properly

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

export const add = ( value ) => {
    return {
        type: actionTypes.ADD,
        val: value
    };
};

export const subtract = ( value ) => {
    return {
        type: actionTypes.SUBTRACT,
        val: value
    };
};