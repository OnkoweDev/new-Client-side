import { createSlice } from "@reduxjs/toolkit";


export const userSlice= createSlice({
name:'userObject',
initialState:{
    User:null
},
reducers:{
    login:(state,action)=>{
        state.User=action.payload
    },
    logout:(state)=>{
        state.User=null
    }
}

})

export const {login,logout}=userSlice.actions
export default userSlice.reducer;