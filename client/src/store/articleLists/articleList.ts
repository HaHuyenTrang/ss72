import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// lấy thông tin list
export const getList:any=createAsyncThunk("list/getList",async()=>{
    let response=await axios.get(" http://localhost:8080/list")
    return response.data;
})
export const updtaeList:any=createAsyncThunk("list/updateList",async(id:number)=>{
    let response=await axios.patch(`http://localhost:8080/list/${id}`)
    return response.data
})
const articleList =createSlice({
    name:"list",
    initialState:{
        list:[]
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getList.fulfilled,(state,action)=>{
            state.list = action.payload
        })
        .addCase(updtaeList.fulfilled,(state:any,action:any)=>{
            let index = state.list.findIndex((list:any)=>{
                return list.id===action.payload.id

            })
            if(index!=-1){
                state.list[index] =action.payload;
            }
        })
    }
})

export default articleList.reducer