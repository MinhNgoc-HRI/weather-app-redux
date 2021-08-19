// import {createSlice, createAsyncThunk,} from '@reduxjs/toolkit';
// import {message} from "antd";
//
//
// const key = '80a9ad015d8ce64e904fc91dc142562c';
// export const fetchWeather = createAsyncThunk('weather/fetchWeatherByName',
//     async (name, thunkAPI) => {
//         const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&APPID=${key}`);
//         if (!res.ok) {
//             return thunkAPI.rejectWithValue('loi roi')
//         }
//         const data = await res.json();
//         return data
//     }
// );
//
// const weatherSlice = createSlice({
//     name: 'weather',
//     initialState: {},
//     reducers: {},
//     extraReducers: builder => {
//         builder.addCase(fetchWeather.fulfilled, (state, action) => {
//             // ADD MESSAGE SUCCESS
//             message.success('Tìm kiếm thành công',3)
//             return action.payload;
//         }).addCase(fetchWeather.rejected, (state, action) => {
//             // ADD MESSAGE ERROR
//             message.error('Khôngtìm thấy dữ liệu',3)
//         })
//     }
// })
//
//
// export const weatherAction = weatherSlice.actions;
// export default weatherSlice.reducer;