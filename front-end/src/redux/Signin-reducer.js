import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from'axios'

export const checkUser= createAsyncThunk("Auth/checkUser",async({userAccount})=>{
    return axios.post('http://localhost:9000/signin',userAccount)
    .then(res => {return res.data})
    
    .catch(err => {return err.data.message})
})


const SigninSlice = createSlice({
    name: 'Auth',
    initialState :  {
       user : {},
        status: "",
        Erreur: "",
      },
    reducers:{},
    extraReducers: {
        [checkUser.fulfilled]: (state, action) => {
          console.log(action.payload)

         if(action.payload===false){
            state.Erreur ="email or password wrong"
         }else {
            state.user= action.payload
            localStorage.setItem("user", JSON.stringify(action.payload))

          };
          state.status = "Success";
        },
        [checkUser.rejected] : (state, action) =>{
            state.Erreur = action.payload
            state.status = "Rejected"
        },
        [checkUser.pending] : (state)=>{
            state.status = "Pending"
        }
}})
export default SigninSlice.reducer;