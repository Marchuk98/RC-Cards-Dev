import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authApi } from './auth.api.ts';



const slice = createSlice({
    name: 'auth',
    initialState: {},
    reducers: {},
});



const registerUser = createAsyncThunk(
    'auth/register',
    async (data: { email: string, password: string }, thunkAPI) => {
        try {
            const response = await authApi.register(data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
);

export const authReducer = slice.reducer;
export const authThunks = { registerUser };