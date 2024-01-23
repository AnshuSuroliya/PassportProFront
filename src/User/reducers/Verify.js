import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logout } from "./Auth";

export const verifyPassport=createAsyncThunk("verifyPassport", async(fdata,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4800/v1/api/verify",{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("jwt")}`
        },
        
        body:fdata
    });
    try{
        const result=await response.json();
        console.log(result);
        return result;
    } catch(error){
            rejectWithValue(error);
    }
});
export const getPassport=createAsyncThunk("getPassport", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4800/v1/api/profile",{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type":"application/json"
        },
        
        body:JSON.stringify(data)
    });
    try{
        const result=await response.json();
        console.log(result);
        return result;
    } catch(error){
            rejectWithValue(error);
    }
});
const verifySlice=createSlice({
    name:"verifySlice",
    initialState:{
        PassportData:[],
        GetData:[],
        isLoading:false,
        error:null
    },
    extraReducers: builder=>{
        builder.addCase(verifyPassport.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(verifyPassport.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.PassportData=(action.payload);
        })
        .addCase(verifyPassport.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(logout.fulfilled,(state)=>{
            state.PassportData=[];
        })
        .addCase(getPassport.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getPassport.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.GetData=action.payload;
        })
        .addCase(getPassport.rejected,(state,action)=>{
            state.error=action.payload;
        })
    }
})
export default verifySlice.reducer;