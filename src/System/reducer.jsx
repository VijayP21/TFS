import { combineReducers } from 'redux';
import EntityReducer from '../components/entities/entity_reducer'


const allReducers = combineReducers({
    entity: EntityReducer
})

export default allReducers;