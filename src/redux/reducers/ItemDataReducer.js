import {LOADING_ITEM_DATA, LOADING_ITEM_DATA_FAILED, LOADING_ITEM_DATA_SUCCESS} from "../../utils/constants";

const initialState = {
    data: [],
};

const itemDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_ITEM_DATA:
            return {
                ...state,
            };
        case LOADING_ITEM_DATA_FAILED:
            break;
        case LOADING_ITEM_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
            };
        default:
            return state;
    }
}

export default itemDataReducer;