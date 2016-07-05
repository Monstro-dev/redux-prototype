import * as filterAction from './../actions/viewFilter.action';

const filterInitialState = filterAction.SHOW_ALL;

export default function filterReducer( state = filterInitialState, action) {
    switch (action.type) {
        case filterAction.SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}
