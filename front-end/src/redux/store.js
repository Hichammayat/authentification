import {configureStore} from '@reduxjs/toolkit'
import SigninReducer from './Signin-reducer'
import TaskReducer from './Task-reducer'



const Store = configureStore({
    reducer : {
        
        Auth : SigninReducer,
        Tasks : TaskReducer
    }
})

export default Store