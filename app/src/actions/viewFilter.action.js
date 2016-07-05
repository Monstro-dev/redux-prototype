export const SET_FILTER = 'SET_FILTER';

export const SHOW_COMPELETED = 'SHOW_COMPELETED';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SHOW_ALL = 'SHOW_ALL';

export const visibilityFilter = {
    SHOW_COMPELETED,
    SHOW_ACTIVE,
    SHOW_ALL
}

//action creator
export function setFilter (filter) {
    return {
        type: SET_FILTER,
        filter
    }
}
