import { 
    All_Category_Request,
     All_Category_Success,
     All_Category_Fail, 
     Clear_Errors
    } from "../Component/CategoryConstant";

import axios from "axios";

export const getCategory = ()=> async(dispatch)=>{
    try {
        dispatch({type:All_Category_Request})
        let Link = 'http://ecommerce-api-im8h.onrender.com/categorydisplay'
        const { data } = await axios.get(Link);
        // console.log(data)
        dispatch({
            type: All_Category_Success,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: All_Category_Fail,
            payload: error.response.data.message,
        });
    }
}

export const ClearErrors = () => async (dispatch) => {
    dispatch({ type: Clear_Errors });
}