import {FETCHING_DATA_FAIL, FETCHING_DATA, FETCHING_DATA_SUCCESS} from './constants';
import getPeople from './api'
export  function getData() {
    return{
        type: FETCHING_DATA
    }
}
export function getDataSuccess(data) {
    return{
        type:FETCHING_DATA_SUCCESS,
        data
    }
}

export function getDataFail() {
    return {
        type:FETCHING_DATA_FAIL
    }
}
export function fetchData() {
    return (dispatch) => {
        dispatch(getData())
        getPeople()
            .then((data) => {
                dispatch(getDataSuccess(data))
            })
            .catch((err) => console.log('err:', err))
    }
}