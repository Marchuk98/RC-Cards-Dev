import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {authApi, LoginAuthType} from './auth.api.ts';
import {errorUtils} from "../../common/utils/error-utils.ts";


const slice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false
    },
    reducers: {},
});


const registerUser = createAsyncThunk(
    'auth/register',
    async (data: { email: string, password: string }, {rejectWithValue}) => {
        try {
            const response = await authApi.register(data);
            return {...response.data, info:"You have successfully registered"}
        } catch (e) {
            const error = errorUtils(e)
            return rejectWithValue(error)
        }
    }
);

const loginUser = createAsyncThunk(
    "auth/login",
    async (data:LoginAuthType, thunkAPI)=>{
        try {
            const response = await authApi.login(data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
)

export const authReducer = slice.reducer;
export const authThunks = {registerUser, loginUser};