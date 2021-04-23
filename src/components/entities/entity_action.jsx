export const SET_ENTITY_LIST_DATA = 'SET_ENTITY_LIST_DATA';

export function setEntityData(data) {
    return function (dispatch) {
        dispatch({
            type: SET_ENTITY_LIST_DATA,
            payload: data
        })
    }
}