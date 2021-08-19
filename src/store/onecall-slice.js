import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// import { message} from "antd";

const key = '80a9ad015d8ce64e904fc91dc142562c';
export const fetchOneCall = createAsyncThunk('onecall/fetchOneCall',
    async (toado, thunkAPI) => {
        const {lat, lon} = toado;
        const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&APPID=${key}`);
        if (!res.ok) {
            return thunkAPI.rejectWithValue('Không tìm thấy')
        }
        const data = await res.json();
        return data;
    }
)


 const onecallSlice = createSlice({
     name: 'onecall',
     initialState: {},
     reducers: {},
     extraReducers: builder => {
         builder.addCase(fetchOneCall.fulfilled, (state, action)=>{
             // message.success('Tìm kiếm thành công',3)
             return action.payload
         }).addCase(fetchOneCall.rejected, (action, payload)=> {
             // ADD MESSAGE ERROR
             // message.error('Khôngtìm thấy dữ liệu',3)
         })
     }
 })


export default onecallSlice.reducer;