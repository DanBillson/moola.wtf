import axios from 'axios';
import {
    SET_INCOME,
    ADD_EXPENSE,
    REMOVE_EXPENSE,
    RESET_EXPENSES,
    AUTH_USER,
    AUTH_ERROR
} from './types';

const apiURL =
    process.env.NODE_ENV === 'production'
        ? 'https://api.moola.wtf'
        : 'http://localhost:3090';

export const signUp = (formProps, callback) => async dispatch => {
    try {
        const { data } = await axios.post(`${apiURL}/signup`, formProps);

        dispatch({ type: AUTH_USER, payload: data });
        callback(data, '');
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error.response.data.error || 'An error occured'
        });
        callback({}, error.response.data.error);
    }
};

export const signIn = (formProps, callback) => async dispatch => {
    try {
        const { data } = await axios.post(`${apiURL}/signin`, formProps);

        dispatch({ type: AUTH_USER, payload: data });
        callback(data, '');
    } catch (error) {
        const errorMessage =
            error.response.data === 'Unauthorized'
                ? 'Unable to find email and password combination'
                : error.response.data.error;
        dispatch({
            type: AUTH_ERROR,
            payload: errorMessage || 'An error occured'
        });
        callback({}, errorMessage || 'An error occured');
    }
};

export const signOut = () => {
    return {
        type: AUTH_USER,
        payload: ''
    };
};

export const setIncome = income => {
    return {
        type: SET_INCOME,
        payload: income
    };
};

export const addExpense = expense => {
    return {
        type: ADD_EXPENSE,
        payload: expense
    };
};

export const removeExpense = expense => {
    return {
        type: REMOVE_EXPENSE,
        payload: expense
    };
};

export const resetExpenses = () => {
    return {
        type: RESET_EXPENSES,
        payload: ''
    };
};
