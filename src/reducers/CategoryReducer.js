import { 
   All_Category_Request,
    All_Category_Success,
    All_Category_Fail, 
    Clear_Errors
} from "../Component/CategoryConstant";


export const CategoryReducer = (state={categorys:[]}, action) =>{
    switch(action.type){
        case All_Category_Request:
        return{
            loading:true,
            categorys:[]
        };

        case All_Category_Success:
            return{
                loading:false,
                categorys:action.payload
            };

            case All_Category_Fail:
            return{
                loading:false,
                error:action.payload
            };
            
            case Clear_Errors:
                return{
                    ...state,
                    error:null
                };

                default:
                    return state;
    }
} 