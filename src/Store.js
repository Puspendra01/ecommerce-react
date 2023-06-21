import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { CategoryReducer } from "./reducers/CategoryReducer";

const reducer = combineReducers({ 
    cat:CategoryReducer  
});

let initialState = {
    cart: {

    }
};

// middleware thunk 

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;