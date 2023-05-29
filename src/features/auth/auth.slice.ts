import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {createAppAsyncThunk} from "src/app/common/utils/create-app-async-thunk.ts";
import {authApi, LoginAuthType, ProfileType} from './auth.api.ts';


const slice = createSlice({
    name: 'auth',
    initialState: {
        profile: null as ProfileType | null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload?.profile) {
                state.profile = action.payload.profile;
            }
        });
    },
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
const loginUser = createAppAsyncThunk<{ profile: ProfileType }, LoginAuthType>(
    "auth/login",
    async (data: LoginAuthType, thunkAPI) => {
        try {
            const response = await authApi.login(data)
            return {profile: response.data};
        } catch (error) {
            console.log(error)
        }
    }
)

export const authReducer = slice.reducer;
export const authThunks = {registerUser, loginUser};