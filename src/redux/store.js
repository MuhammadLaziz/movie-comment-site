import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reducer from "./reducer/movieReducer"
// import rootReducer from "./reducer/rootReducer"

const store = createStore(reducer, composeWithDevTools())

export default store