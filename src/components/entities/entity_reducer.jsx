import { CardActions } from '@material-ui/core';
import { SET_ENTITY_LIST_DATA } from './entity_action';

export default function EntityReducer(state = {}, action) {
    switch (action.type) {
        case SET_ENTITY_LIST_DATA:
            return { entity_list: action.payload }
        default:
            return state;
    }

}