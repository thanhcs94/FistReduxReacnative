import {FETCHING_DATA,  FETCHING_DATA_FAIL, FETCHING_DATA_SUCCESS} from '../constants';

// inital state
const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
}

export default function dataReducer(state=  initialState, action) {
    switch (action.type){
        case FETCHING_DATA:
            return {
                ...state,
                data:[],
                isFetching:true
            }
        case FETCHING_DATA_SUCCESS:
            return{
                ...state,
                data: action.data,
                isFetching: false
            }
        case FETCHING_DATA_FAIL:
            return{
                ...state,
                isFetching: false,
                error:true
            }
        default:
            return state;
    }
}