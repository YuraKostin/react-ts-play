import {createStore} from "redux";

export type State = {
    count: number
};

export type SetAction = {
    type: 'SET',
    payload: number
};

const initialState: State = {
  count: 0
}

const reducer = (state = initialState, action: SetAction): State => {
    if (action.type === 'SET') {
        return {
            count: action.payload
        };
    }

    return state;
}

export const store = createStore(reducer, initialState);


