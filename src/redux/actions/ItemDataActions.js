import axios from "axios";
import {LOADING_ITEM_DATA, LOADING_ITEM_DATA_FAILED, LOADING_ITEM_DATA_SUCCESS} from "../../utils/constants";

const fetchItemData = () => async (dispatch) => {
    dispatch({
        type: LOADING_ITEM_DATA,
    });

    try{
        const { data } = await axios.get('https://nexus-stats.com/api', {
            params: {
                limit: 30
            }
        });
        dispatch({
            type: LOADING_ITEM_DATA_SUCCESS,
            data,
        })
    } catch(e) {
        dispatch({
        type: LOADING_ITEM_DATA_FAILED,
        e,
    });
        console.log(e.stack);
    }
};

export { fetchItemData };